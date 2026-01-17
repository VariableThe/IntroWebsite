"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Enterprise FD Management Portal",
        description: "A full-fledged web application for Fixed Deposit management, featuring comprehensive Admin and User portals for high-volume transactions. Built with a team of 24.",
        tags: ["Web App", "Finance", "Management"],
        image: "bg-zinc-800",
        links: { demo: "#", code: "#" } // Add actual links if known
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
        description: "Data-driven study on the influence of multi-medium advertisement expenditure on physical store footfall, using statistical modeling to quantify marketing ROI.",
        tags: ["Data Science", "Statistics", "ROI Analysis"],
        image: "bg-zinc-800",
        links: { demo: "#", code: "#" }
    },
    {
        title: "Ethereum Information Sharing Network",
        description: "Secure peer-to-peer data recording and sharing system enabled via blockchain technology.",
        tags: ["Blockchain", "Ethereum", "P2P"],
        image: "bg-zinc-800",
        links: { demo: "#", code: "#" }
    }
];

export default function ProjectsPage() {
    return (
        <div className="min-h-screen p-6 md:p-20 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Projects</h1>
                <div className="h-1 w-20 bg-primary rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col overflow-hidden border-border bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 hover:border-primary/80 group">
                            <div className={`h-48 ${project.image.replace('bg-zinc-800', 'bg-muted')} relative flex items-center justify-center`}>
                                <span className="text-muted-foreground font-mono text-sm px-4 text-center">{project.title} Preview</span>
                            </div>
                            <CardHeader>
                                <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} variant="secondary" className="text-[10px] bg-muted text-muted-foreground">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription className="text-base text-zinc-400">
                                    {project.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="flex justify-between gap-4">
                                <Button variant="outline" size="sm" className="w-full">
                                    <Github className="w-4 h-4 mr-2" />
                                    Code
                                </Button>
                                {/* Removed Demo button if no link, but keeping code for layout consistency generally */}
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
