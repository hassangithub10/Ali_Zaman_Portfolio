"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Briefcase, Globe } from "lucide-react";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900" />
    ),
});

const stats = [
    { label: "Years Experience", value: "12+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Companies Transformed", value: "6" },
    { label: "Countries Visited", value: "3" },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
            <ParticleBackground />

            <div className="container-custom relative z-10 pt-24">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass"
                    >
                        <span className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></span>
                        <span className="text-sm text-light-300">Available for Opportunities</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 mt-6"
                    >
                        {/* <span className="text-light-100"></span> */}
                        <span className="gradient-text">ENGR. ALI ZAMAN</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-3 mb-8"
                    >
                        <span className="px-4 py-2 text-sm font-medium text-dark-900 bg-accent-primary/80 rounded-full border border-accent-primary/40">
                            Strategic Planning
                        </span>
                        <span className="px-4 py-2 text-sm font-medium text-light-100 bg-accent-secondary/80 rounded-full border border-accent-secondary/40">
                            Supply Chain
                        </span>
                        <span className="px-4 py-2 text-sm font-medium text-light-100 bg-dark-700/80 rounded-full border border-dark-700/60">
                            Operations
                        </span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl lg:text-2xl text-light-300 max-w-2xl mx-auto mb-8"
                    >
                        Transforming businesses through strategic planning and operational excellence.
                        Expert in change management, production planning, and business optimization
                        with international exposure across <span className="text-accent-primary font-medium">Singapore</span> and <span className="text-accent-primary font-medium">Thailand</span>.
                    </motion.p>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-wrap items-center justify-center gap-6 mb-12 text-light-300"
                    >
                        <div className="flex items-center gap-2 bg-accent-primary/80 rounded-full p-2">
                            <MapPin size={16} className="text-dark-900" />
                            <span className="text-sm font-medium text-dark-900">Lahore, Pakistan</span>
                        </div>
                        <div className="flex items-center gap-2 bg-accent-primary/80 rounded-full p-2">
                            <Briefcase size={16} className="text-dark-900" />
                            <span className="text-sm font-medium text-dark-900">Head of Department</span>
                        </div>
                        <div className="flex items-center gap-2 bg-accent-primary/80 rounded-full p-2">
                            <Globe size={16} className="text-dark-900" />
                            <span className="text-sm font-medium text-dark-900">International Exposure</span>
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 text-sm font-semibold text-light-100 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full hover:shadow-glow-red transition-all duration-300"
                        >
                            Get in Touch
                        </motion.a>
                        <motion.a
                            href="#experience"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 text-sm font-semibold text-light-100 glass rounded-full hover:bg-dark-700/50 transition-all duration-300"
                        >
                            View Experience
                        </motion.a>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                            className="text-center p-6 glass rounded-2xl card-hover"
                        >
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-light-300">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.a
                    href="#about"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-light-300 hover:text-light-100 transition-colors"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ArrowDown size={20} />
                </motion.a>
            </motion.div>
        </section>
    );
}
