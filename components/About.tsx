"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function About() {
    return (
        <section className="py-20 px-6 md:px-20 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
                    <div className="h-1 w-20 bg-rose-500 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="overflow-hidden border-none shadow-xl bg-white dark:bg-zinc-900">
                            <div className="h-64 bg-linear-to-br from-rose-400 to-orange-300 relative">
                                {/* Placeholder for User Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-white/50 text-6xl font-black mix-blend-overlay">
                                    JYOTI
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold mb-2">Jyoti</h3>
                                <p className="text-rose-500 font-medium mb-4">Full Stack Developer</p>
                                <p className="text-muted-foreground mb-6">
                                    Building digital products with a focus on user experience and performance.
                                </p>
                                <div className="flex gap-4">
                                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/20 hover:text-rose-500">
                                        <Github className="w-5 h-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/20 hover:text-rose-500">
                                        <Linkedin className="w-5 h-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/20 hover:text-rose-500">
                                        <Twitter className="w-5 h-5" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/20 hover:text-rose-500">
                                        <Mail className="w-5 h-5" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6 text-lg text-muted-foreground leading-relaxed"
                    >
                        <p>
                            Hello! I'm a passionate developer with a knack for creating intuitive and dynamic web experiences. With a strong foundation in modern web technologies, I strive to bridge the gap between design and engineering.
                        </p>
                        <p>
                            My journey in tech began with a curiosity for how things work on the internet, which quickly evolved into a career building complex applications. I love solving problems and constantly learning new tools to improve my craft.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new coffee shops, reading about design systems, or gaming.
                        </p>

                        <div className="pt-6">
                            <h4 className="text-foreground font-semibold mb-4 text-xl">My Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Framer Motion"].map((tech) => (
                                    <span key={tech} className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm font-medium text-foreground border border-transparent hover:border-rose-200 dark:hover:border-rose-800 transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
