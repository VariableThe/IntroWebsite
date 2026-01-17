"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-start px-6 md:px-20 bg-transparent overflow-hidden relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="z-10 p-8 rounded-2xl bg-background/30 backdrop-blur-sm border border-white/10 shadow-2xl"
            >
                <div
                    className="mb-6 inline-flex"
                >
                    <Badge variant="outline" className="text-sm font-medium px-4 py-1.5 rounded-full border-primary/50 text-foreground bg-primary/10 backdrop-blur-md">
                        <span className="mr-2">👋</span> Hello world, I'm
                    </Badge>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-black tracking-tighter leading-tight mb-8"
                >
                    ADITYA SHARMA
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-3xl font-light text-muted-foreground mb-4 leading-relaxed max-w-2xl"
                >
                    I bridge the gap between <span className="text-primary font-medium">secure systems</span> and <span className="text-primary font-medium">creative design</span>.
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <Link href="/projects">
                    <Button size="lg" className="text-lg px-8 h-14 rounded-full transition-transform hover:scale-105 active:scale-95">
                        View Projects
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
                <Link href="/about">
                    <Button size="lg" variant="outline" className="text-lg px-8 h-14 rounded-full transition-transform hover:scale-105 active:scale-95 hover:bg-zinc-800/50">
                        About Me
                    </Button>
                </Link>
            </motion.div>
        </section>
    );
}
