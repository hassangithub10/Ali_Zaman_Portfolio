"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
    {
        title: "Management Skills",
        skills: [
            { name: "Team Building & Management", level: 95 },
            { name: "Strategic Seasonal Planning", level: 90 },
            { name: "Tactical & Capacity Planning", level: 92 },
            { name: "Operational Daily Planning", level: 95 },
            { name: "Change Management Plan", level: 88 },
            { name: "System Development from Scratch", level: 85 },
        ],
    },
    {
        title: "Technical Skills",
        skills: [
            { name: "CRP / MRP", level: 90 },
            { name: "Leadership & Problem Solving", level: 95 },
            { name: "Excel (Advanced)", level: 98 },
            { name: "Power BI", level: 85 },
            { name: "AI Applications", level: 75 },
            { name: "Oracle / SAP", level: 80 },
        ],
    },
];

const languages = [
    { name: "English", level: 100, flag: "🇬🇧" },
    { name: "Urdu", level: 100, flag: "🇵🇰" },
];

const techStack = [
    { name: "Excel", icon: "📊" },
    { name: "Power BI", icon: "📈" },
    { name: "AI", icon: "🤖" },
    { name: "Oracle", icon: "🔶" },
    { name: "SAP", icon: "💼" },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-32 relative overflow-hidden bg-dark-800">
            {/* Background Effects */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-dark-700/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent-primary/5 rounded-full blur-3xl" />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="number-badge">03</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-light-100">
                        Skills & <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-light-300 max-w-2xl mx-auto">
                        Comprehensive skill set developed through years of hands-on experience
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
                            className="glass rounded-2xl p-8"
                        >
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-light-100">
                                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary text-sm font-bold text-light-100">
                                    {catIndex + 1}
                                </span>
                                {category.title}
                            </h3>

                            <div className="space-y-5">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                                    >
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-light-200">{skill.name}</span>
                                            <span className="text-sm text-accent-primary font-medium">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-dark-900 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                                transition={{ duration: 1, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                                                style={{ boxShadow: "0 0 10px rgba(255, 218, 26, 0.4)" }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Languages & Tech Stack */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Languages */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass rounded-2xl p-8"
                    >
                        <h3 className="text-xl font-bold mb-6 text-light-100">Languages</h3>
                        <div className="space-y-4">
                            {languages.map((lang, index) => (
                                <motion.div
                                    key={lang.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                    className="flex items-center gap-4 p-4 bg-dark-900/50 rounded-xl"
                                >
                                    <span className="text-2xl">{lang.flag}</span>
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium text-light-100">{lang.name}</span>
                                            <span className="text-sm text-accent-primary">Fluent</span>
                                        </div>
                                        <div className="h-1.5 bg-dark-700 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${lang.level}%` } : {}}
                                                transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                                                className="h-full bg-gradient-to-r from-dark-700 to-accent-primary rounded-full"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="glass rounded-2xl p-8"
                    >
                        <h3 className="text-xl font-bold mb-6 text-light-100">Tech Stack</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex flex-col items-center gap-3 p-4 bg-dark-900/50 rounded-xl card-hover cursor-default hover:bg-[#ffda1a]"
                                >
                                    <span className="text-3xl">{tech.icon}</span>
                                    <span className="text-sm font-medium text-light-200 hover:text-[#0d0d0d] transition-colors">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
