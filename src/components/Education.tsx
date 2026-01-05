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
        <section id="education" className="py-24 relative overflow-hidden bg-brand-linkwater">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cobalt/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-malibu/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="number-badge">04</span>
                    <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 text-brand-madison">
                        Education & <span className="gradient-text">Qualifications</span>
                    </h2>
                    <p className="text-brand-madison/70 max-w-2xl mx-auto font-medium">
                        Academic foundation supporting professional excellence
                    </p>
                </motion.div>

                {/* Education Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {education.map((item, index) => (
                        <motion.div
                            key={item.degree}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            className="glass rounded-3xl p-8 card-hover group relative overflow-hidden border border-brand-cobalt/5 shadow-xl"
                        >
                            {/* Gradient Background on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-cobalt/[0.03] to-brand-malibu/[0.03]" />

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-lg border border-brand-cobalt/10 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon size={28} className="text-brand-cobalt" />
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cobalt/10 shadow-sm border border-brand-cobalt/5">
                                        <Calendar size={14} className="text-brand-cobalt" />
                                        <span className="text-xs font-black text-brand-cobalt">{item.period}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-black text-brand-madison mb-3 group-hover:text-brand-cobalt transition-colors">
                                    {item.degree}
                                </h3>

                                <div className="flex items-center gap-2 text-brand-madison/70 mb-6 font-bold">
                                    <MapPin size={16} className="text-brand-cobalt" />
                                    <span className="text-sm">{item.institution}</span>
                                </div>

                                {/* Status Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white shadow-sm border border-brand-cobalt/10">
                                    <Award size={16} className="text-brand-cobalt" />
                                    <span className="text-xs font-black text-brand-madison">{item.status}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
