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
        <section id="experience" className="py-16 relative overflow-hidden bg-dark-900">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-primary/5 rounded-full blur-3xl" />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="number-badge">02</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-light-100">
                        Professional <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-light-300 max-w-2xl mx-auto">
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
                        <div className="sticky top-32 space-y-2">
                            {experiences.map((exp, index) => (
                                <motion.button
                                    key={exp.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    onClick={() => setActiveExp(exp.id)}
                                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 group ${activeExp === exp.id
                                        ? "glass border-l-2 border-accent-primary shadow-glow-dark/20"
                                        : "hover:bg-accent-primary"
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-xs text-light-300 group-hover:text-dark-900 font-medium">
                                                {exp.period}
                                            </span>
                                            <h4 className={`font-semibold transition-colors ${activeExp === exp.id ? "text-light-100" : "text-light-300 group-hover:text-dark-900"
                                                }`}>
                                                {exp.company}
                                            </h4>
                                        </div>
                                        <ChevronRight
                                            size={18}
                                            className={`transition-all ${activeExp === exp.id
                                                ? "text-accent-primary translate-x-0"
                                                : "text-light-300/30 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
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
                                className="glass rounded-2xl p-8"
                            >
                                {/* Header */}
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                    <div>
                                        <span className="inline-block px-3 py-1 text-xs font-medium text-light-200 bg-accent-primary/20 rounded-full mb-3">
                                            {exp.type}
                                        </span>
                                        <h3 className="text-2xl font-bold text-light-100 mb-2">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-light-300">
                                            <Building size={16} className="text-[#ffda1a]" />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-2 text-light-300 mb-2">
                                            <Calendar size={16} className="text-accent-primary" />
                                            <span className="text-sm">{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-light-300">
                                            <MapPin size={16} />
                                            <span className="text-sm">{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold text-light-200 uppercase tracking-wider">
                                        Key Achievements
                                    </h4>
                                    <ul className="space-y-3">
                                        {exp.highlights.map((highlight, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                                className="flex items-start gap-3 text-light-300"
                                            >
                                                <span className="w-1.5 h-1.5 mt-2 bg-accent-primary rounded-full flex-shrink-0" />
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
