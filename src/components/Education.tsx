"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const education = [
    {
        degree: "MS - Supply Chain Management",
        institution: "Punjab University, Lahore",
        period: "Continued",
        status: "In Progress",
        icon: GraduationCap,
    },
    {
        degree: "BSc. Textiles Engineering",
        institution: "National Textiles University, Faisalabad",
        period: "2007 - 2011",
        status: "3.21/4 CGPA [4/4 Solo Project]",
        icon: Award,
    },
    {
        degree: "FSc. Pre Engineering",
        institution: "F.C. College, Lahore / GCU, Faisalabad",
        period: "2006",
        status: "A GRADE",
        icon: GraduationCap,
    },
    {
        degree: "Matriculation Science",
        institution: "Divisional Public School, Faisalabad",
        period: "2002",
        status: "Group A+",
        icon: Award,
    },
];

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="education" className="py-32 relative overflow-hidden bg-dark-900">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-primary/5 rounded-full blur-3xl" />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="number-badge">04</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-light-100">
                        Education & <span className="gradient-text">Qualifications</span>
                    </h2>
                    <p className="text-light-300 max-w-2xl mx-auto">
                        Academic foundation supporting professional excellence
                    </p>
                </motion.div>

                {/* Education Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {education.map((item, index) => (
                        <motion.div
                            key={item.degree}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            className="glass rounded-2xl p-6 card-hover group relative overflow-hidden"
                        >
                            {/* Gradient Border on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5" />
                            </div>

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 group-hover:from-accent-primary/30 group-hover:to-accent-secondary/30 transition-colors">
                                        <item.icon size={24} className="text-accent-primary" />
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-dark-700/50">
                                        <Calendar size={14} className="text-light-300" />
                                        <span className="text-xs text-light-300">{item.period}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-light-100 mb-2 group-hover:text-accent-primary transition-colors">
                                    {item.degree}
                                </h3>

                                <div className="flex items-center gap-2 text-light-300 mb-3">
                                    <MapPin size={14} className="text-[#ffda1a]" />
                                    <span className="text-sm">{item.institution}</span>
                                </div>

                                {/* Status Badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-primary/10 border border-accent-primary/20">
                                    <Award size={14} className="text-accent-primary" />
                                    <span className="text-xs font-medium text-light-200">{item.status}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
