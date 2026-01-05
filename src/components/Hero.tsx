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
    { label: "Years Experience", value: "13+" },
    { label: "Projects Delivered", value: "50+" },
    { label: "Companies Transformed", value: "6" },
    { label: "Countries Visited", value: "2" },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-linkwater">
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
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-sm text-brand-madison font-medium">Available for Opportunities</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-7xl lg:text-8xl font-bold mb-6 mt-6"
                    >
                        <span className="gradient-text">ENGR. ALI ZAMAN</span>
                    </motion.h1>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-3 mb-8"
                    >
                        <span className="px-4 py-2 text-sm font-medium text-white bg-brand-cobalt rounded-full shadow-lg">
                            Strategic Planning
                        </span>
                        <span className="px-4 py-2 text-sm font-medium text-white bg-brand-malibu rounded-full shadow-lg">
                            Supply Chain
                        </span>
                        <span className="px-4 py-2 text-sm font-medium text-white bg-brand-madison rounded-full shadow-lg">
                            Operations
                        </span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl lg:text-2xl text-brand-madison/80 max-w-2xl mx-auto mb-8 font-medium"
                    >
                        Transforming businesses through strategic planning and operational excellence.
                        Expert in change management, production planning, and business optimization
                        with international exposure across <span className="text-brand-cobalt font-bold">Singapore</span> and <span className="text-brand-cobalt font-bold">Thailand</span>.
                    </motion.p>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-wrap items-center justify-center gap-6 mb-12"
                    >
                        <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-brand-cobalt/10 shadow-sm">
                            <MapPin size={16} className="text-brand-cobalt" />
                            <span className="text-sm font-semibold text-brand-madison">Lahore, Pakistan</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-brand-cobalt/10 shadow-sm">
                            <Briefcase size={16} className="text-brand-cobalt" />
                            <span className="text-sm font-semibold text-brand-madison">Head of Department</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-brand-cobalt/10 shadow-sm">
                            <Globe size={16} className="text-brand-cobalt" />
                            <span className="text-sm font-semibold text-brand-madison">International Exposure</span>
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
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 text-sm font-bold text-white bg-gradient-to-r from-brand-cobalt to-brand-malibu rounded-full shadow-xl hover:shadow-brand-cobalt/40 transition-all duration-300"
                        >
                            Get in Touch
                        </motion.a>
                        <motion.a
                            href="#experience"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 text-sm font-bold text-brand-cobalt glass rounded-full hover:bg-white/60 transition-all duration-300 border border-brand-cobalt/20"
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
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 m-10 max-w-4xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                            className="text-center p-6 glass rounded-2xl card-hover border border-brand-cobalt/5"
                        >
                            <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm font-bold text-brand-madison/60">{stat.label}</div>
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
                    className="flex flex-col items-center gap-2 text-brand-cobalt hover:text-brand-madison transition-colors"
                >
                    <span className="text-xs font-black uppercase tracking-widest">Scroll</span>
                    <ArrowDown size={20} />
                </motion.a>
            </motion.div>
        </section>
    );
}
