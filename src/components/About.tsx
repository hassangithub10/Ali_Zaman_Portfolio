"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Users, Award, Target } from "lucide-react";

const highlights = [
    {
        icon: Target,
        title: "Problem Solving",
        description: "Expert in unlocking complex business challenges",
    },
    {
        icon: Users,
        title: "Change Management",
        description: "Transforming organizations globally",
    },
    {
        icon: Award,
        title: "Strategic Planning",
        description: "Data-driven decision making",
    },
    {
        icon: Globe,
        title: "International Exposure",
        description: "Singapore & Thailand experience",
    },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-32 relative overflow-hidden bg-dark-800">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="number-badge">01</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-light-100">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-light-300 max-w-2xl mx-auto">
                        Engineer, product merchandiser, and supply chain leader with over a decade of experience
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-3xl blur-2xl opacity-20 animate-pulse" />

                            {/* Image Container */}
                            <div className="relative glass rounded-3xl p-2 border-glow">
                                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-dark-900 to-dark-700 flex items-center justify-center overflow-hidden">
                                    {/* Placeholder with initials */}
                                    <div className="text-center">
                                        <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary flex items-center justify-center mb-4">
                                            <span className="text-6xl font-bold text-light-100">AZ</span>
                                        </div>
                                        <p className="text-light-300 text-sm">Engr. Ali Zaman</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -bottom-4 -right-4 px-4 py-2 glass rounded-full"
                            >
                                <span className="text-sm font-medium gradient-text">12+ Years</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-light-100">
                            Transforming Businesses Through Strategic Excellence
                        </h3>

                        <div className="space-y-4 text-light-300 mb-8">
                            <p>
                                As an engineer, product merchandiser, and supply chain lead over the decade,
                                I have been able to unlock <span className="text-light-100 font-medium">Problem Solving</span>,
                                <span className="text-light-100 font-medium"> Change Management</span>,
                                <span className="text-light-100 font-medium"> Strategic Planning</span> and
                                <span className="text-light-100 font-medium"> Decision Making</span> which are key to run any
                                business and any product locally and globally.
                            </p>
                            <p>
                                I&apos;m <span className="text-light-200 font-medium">Adaptable</span> - with international
                                exposure through official visits to <span className="text-light-100 font-medium">Singapore</span> and
                                <span className="text-light-100 font-medium"> Thailand</span>, bringing global perspectives to
                                local operations.
                            </p>
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="p-4 glass rounded-xl card-hover group"
                                >
                                    <item.icon
                                        size={24}
                                        className="text-accent-primary mb-3 group-hover:text-accent-secondary transition-colors"
                                    />
                                    <h4 className="font-semibold text-light-100 mb-1">{item.title}</h4>
                                    <p className="text-sm text-light-300">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
