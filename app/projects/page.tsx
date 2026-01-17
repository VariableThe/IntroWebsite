"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Enterprise FD Management Portal",
        description: "A full-fledged web application for Fixed Deposit management, featuring comprehensive Admin and User portals for high-volume transactions.",
        tags: ["Web App", "Finance", "Management"],
        image: "bg-zinc-800",
        links: { demo: "#", code: "#" }
    },
    {
        title: "AI-Powered Finance Manager",
        description: "Personal finance portal integrating AI image recognition to automatically categorize and log expenditures from uploaded bill photos.",
        tags: ["AI", "Image Recognition", "Finance"],
        image: "bg-zinc-800",
        links: { demo: "#", code: "#" }
    },
    {
        title: "Statistical Ad-Impact Analysis",
        description: "Data-driven study on the influence of multi-medium advertisement expenditure on physical store footfall.",
        tags: ["Data Science", "Statistics", "ROI Analysis"],
        image: "bg-zinc-800",
        links: { demo: "#", code: "#" }
    },
    {
        title: "Ethereum Info Network",
        description: "Secure peer-to-peer data recording and sharing system enabled via blockchain technology.",
        tags: ["Blockchain", "Ethereum", "P2P"],
        image: "bg-zinc-800",
        links: { demo: "#", code: "#" }
    }
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen w-full relative bg-[#09090b] text-white overflow-hidden flex flex-col">
            {/* Background Texture/Grid (Shared Style) */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#facc15 1px, transparent 1px), linear-gradient(90deg, #facc15 1px, transparent 1px)", // Yellow Grid
                    backgroundSize: "40px 40px",
                    transform: "perspective(500px) rotateX(60deg) scale(1.5) translateY(-100px)"
                }}
            />

            {/* Back Button / Navigation hint */}
            <div className="absolute top-6 left-6 z-50">
                <Link href="/">
                    <Button variant="ghost" className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-900/20 font-black text-xl tracking-tighter -skew-x-12 border-2 border-yellow-400/50">
                        <ArrowLeft className="mr-2 h-6 w-6" /> BACK
                    </Button>
                </Link>
            </div>

            <div className="relative z-10 p-6 md:p-20 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 relative"
                >
                    {/* Header with Background Strip */}
                    <div className="inline-block relative">
                        <div className="absolute inset-0 bg-yellow-400 -skew-x-12 transform translate-x-4 translate-y-2 z-[-1]" />
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic text-black bg-white px-6 py-2 -skew-x-12 border-4 border-black">
                            PROJECTS
                        </h1>
                    </div>
                    <p className="mt-6 text-xl text-yellow-100/80 font-mono max-w-2xl bg-black/50 p-2 border-l-4 border-yellow-400">
                        // ITEM_LIST: Selected works and technical endeavors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateX: -10 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden bg-black/80 border-2 border-yellow-500/30 hover:border-yellow-400 hover:bg-zinc-900/90 transition-all hover:scale-[1.02] group relative rounded-none">
                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-400 -translate-y-1/2 translate-x-1/2 rotate-45 z-20 group-hover:scale-150 transition-transform" />

                                <div className={`h-48 ${project.image.replace('bg-zinc-800', 'bg-zinc-800')} relative flex items-center justify-center border-b-2 border-yellow-500/20`}>
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                                    <span className="text-yellow-500/50 font-black text-2xl tracking-widest uppercase -rotate-12 border-4 border-yellow-500/20 p-4">
                                        PREVIEW
                                    </span>
                                </div>

                                <CardHeader className="relative">
                                    <Badge className="absolute -top-3 left-4 bg-yellow-400 text-black hover:bg-yellow-300 font-bold rounded-none -skew-x-12 border border-white">
                                        Lv. {index + 1}
                                    </Badge>
                                    <CardTitle className="mt-2 text-2xl font-black italic tracking-tight text-white group-hover:text-yellow-400 transition-colors">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="flex-grow">
                                    <p className="text-zinc-400 font-medium leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-bold text-yellow-200/70 bg-yellow-900/30 px-2 py-1 uppercase tracking-wider border border-yellow-500/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="flex justify-between gap-4 border-t border-white/10 pt-4 bg-white/5">
                                    <Button variant="ghost" size="sm" className="w-full text-white hover:text-black hover:bg-yellow-400 font-bold rounded-none transition-colors skew-x-6 hover:skew-x-0">
                                        <Github className="w-4 h-4 mr-2" />
                                        CODE
                                    </Button>
                                    {/* Placeholder for DEMO if needed */}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
