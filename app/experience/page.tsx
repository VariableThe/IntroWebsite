"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
        <div className="min-h-screen p-6 md:p-20 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Experience</h1>
                <div className="h-1 w-20 bg-primary rounded-full" />
            </motion.div>

            <div className="space-y-12 border-l-2 border-zinc-800 ml-3 md:ml-0 pl-8 md:pl-0">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative md:pl-12"
                    >
                        {/* Dot */}
                        <div className="absolute -left-[37px] md:-left-[9px] top-2 w-5 h-5 rounded-full bg-black border-4 border-primary" />

                        <Card className="border-zinc-800 bg-zinc-900/40 backdrop-blur-sm hover:bg-zinc-900/60 transition-all hover:scale-[1.02] hover:shadow-xl">
                            <CardHeader>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                                    <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                                    <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-primary font-medium">{exp.company}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map(skill => (
                                        <Badge key={skill} variant="secondary" className="text-xs bg-zinc-800 hover:bg-zinc-700">
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
    );
}
