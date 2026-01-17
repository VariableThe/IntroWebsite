"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Senior Frontend Engineer",
        company: "Tech Corp Inc.",
        period: "2023 - Present",
        description: "Leading the frontend team in rebuilding the core product using Next.js and React Server Components. Improved performance by 40%.",
        skills: ["Next.js", "React", "GraphQL"]
    },
    {
        role: "Full Stack Developer",
        company: "StartUp Land",
        period: "2021 - 2023",
        description: "Developed and maintained multiple client-facing applications. Collaborated with designers to implement responsive UI components.",
        skills: ["React", "Node.js", "PostgreSQL"]
    },
    {
        role: "Junior Web Developer",
        company: "Creative Agency",
        period: "2020 - 2021",
        description: "Built landing pages and email templates for various clients. Assisted in migrating legacy code to modern frameworks.",
        skills: ["HTML/CSS", "JavaScript", "Vue.js"]
    }
];

export default function Experience() {
    return (
        <section className="py-20 px-6 md:px-20 bg-background">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
                        <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-rose-500" />
                        Experience
                    </h2>
                    <p className="text-muted-foreground text-lg">My professional journey so far.</p>
                </motion.div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-rose-200 dark:before:via-rose-900 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-zinc-100 dark:bg-zinc-800 group-hover:bg-rose-500 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-sm" />

                            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 border-l-4 border-l-rose-500 shadow-md hover:shadow-xl transition-shadow bg-card/50 backdrop-blur-sm">
                                <CardHeader className="p-0 mb-4">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                                        <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                                        <span className="text-sm font-medium text-rose-500 bg-rose-50 dark:bg-rose-950/30 px-3 py-1 rounded-full w-fit">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                                </CardHeader>
                                <CardContent className="p-0">
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map(skill => (
                                            <Badge key={skill} variant="secondary" className="text-xs">
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
        </section>
    );
}
