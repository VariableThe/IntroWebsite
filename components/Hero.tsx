"use client";

import { motion } from "framer-motion";


import { RadialMenu } from "./RadialMenu";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="h-screen w-full flex overflow-hidden relative bg-[#09090b] text-white">

            {/* Background Texture/Grid */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    transform: "perspective(500px) rotateX(60deg) scale(1.5) translateY(-100px)"
                }}
            />

            {/* Left Side - Radial Menu */}
            <div className="w-full md:w-3/5 h-full flex items-center justify-start pl-8 md:pl-24 z-10 relative">
                {/* Decorative splashes */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-1/2 left-0 w-[800px] h-[300px] bg-red-600/20 blur-[100px] -rotate-45 transform -translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="z-10 mt-12 md:mt-0">
                    <RadialMenu />
                </div>
            </div>

            {/* Right Side - Logo/Character Placeholder */}
            {/* Right Side - Logo/Character Placeholder */}
            <div className="hidden md:flex w-2/5 h-full items-center justify-center relative bg-gradient-to-l from-zinc-900/50 to-transparent z-10">

                {/* Date/Time - Scaled up significantly */}
                <div className="absolute top-12 right-12 flex flex-col items-end z-30 pointer-events-none">
                    <div className="text-8xl md:text-9xl font-black italic tracking-tighter text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                        01/17
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-cyan-400 bg-black px-4 py-1 mt-2 -skew-x-12 border-2 border-white">
                        EVENING
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative w-full h-full flex items-center justify-center p-12"
                >
                    {/* Character/Logo Art with Placeholder Frame */}
                    <div className="w-full max-w-[800px] h-full flex items-center justify-center relative z-50 group">
                        {/* Stylized Placeholder Frame (Visible if image is small or just as backing) */}
                        <div className="absolute inset-0 border-4 border-white/10 skew-x-6 scale-90 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 border-2 border-cyan-500/20 -skew-x-6 scale-[0.85] opacity-50" />

                        <div className="relative w-full aspect-square">
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}


