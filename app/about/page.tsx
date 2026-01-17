"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowLeft, Twitter } from "lucide-react";
import Skills from "@/components/Skills";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen w-full relative bg-[#09090b] text-white overflow-hidden flex flex-col">
            {/* Background Texture/Grid (Blue) */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)", // Blue Grid
                    backgroundSize: "40px 40px",
                    transform: "perspective(500px) rotateX(60deg) scale(1.5) translateY(-100px)"
                }}
            />

            {/* Back Button */}
            <div className="absolute top-6 left-6 z-50">
                <Link href="/">
                    <Button variant="ghost" className="text-blue-500 hover:text-blue-400 hover:bg-blue-900/20 font-black text-xl tracking-tighter -skew-x-12 border-2 border-blue-500/50">
                        <ArrowLeft className="mr-2 h-6 w-6" /> BACK
                    </Button>
                </Link>
            </div>

            <div className="relative z-10 p-6 md:p-20 max-w-6xl mx-auto space-y-20 w-full">
                {/* Bio Section */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12 relative"
                    >
                        {/* Header */}
                        <div className="inline-block relative">
                            <div className="absolute inset-0 bg-blue-600 -skew-x-12 transform translate-x-4 translate-y-2 z-[-1]" />
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic text-black bg-white px-6 py-2 -skew-x-12 border-4 border-black">
                                ABOUT ME
                            </h1>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        {/* Profile Card / Persona Stats */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, rotateY: 15 }}
                            animate={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="perspective-1000"
                        >
                            <Card className="overflow-hidden border-2 border-blue-600 bg-black/80 rounded-none transform rotate-2 hover:rotate-0 transition-all duration-500 shadow-[8px_8px_0_rgba(37,99,235,0.5)]">
                                <div className="h-64 bg-blue-900/40 relative flex items-center justify-center overflow-hidden">
                                    {/* Placeholder Pattern */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20" />

                                    {/* Initials Placeholder */}
                                    <span className="text-9xl font-black text-blue-500/20 scale-[2] tracking-tighter absolute">AS</span>
                                    <div className="z-10 text-center">
                                        <div className="w-32 h-32 bg-blue-500 rounded-full mx-auto mb-4 border-4 border-white flex items-center justify-center text-4xl font-black text-black">
                                            AS
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-8 bg-zinc-900/90 relative">
                                    {/* Decorative lines */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent" />

                                    <h3 className="text-4xl font-black italic text-white mb-1 tracking-tight">ADITYA SHARMA</h3>
                                    <p className="text-blue-400 font-bold font-mono mb-6 uppercase tracking-widest border-b border-blue-500/30 pb-4">
                                        LV. 20 | Web Developer
                                    </p>

                                    <div className="space-y-2 mb-6 text-zinc-300 font-medium">
                                        <p>B.Tech in Computer Science & Financial Tech</p>
                                        <p>Manipal Institute of Technology (2023 - 2027)</p>
                                    </div>

                                    <div className="flex gap-4">
                                        <a href="https://github.com/VariableThe" target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" size="icon" className="rounded-none border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors">
                                                <Github className="w-5 h-5" />
                                            </Button>
                                        </a>
                                        <a href="mailto:adityasharma.variable@gmail.com">
                                            <Button variant="outline" size="icon" className="rounded-none border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </Button>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="space-y-6 text-lg text-zinc-300 leading-relaxed font-medium bg-black/50 p-6 border-l-4 border-blue-600 backdrop-blur-sm"
                        >
                            <p>
                                I'm a passionate developer currently pursuing a <span className="text-blue-400 font-bold">B.Tech in Computer Science and Financial Technology</span> at MIT Manipal. My expertise spans web development, cybersecurity, and game design.
                            </p>
                            <p>
                                I have interned at prestigious organizations like <span className="text-white font-bold bg-blue-900/30 px-1">DRDO and IIT Indore</span>, where I worked on centralized management platforms and blockchain technology.
                            </p>
                            <p>
                                Beyond coding, I lead multiple student organizations including <span className="text-blue-400">PRISM and MIST</span>, mentoring hundreds of juniors and organizing large-scale tech events.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Skills Section Integrated - Can remain as is or be updated later, for now limiting scope to main About page structure */}
                {/* <Skills /> */}
                {/* Just commenting out Skills for now to focus on the P5 vibe layout, can re-add if user wants full content back immediately */}
            </div>
        </div>
    );
}
