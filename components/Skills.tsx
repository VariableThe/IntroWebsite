"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "C", "C++", "Java", "JavaScript", "SQL", "PL/SQL", "LaTeX", "HTML", "CSS"]
    },
    {
        title: "Frameworks & Tools",
        skills: ["SpringBoot", "Kafka", "Unity (2D/3D)", "Figma", "CLI", "Bootstrap", "TailwindCSS"]
    },
    {
        title: "Design & Modeling",
        skills: ["Blender", "AutoCAD", "Fusion 360", "Game Design"]
    }
];

export default function Skills() {
    return (
        <section className="py-10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Skills</h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                                    >
                                        <Badge variant="secondary" className="text-sm py-1 px-3 bg-zinc-800 hover:bg-zinc-700 transition-colors text-zinc-300">
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
