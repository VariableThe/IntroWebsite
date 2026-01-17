"use client";

import React, { useEffect, useRef } from "react";

export function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let mouseX = -1000;
        let mouseY = -1000;

        // Configuration
        const GRID_SPACING = 25; // More dots (was 40)
        const MAX_DOT_SIZE = 5;  // Brighter/Bigger (was 3)
        const MIN_DOT_SIZE = 0; // Invisible by default as requested
        const HOVER_RADIUS = 300;
        const DOT_COLOR = "#f43f5e"; // Rose

        // Init canvas size
        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        // Mouse tracking
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Animation Loop
        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw dots
            // Loop with slight padding to ensure dots scale at edges
            for (let x = 0; x < width + GRID_SPACING; x += GRID_SPACING) {
                for (let y = 0; y < height + GRID_SPACING; y += GRID_SPACING) {
                    // Calculate distance
                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Interaction Logic
                    if (distance < HOVER_RADIUS) {
                        // Scale size based on distance (closer = bigger)
                        // normalize distance: 0 (at mouse) to 1 (at edge of radius)
                        const t = 1 - distance / HOVER_RADIUS;
                        // cubic ease out for smoother feel? or just linear
                        const size = MIN_DOT_SIZE + (MAX_DOT_SIZE - MIN_DOT_SIZE) * t;
                        const opacity = t; // Fade out as it gets further

                        ctx.globalAlpha = opacity;
                        ctx.fillStyle = DOT_COLOR;
                        ctx.beginPath();
                        ctx.arc(x, y, size, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            requestAnimationFrame(render);
        };

        const animationId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none bg-background"
        />
    );
}
