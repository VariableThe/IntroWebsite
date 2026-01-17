"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const experiences = [
    {
        role: "Intern",
        company: "Defense Research and Development Organization (DRDO)",
        period: "Nov 2025 - Present",
        description: "Developing a centralized requisition management platform to streamline internal procurement and asset allocation. Optimizing workflow management systems for secure organizational data handling.",
        skills: ["Web Dev", "Security", "Workflows"]
    },
    {
        role: "General Secretary & SMGD Head",
        company: "PRISM",
        period: "Jan 2025 - Present",
        description: "Leading operations and research roadmaps. Directing the Social Media and Graphic Design (SMGD) department, overseeing club branding and research dissemination.",
        skills: ["Leadership", "Management", "Design"]
    },
    {
        role: "Research Intern",
        company: "IIT Indore",
        period: "Jun 2025 - Jul 2025",
        description: "Implemented an Ethereum blockchain using Ganache for transaction simulation. Researched smart contracts, DApps, EVM internals, gas optimization, and Solidity-based deployment.",
        skills: ["Blockchain", "Solidity", "Ethereum", "Research"]
    },
    {
        role: "Graphic Design Head & Board Member",
        company: "MIST",
        period: "Sep 2024 - Present",
        description: "Mentored 200+ junior members and spearheaded KernelCTF, AuroraCTF, and IndomitusCTF. Directed cryptographic algorithm research and facilitated cybersecurity workshops.",
        skills: ["Cybersecurity", "Mentorship", "Event Mgmt"]
    },
    {
        role: "Media and Outreach Head",
        company: "Finova",
        period: "Dec 2024 - Present",
        description: "Managed over 100 designers, maintaining regular social media scheduling and supervised 100+ collaborative designs.",
        skills: ["Team Mgmt", "Outreach"]
    }
];

export default function ExperiencePage() {
    return (
        <div className="min-h-screen w-full relative bg-[#09090b] text-white overflow-hidden flex flex-col">
            {/* Background Texture/Grid (Rose) */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#f43f5e 1px, transparent 1px), linear-gradient(90deg, #f43f5e 1px, transparent 1px)", // Rose Grid
                    backgroundSize: "40px 40px",
                    transform: "perspective(500px) rotateX(60deg) scale(1.5) translateY(-100px)"
                }}
            />

            {/* Back Button */}
            <div className="absolute top-6 left-6 z-50">
                <Link href="/">
                    <Button variant="ghost" className="text-rose-500 hover:text-rose-400 hover:bg-rose-900/20 font-black text-xl tracking-tighter -skew-x-12 border-2 border-rose-500/50">
                        <ArrowLeft className="mr-2 h-6 w-6" /> BACK
                    </Button>
                </Link>
            </div>

            <div className="relative z-10 p-6 md:p-20 max-w-5xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 relative"
                >
                    {/* Header */}
                    <div className="inline-block relative">
                        <div className="absolute inset-0 bg-rose-500 -skew-x-12 transform translate-x-4 translate-y-2 z-[-1]" />
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic text-black bg-white px-6 py-2 -skew-x-12 border-4 border-black">
                            EXPERIENCE
                        </h1>
                    </div>
                </motion.div>

                <div className="space-y-12 ml-4 md:ml-0 pl-4 md:pl-0 border-l-4 border-rose-500/30 relative">
                    {/* Timeline Decoration */}
                    <div className="absolute top-0 bottom-0 -left-[2px] w-[4px] bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.5)]" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative md:pl-12 group"
                        >
                            {/* Dot / Node */}
                            <div className="absolute -left-[35px] md:-left-[27px] top-6 w-6 h-6 rounded-none rotate-45 bg-[#09090b] border-4 border-rose-500 group-hover:scale-150 group-hover:bg-rose-500 transition-all z-20 shadow-[0_0_10px_2px_rgba(244,63,94,0.3)]" />

                            <Card className="rounded-none border-2 border-rose-500/30 bg-black/80 hover:bg-zinc-900/90 hover:border-rose-500 transition-all hover:translate-x-2 group-hover:shadow-[4px_4px_0_rgba(244,63,94,0.5)]">
                                <CardHeader className="pb-2">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                                        <CardTitle className="text-2xl font-black italic tracking-tight text-white group-hover:text-rose-400 uppercase">
                                            {exp.role}
                                        </CardTitle>
                                        <div className="bg-rose-500/20 text-rose-400 font-mono text-sm px-3 py-1 border border-rose-500/50 -skew-x-12">
                                            {exp.period}
                                        </div>
                                    </div>
                                    <p className="text-xl font-bold text-rose-500">{exp.company}</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-zinc-400 mb-4 leading-relaxed font-medium">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map(skill => (
                                            <Badge key={skill} variant="outline" className="text-xs rounded-none border-rose-500/40 text-rose-300 bg-rose-900/10 uppercase tracking-widest">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
