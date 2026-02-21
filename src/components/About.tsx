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
        <section id="about" className="py-16 relative overflow-hidden bg-brand-hawkes">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-cobalt/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-malibu/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="number-badge">01</span>
                    <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 text-brand-madison">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-brand-madison/70 max-w-2xl mx-auto font-medium">
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
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-cobalt to-brand-malibu rounded-2xl blur-2xl opacity-10 animate-pulse" />

                            {/* Image Container */}
                            <div className="relative glass rounded-3xl p-3 border-glow">
                                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-brand-linkwater to-white flex items-center justify-center overflow-hidden">
                                    <motion.img
                                        src="/alizaman.png"
                                        alt="Engr. Ali Zaman"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        initial={{ filter: "grayscale(100%)" }}
                                        whileHover={{ filter: "grayscale(0%)" }}
                                    />
                                </div>
                            </div>

                            {/* Floating Badge */}
                            {/* <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -bottom-4 -right-4 px-6 py-3 glass rounded-full border border-brand-cobalt/20 shadow-xl"
                            >
                                <span className="text-sm font-black gradient-text">13+ Years</span>
                            </motion.div> */}
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-black mb-6 text-brand-madison leading-tight">
                            Transforming Businesses Through Strategic Excellence
                        </h3>

                        <div className="space-y-6 text-brand-madison/80 mb-10 font-medium leading-relaxed">
                            <p>
                                As an engineer, product merchandiser, and supply chain lead over the decade,
                                I have been able to unlock <span className="text-brand-cobalt font-bold">Problem Solving</span>,
                                <span className="text-brand-cobalt font-bold"> Change Management</span>,
                                <span className="text-brand-cobalt font-bold"> Strategic Planning</span> and
                                <span className="text-brand-cobalt font-bold"> Decision Making</span> which are key to run any
                                business and any product locally and globally.
                            </p>
                            <p>
                                I&apos;m <span className="text-brand-cobalt font-bold underline decoration-brand-malibu/30">Adaptable</span> - with international
                                exposure through official visits to <span className="text-brand-madison font-bold">Singapore</span> and
                                <span className="text-brand-madison font-bold"> Thailand</span>, bringing global perspectives to
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
                                    className="p-5 glass rounded-2xl card-hover group border border-brand-cobalt/5"
                                >
                                    <item.icon
                                        size={28}
                                        className="text-brand-cobalt mb-4 group-hover:scale-110 transition-transform"
                                    />
                                    <h4 className="font-bold text-brand-madison mb-1">{item.title}</h4>
                                    <p className="text-sm text-brand-madison/60 font-medium">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
