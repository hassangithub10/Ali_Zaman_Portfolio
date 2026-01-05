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
    { name: "Advanced Excel", icon: "📊" },
    { name: "Power BI", icon: "📈" },
    // { name: "AI", icon: "🤖" },
    { name: "Oracle", icon: "🔶" },
    { name: "SAP", icon: "💼" },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-brand-hawkes">
            {/* Background Effects */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-cobalt/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-brand-malibu/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="number-badge">03</span>
                    <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 text-brand-madison">
                        Skills & <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-brand-madison/70 max-w-2xl mx-auto font-medium">
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
                            className="glass rounded-3xl p-8 border border-brand-cobalt/5 shadow-xl"
                        >
                            <h3 className="text-xl md:text-2xl font-black mb-8 flex items-center gap-4 text-brand-madison">
                                <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-brand-cobalt to-brand-malibu text-lg font-black text-white shadow-lg">
                                    {catIndex + 1}
                                </span>
                                {category.title}
                            </h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                                    >
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-bold text-brand-madison/80">{skill.name}</span>
                                            <span className="text-sm text-brand-cobalt font-black">{skill.level}%</span>
                                        </div>
                                        <div className="h-2.5 bg-brand-linkwater rounded-full overflow-hidden shadow-inner">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                                transition={{ duration: 1.2, delay: 0.6 + index * 0.1, ease: "circOut" }}
                                                className="h-full bg-gradient-to-r from-brand-cobalt to-brand-malibu rounded-full relative"
                                            >
                                                <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                            </motion.div>
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
                        className="glass rounded-3xl p-8 border border-brand-cobalt/5 shadow-xl"
                    >
                        <h3 className="text-xl font-black mb-8 text-brand-madison flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-brand-cobalt rounded-full" />
                            Languages
                        </h3>
                        <div className="space-y-6">
                            {languages.map((lang, index) => (
                                <motion.div
                                    key={lang.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                    className="flex items-center gap-4 p-5 bg-brand-linkwater/50 rounded-2xl border border-brand-cobalt/5 hover:border-brand-cobalt/20 transition-all shadow-sm"
                                >
                                    <span className="text-3xl text-brand-madison drop-shadow-md">{lang.flag}</span>
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-black text-brand-madison text-sm uppercase tracking-wider">{lang.name}</span>
                                            <span className="text-xs font-black text-brand-cobalt bg-brand-cobalt/10 px-2.5 py-1 rounded-md">Professional</span>
                                        </div>
                                        <div className="h-1.5 bg-white/50 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${lang.level}%` } : {}}
                                                transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                                                className="h-full bg-brand-cobalt rounded-full shadow-glow-blue"
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
                        className="glass rounded-3xl p-8 border border-brand-cobalt/5 shadow-xl"
                    >
                        <h3 className="text-xl font-black mb-8 text-brand-madison flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-brand-cobalt rounded-full" />
                            Tech Stack
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={tech.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl shadow-sm border border-brand-cobalt/5 hover:border-brand-cobalt/20 group transition-all"
                                >
                                    <span className="text-3xl group-hover:scale-110 transition-transform">{tech.icon}</span>
                                    <span className="text-sm font-black text-brand-madison truncate">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
