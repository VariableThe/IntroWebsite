"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Skills from "@/components/Skills";

export default function AboutPage() {
    return (
        <div className="min-h-screen p-6 md:p-20 max-w-6xl mx-auto space-y-20">
            {/* Bio Section */}
            <section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">About Me</h1>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="overflow-hidden border-none shadow-none bg-card/40 backdrop-blur-sm border border-border hover:bg-card/60 transition-all hover:scale-[1.02] hover:border-primary/80">
                            <div className="h-64 bg-muted/50 relative flex items-center justify-center">
                                {/* Initials Placeholder */}
                                <span className="text-6xl font-black text-muted-foreground/50">AS</span>
                            </div>
                            <CardContent className="p-6 bg-transparent">
                                <h3 className="text-2xl font-bold mb-2">Aditya Sharma</h3>
                                <p className="text-primary font-medium mb-4">Web Developer | Cybersecurity Enthusiast</p>
                                <p className="text-muted-foreground mb-6">
                                    B.Tech in Computer Science and Financial Technology <br />
                                    Manipal Institute of Technology (2023 - 2027)
                                </p>
                                <div className="flex gap-4">
                                    <a href="https://github.com/VariableThe" target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="icon" className="rounded-full hover:bg-muted">
                                            <Github className="w-5 h-5" />
                                        </Button>
                                    </a>
                                    <a href="mailto:adityasharma.variable@gmail.com">
                                        <Button variant="outline" size="icon" className="rounded-full">
                                            <Mail className="w-5 h-5" />
                                        </Button>
                                    </a>
                                    {/* Add LinkedIn if available or remove */}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-6 text-lg text-muted-foreground leading-relaxed"
                    >
                        <p>
                            I'm a passionate developer currently pursuing a B.Tech in Computer Science and Financial Technology at MIT Manipal. My expertise spans web development, cybersecurity, and game design.
                        </p>
                        <p>
                            I have interned at prestigious organizations like DRDO and IIT Indore, where I worked on centralized management platforms and blockchain technology.
                        </p>
                        <p>
                            Beyond coding, I lead multiple student organizations including PRISM and MIST, mentoring hundreds of juniors and organizing large-scale tech events.
                        </p>

                        <div className="pt-4">
                            <h4 className="text-foreground font-semibold mb-2">Education</h4>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li><strong>B.Tech</strong>, Manipal Institute of Technology (2023–2027) - CGPA: 7.22</li>
                                <li><strong>Grade 12</strong>, Red Rose Public School (2022) - 85.2%</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section Integrated */}
            <Skills />
        </div>
    );
}
