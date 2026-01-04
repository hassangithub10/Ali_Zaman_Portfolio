"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, ArrowUp } from "lucide-react";

const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://pk.linkedin.com/in/ali-zaman-malik-engr-5b26a6287",
    },
    {
        name: "Email",
        icon: Mail,
        href: "mailto:ali.zaman.khokhar@gmail.com",
    },
    {
        name: "Phone",
        icon: Phone,
        href: "tel:+923336549290",
    },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative pt-20 pb-8 overflow-hidden bg-dark-700">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

            {/* Background Effects */}
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-secondary/5 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-100">
                        Let&apos;s Work <span className="gradient-text">Together</span>
                    </h2>
                    <p className="text-light-300 max-w-xl mx-auto mb-8">
                        Ready to transform your operations with strategic excellence?
                        Let&apos;s connect and discuss opportunities.
                    </p>
                    <motion.a
                        href="mailto:ali.zaman.khokhar@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-light-100 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full hover:shadow-glow-red transition-all"
                    >
                        <Mail size={18} />
                        ali.zaman.khokhar@gmail.com
                    </motion.a>
                </motion.div>

                {/* Footer Content */}
                <div className="grid md:grid-cols-3 gap-8 py-12 border-t border-light-100/10">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <a href="#" className="flex items-center gap-2 mb-6 group inline-block">
                            <img src="/logo.png" alt="AZ Logo" className="w-12 h-12 rounded-full" />
                            <span className="text-2xl font-bold text-light-100 group-hover:text-accent-primary transition-colors">ALI ZAMAN</span>
                        </a>
                        <p className="text-light-300 text-sm mb-4">
                            Strategic Planning & Supply Chain Expert based in Lahore, Pakistan.
                            Serving organizations globally.
                        </p>
                        <p className="text-light-300/60 text-xs">
                            📍 Lahore, Pakistan
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <h4 className="font-semibold text-light-100 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-light-300 hover:text-light-100 hover:pl-2 transition-all text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <h4 className="font-semibold text-light-100 mb-4">Connect</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target={social.href.startsWith("http") ? "_blank" : undefined}
                                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg glass hover:bg-dark-800/50 transition-colors"
                                    title={social.name}
                                >
                                    <social.icon size={18} className="text-light-300 hover:text-light-100" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-light-100/5">
                    <p className="text-light-300/60 text-sm">
                        © {new Date().getFullYear()} Engr. Ali Zaman. All Rights Reserved.
                    </p>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-light-300 hover:text-light-100 glass rounded-full transition-colors"
                    >
                        <ArrowUp size={16} />
                        Back to Top
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
