"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, MapPin, Building, ChevronRight } from "lucide-react";

const experiences = [
    {
        id: 1,
        company: "Nishat Linen Pvt. Ltd.",
        role: "Head of Department (Strategic/Management)",
        type: "Local/Export",
        period: "2021 – Present",
        location: "Pakistan",
        highlights: [
            "Developed Departments, Structured, Created SOP like Fabrication, PD, IE, Production, Category, Quality, Embroidery, CPD",
            "Regularized Departments with Strategic, Tactical and Operational Reporting resulting Production Volume of 12Billion Sales to 26Billion in 4 Years",
            "Weekly and Monthly Management Presentation",
        ],
    },
    {
        id: 2,
        company: "Samad Apparel [Denim Exports]",
        role: "Head of Department (Operational)",
        type: "Production Planning and Control",
        period: "2019 – 2021",
        location: "Pakistan",
        highlights: [
            "Developed Departments, Structured, Created SOP like Planning, IE and WIP",
            "Regularized Departments with Yearly, Monthly and Daily Plans and Execution Set Up",
            "Weekly Management Meeting Presentation for Strategic and Tactical Decision Making",
            "Planned and Regularized Installation of 2 Factories in Pre and Post Covid Times",
        ],
    },
    {
        id: 3,
        company: "Sapphire Retail Limited",
        role: "Head of Department (Strategic)",
        type: "Central Planning Department",
        period: "2015 – 2019",
        location: "Pakistan",
        highlights: [
            "Developed Brand Operations, SOP, Work Flow, Reporting From Scratch",
            "Developed Oracle Based System with Oracle Indigenous Team",
            "Non-Conformity Monitoring System Alert Developed",
        ],
    },
    {
        id: 4,
        company: "Crescent Bahuman Limited",
        role: "Merchandiser/Marketing",
        type: "Solo Merchandiser",
        period: "2013 – 2014",
        location: "Pakistan",
        highlights: [
            "Solo Merchandiser of Stoneage and Lead Spanish/UK market Customers",
        ],
    },
    {
        id: 5,
        company: "Softwood (Pvt) Ltd.",
        role: "Product Development",
        type: "Merchandising",
        period: "2012 – 2014",
        location: "Pakistan",
        highlights: [
            "Solo Merchandiser of Stoneage and Lead Spanish/UK market Customers",
        ],
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeExp, setActiveExp] = useState(1);

    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-brand-linkwater">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-malibu/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-cobalt/5 rounded-full blur-3xl" />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="number-badge">02</span>
                    <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 text-brand-madison">
                        Professional <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-brand-madison/70 max-w-2xl mx-auto font-medium">
                        A decade of transforming organizations through strategic planning and operational excellence
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Timeline Navigation */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-4"
                    >
                        <div className="sticky top-32 space-y-3">
                            {experiences.map((exp, index) => (
                                <motion.button
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    onClick={() => setActiveExp(exp.id)}
                                    className={`w-full p-5 rounded-2xl text-left transition-all duration-300 group relative overflow-hidden ${activeExp === exp.id
                                        ? "glass border border-brand-cobalt/20 shadow-xl"
                                        : "hover:bg-white/40"
                                        }`}
                                >
                                    {activeExp === exp.id && (
                                        <motion.div
                                            layoutId="active-nav"
                                            className="absolute left-0 top-0 bottom-0 w-1 bg-brand-cobalt"
                                        />
                                    )}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-brand-cobalt font-bold mb-1 block">
                                                {exp.period}
                                            </span>
                                            <h4 className={`font-bold transition-colors ${activeExp === exp.id ? "text-brand-madison" : "text-brand-madison/60 group-hover:text-brand-madison"
                                                }`}>
                                                {exp.company}
                                            </h4>
                                        </div>
                                        <ChevronRight
                                            size={18}
                                            className={`transition-all ${activeExp === exp.id
                                                ? "text-brand-cobalt translate-x-0"
                                                : "text-brand-cobalt/20 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                                                }`}
                                        />
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-8"
                    >
                        {experiences.map((exp) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: activeExp === exp.id ? 1 : 0,
                                    y: activeExp === exp.id ? 0 : 20,
                                    display: activeExp === exp.id ? "block" : "none",
                                }}
                                transition={{ duration: 0.4 }}
                                className="glass rounded-3xl p-8 border border-brand-cobalt/5 shadow-2xl shadow-brand-cobalt/5"
                            >
                                {/* Header */}
                                <div className="flex flex-wrap items-start justify-between gap-6 mb-8 border-b border-brand-cobalt/10 pb-6">
                                    <div>
                                        <span className="inline-block px-4 py-1.5 text-xs font-black text-white bg-brand-cobalt rounded-full mb-4 shadow-md">
                                            {exp.type}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-black text-brand-madison mb-3">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-brand-madison/70 font-bold">
                                            <Building size={18} className="text-brand-cobalt" />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-brand-madison/60 font-medium">
                                            <Calendar size={18} className="text-brand-cobalt" />
                                            <span className="text-sm font-bold">{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-brand-madison/60 font-medium">
                                            <MapPin size={18} className="text-brand-cobalt" />
                                            <span className="text-sm font-bold">{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="space-y-6">
                                    <h4 className="text-sm font-black text-brand-cobalt uppercase tracking-widest flex items-center gap-2">
                                        <div className="w-8 h-[2px] bg-brand-cobalt/30" />
                                        Key Achievements
                                    </h4>
                                    <ul className="space-y-4">
                                        {exp.highlights.map((highlight, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                                className="flex items-start gap-4 text-brand-madison/80 font-medium leading-relaxed"
                                            >
                                                <div className="w-2 h-2 mt-2.5 bg-brand-cobalt rounded-full flex-shrink-0 shadow-glow-blue" />
                                                <span>{highlight}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
