"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-start px-6 md:px-20 bg-background overflow-hidden relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Badge variant="secondary" className="mb-6 text-sm font-medium px-4 py-1.5 rounded-full">
                    Web Developer | Cybersecurity Enthusiast | Game Dev
                </Badge>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-tight mb-8"
            >
                ADITYA SHARMA
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            >
                Bridging the gap between secure systems, interactive media, and modern web experiences.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <Link href="/projects">
                    <Button size="lg" className="text-lg px-8 h-14 rounded-full">
                        View Projects
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
                <Link href="/about">
                    <Button size="lg" variant="outline" className="text-lg px-8 h-14 rounded-full">
                        About Me
                    </Button>
                </Link>
            </motion.div>
        </section>
    );
}
