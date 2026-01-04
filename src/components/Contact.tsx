"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    Phone,
    Mail,
    MapPin,
    Linkedin,
    Send,
    User,
    MessageSquare,
    CheckCircle
} from "lucide-react";

const contactInfo = [
    {
        icon: Phone,
        label: "Phone",
        value: "+92-333-6549290",
        href: "tel:+923336549290",
    },
    {
        icon: Mail,
        label: "Email",
        value: "ali.zaman.khokhar@gmail.com",
        href: "mailto:ali.zaman.khokhar@gmail.com",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "Connect on LinkedIn",
        href: "https://pk.linkedin.com/in/ali-zaman-malik-engr-5b26a6287",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "160, JE, Chinar Bagh, Lahore, Pakistan - 54000",
        href: "#",
    },
];

const references = [
    {
        name: "Manzoor H. Nadeem",
        title: "COO Samad Apparel/Rubber",
        phone: "+92-300-8416606",
        phoneLink: "tel:+923008416606",
        email: "manzoor.nadeem@samadapparel.com",
        emailLink: "mailto:manzoor.nadeem@samadapparel.com",
    },
    {
        name: "Rana Asif Ali Khan",
        title: "Ex COO Beximco Bangladesh",
        phone: "+92 332 0455385",
        phoneLink: "tel:+923320455385",
        address: "Lahore",
    },
];

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
        }, 3000);
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-dark-800">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl" />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="number-badge">05</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-light-100">
                        Get in <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-light-300 max-w-2xl mx-auto">
                        Let&apos;s discuss how I can contribute to your organization&apos;s success
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass rounded-2xl p-8"
                    >
                        <h3 className="text-xl font-bold mb-6 text-light-100">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm text-light-300 mb-2">Your Name</label>
                                <div className="relative">
                                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-light-300" />
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-light-100 placeholder-light-300/50 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-light-300 mb-2">Email Address</label>
                                <div className="relative">
                                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-light-300" />
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-light-100 placeholder-light-300/50 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-light-300 mb-2">Message</label>
                                <div className="relative">
                                    <MessageSquare size={18} className="absolute left-4 top-4 text-light-300" />
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={4}
                                        className="w-full pl-12 pr-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-light-100 placeholder-light-300/50 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all resize-none"
                                        placeholder="Your message..."
                                        required
                                    />
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitted}
                                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${isSubmitted
                                    ? "bg-green-600 text-white"
                                    : "bg-gradient-to-r from-accent-primary to-accent-secondary text-light-100 hover:shadow-glow-red"
                                    }`}
                            >
                                {isSubmitted ? (
                                    <>
                                        <CheckCircle size={20} />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info & References */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Contact Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="glass rounded-xl p-4 card-hover group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 group-hover:from-accent-primary/30 group-hover:to-accent-secondary/30 transition-colors">
                                            <item.icon size={18} className="text-accent-primary" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-xs text-light-300 mb-0.5">{item.label}</div>
                                            <div className="text-sm text-light-100 truncate">{item.value}</div>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* References */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="glass rounded-2xl p-6"
                        >
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-light-100">
                                <span className="w-6 h-6 flex items-center justify-center rounded-md bg-gradient-to-r from-accent-primary to-accent-secondary text-xs font-bold text-light-100">
                                    R
                                </span>
                                References
                            </h3>

                            <div className="space-y-4">
                                {references.map((ref, index) => (
                                    <motion.div
                                        key={ref.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                                        className="p-4 bg-dark-900/50 rounded-xl"
                                    >
                                        <h4 className="font-semibold text-light-100 mb-1">{ref.name}</h4>
                                        <p className="text-sm text-accent-primary mb-2">{ref.title}</p>
                                        <div className="flex flex-wrap gap-3 text-xs text-light-300">
                                            <span className="flex items-center gap-1">
                                                <Phone size={12} />
                                                {ref.phone}
                                            </span>
                                            {ref.email && (
                                                <span className="flex items-center gap-1">
                                                    <Mail size={12} />
                                                    {ref.email}
                                                </span>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
