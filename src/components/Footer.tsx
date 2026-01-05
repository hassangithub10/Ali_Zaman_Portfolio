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
        <footer className="relative pt-20 pb-8 overflow-hidden bg-brand-hawkes">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cobalt/50 to-transparent" />

            {/* Background Effects */}
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-cobalt/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-malibu/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-black mb-4 text-brand-madison">
                        Let&apos;s Work <span className="gradient-text">Together</span>
                    </h2>
                    <p className="text-brand-madison/70 max-w-xl mx-auto mb-8 font-medium">
                        Ready to transform your operations with strategic excellence?
                        Let&apos;s connect and discuss opportunities.
                    </p>
                    <motion.a
                        href="mailto:ali.zaman.khokhar@gmail.com"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 text-sm font-black text-white bg-gradient-to-r from-brand-cobalt to-brand-malibu rounded-full shadow-lg shadow-brand-cobalt/20 hover:shadow-brand-cobalt/40 transition-all uppercase tracking-widest"
                    >
                        <Mail size={18} />
                        ali.zaman.khokhar@gmail.com
                    </motion.a>
                </motion.div>

                {/* Footer Content */}
                <div className="grid md:grid-cols-3 gap-12 py-12 border-t border-brand-cobalt/10">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <a href="#" className="flex items-center gap-3 mb-6 group inline-block">
                            <img src="/logo.png" alt="AZ Logo" className="w-12 h-12 rounded-full border-2 border-brand-cobalt/20" />
                            <span className="text-2xl font-black text-brand-madison group-hover:text-brand-cobalt transition-colors tracking-tighter">ALI ZAMAN</span>
                        </a>
                        <p className="text-brand-madison/70 text-sm mb-4 font-medium leading-relaxed">
                            Strategic Planning & Supply Chain Expert based in Lahore, Pakistan.
                            Serving organizations globally.
                        </p>
                        <p className="text-brand-cobalt font-black text-xs uppercase tracking-widest">
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
                        <h4 className="font-black text-brand-madison mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-brand-madison/60 hover:text-brand-cobalt hover:pl-2 transition-all text-sm font-bold uppercase tracking-wider"
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
                        <h4 className="font-black text-brand-madison mb-6 uppercase tracking-widest text-sm">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target={social.href.startsWith("http") ? "_blank" : undefined}
                                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-12 h-12 flex items-center justify-center rounded-2xl glass hover:bg-white/60 transition-all shadow-sm border border-brand-cobalt/10"
                                    title={social.name}
                                >
                                    <social.icon size={20} className="text-brand-cobalt" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-brand-cobalt/5">
                    <p className="text-brand-madison/40 text-xs font-black uppercase tracking-widest">
                        © {new Date().getFullYear()} Engr. Ali Zaman. All Rights Reserved.
                    </p>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 px-6 py-2.5 text-xs font-black text-brand-cobalt uppercase tracking-widest glass rounded-full shadow-sm hover:shadow-md transition-all border border-brand-cobalt/10"
                    >
                        <ArrowUp size={14} />
                        Back to Top
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
