"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Menu items configuration
// Menu items configuration
const menuItems = [
    { label: "HOME", href: "/", color: "bg-emerald-500" },        // Changed to Green
    { label: "PROJECTS", href: "/projects", color: "bg-yellow-400" },
    { label: "EXPERIENCE", href: "/experience", color: "bg-rose-500" },
    { label: "ABOUT", href: "/about", color: "bg-blue-600" },
];

export function RadialMenu() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="relative flex flex-col items-start gap-8 p-10 z-20 scale-125 origin-left">
            {menuItems.map((item, index) => (
                <Link key={item.label} href={item.href} className="relative group perspective-1000">
                    <motion.div
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        initial={{ x: -100, opacity: 0, rotateX: 0, rotateY: 0 }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            rotateZ: -5, // Slight persistent tilt
                            skewX: -10   // Stylistic skew
                        }}
                        transition={{
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100,
                            damping: 12
                        }}
                        whileHover={{
                            scale: 1.2,
                            x: 40,
                            rotateZ: 0,
                            skewX: -5,
                            transition: { type: "spring", stiffness: 300 }
                        }}
                        className="relative z-10 cursor-pointer mb-4"
                    >
                        {/* Background Strip (Appears on Hover) */}
                        <motion.div
                            className={cn(
                                "absolute inset-0 -skew-x-12 opacity-0 z-[-1]",
                                item.color
                            )}
                            animate={{
                                opacity: hoveredIndex === index ? 1 : 0,
                                width: hoveredIndex === index ? "140%" : "0%",
                                x: -20
                            }}
                        />

                        {/* Text Shadow Layer for Depth */}
                        <span className="absolute top-1 left-1 text-black/20 select-none font-black text-6xl md:text-8xl tracking-tighter filter blur-[2px]">
                            {item.label}
                        </span>

                        {/* Main Text */}
                        <span className={cn(
                            "relative block font-black text-6xl md:text-8xl tracking-tighter transition-colors duration-100",
                            hoveredIndex === index ? "text-white drop-shadow-[0_4px_0_rgba(0,0,0,1)]" : "text-foreground"
                        )}>
                            {item.label}
                        </span>
                    </motion.div>
                </Link>
            ))}

            {/* Decorative Connection Line */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute left-[30px] top-0 bottom-0 w-[2px] bg-white/20 origin-top"
            />
        </div>
    );
}
