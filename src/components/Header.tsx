"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "py-4 glass shadow-xl border-b border-brand-cobalt/10"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="relative group flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <img src="/logo.png" alt="AZ Logo" className="w-12 h-12 rounded-full border-2 border-brand-cobalt/20" />
                    {/* <span className="text-2xl font-bold text-brand-madison">ALI ZAMAN</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-cobalt to-brand-malibu group-hover:w-full transition-all duration-300"></span> */}
                </motion.a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative text-sm font-black text-brand-madison/60 hover:text-brand-cobalt transition-colors duration-300 group uppercase tracking-widest"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cobalt group-hover:w-full transition-all duration-300"></span>
                        </motion.a>
                    ))}
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 text-sm font-black text-white bg-gradient-to-r from-brand-cobalt to-brand-malibu rounded-full shadow-lg shadow-brand-cobalt/20 hover:shadow-brand-cobalt/40 transition-all duration-300 uppercase tracking-widest"
                    >
                        Let&apos;s Connect
                    </motion.a>
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-brand-madison"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass mt-4 mx-4 rounded-3xl overflow-hidden border border-brand-cobalt/10 shadow-2xl"
                    >
                        <nav className="flex flex-col p-8 gap-6">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-black text-brand-madison/60 hover:text-brand-cobalt hover:pl-2 transition-all duration-300 uppercase tracking-widest"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 px-8 py-4 text-center text-sm font-black text-white bg-gradient-to-r from-brand-cobalt to-brand-malibu rounded-2xl shadow-xl"
                            >
                                Let&apos;s Connect
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
