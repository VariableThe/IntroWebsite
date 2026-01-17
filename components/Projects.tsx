"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing online stores. Features real-time analytics, inventory management, and order tracking.",
        tags: ["Next.js", "Typescript", "Prisma", "Tailwind"],
        image: "bg-linear-to-r from-blue-400 to-indigo-500", // Placeholder gradient
        links: { demo: "#", code: "#" }
    },
    {
        title: "Task Management App",
        description: "Collaborative task manager with drag-and-drop functionality, dark mode, and team workspaces.",
        tags: ["React", "Redux", "Firebase", "DnD"],
        image: "bg-linear-to-r from-emerald-400 to-teal-500",
        links: { demo: "#", code: "#" }
    },
    {
        title: "AI Image Generator",
        description: "SaaS application that uses AI to generate unique images based on text prompts. Integrated with Stripe for payments.",
        tags: ["Next.js", "OpenAI API", "Stripe", "PostgreSQL"],
        image: "bg-linear-to-r from-purple-400 to-pink-500",
        links: { demo: "#", code: "#" }
    }
];

export default function Projects() {
    return (
        <section className="py-20 px-6 md:px-20 bg-background">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-rose-500 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow border-rose-100 dark:border-rose-900/20 group">
                                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                </div>
                                <CardHeader>
                                    <CardTitle className="mb-2">{project.title}</CardTitle>
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-[10px]">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="text-base">
                                        {project.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="flex justify-between gap-4">
                                    <Button variant="outline" size="sm" className="w-full">
                                        <Github className="w-4 h-4 mr-2" />
                                        Code
                                    </Button>
                                    <Button size="sm" className="w-full">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Demo
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
