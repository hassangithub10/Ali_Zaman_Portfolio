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

        const subject = `Portfolio Message from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

        const mailtoUrl = `mailto:ali.zaman.khokhar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;

        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
        }, 3000);
    };

    return (
        <section id="contact" className="py-16 relative overflow-hidden bg-brand-hawkes">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cobalt/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-malibu/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="number-badge">05</span>
                    <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 text-brand-madison">
                        Get in <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-brand-madison/70 max-w-2xl mx-auto font-medium">
                        Let&apos;s discuss how I can contribute to your organization&apos;s success
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-6 gap-16">
                    {/* Contact Form */}
                    {/* <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass rounded-3xl p-10 border border-brand-cobalt/5 shadow-2xl"
                    >
                        <h3 className="text-2xl font-black mb-8 text-brand-madison uppercase tracking-widest text-sm">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-black text-brand-madison/70 ml-2 uppercase tracking-wider">Your Name</label>
                                <div className="relative">
                                    <User size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-cobalt" />
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full pl-14 pr-6 py-4 bg-white border border-brand-cobalt/10 rounded-2xl text-brand-madison placeholder-brand-madison/30 focus:border-brand-cobalt focus:ring-4 focus:ring-brand-cobalt/5 transition-all outline-none font-medium shadow-sm"
                                        placeholder="Name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-black text-brand-madison/70 ml-2 uppercase tracking-wider">Email Address</label>
                                <div className="relative">
                                    <Mail size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-cobalt" />
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full pl-14 pr-6 py-4 bg-white border border-brand-cobalt/10 rounded-2xl text-brand-madison placeholder-brand-madison/30 focus:border-brand-cobalt focus:ring-4 focus:ring-brand-cobalt/5 transition-all outline-none font-medium shadow-sm"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-black text-brand-madison/70 ml-2 uppercase tracking-wider">Message</label>
                                <div className="relative">
                                    <MessageSquare size={18} className="absolute left-5 top-5 text-brand-cobalt" />
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={4}
                                        className="w-full pl-14 pr-6 py-5 bg-white border border-brand-cobalt/10 rounded-2xl text-brand-madison placeholder-brand-madison/30 focus:border-brand-cobalt focus:ring-4 focus:ring-brand-cobalt/5 transition-all outline-none resize-none font-medium shadow-sm"
                                        placeholder="Your Message..."
                                        required
                                    />
                                </div>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitted}
                                className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all uppercase tracking-widest shadow-xl shadow-brand-cobalt/10 ${isSubmitted
                                    ? "bg-green-500 text-white"
                                    : "bg-gradient-to-r from-brand-cobalt to-brand-malibu text-white hover:shadow-brand-cobalt/40"
                                    }`}
                            >
                                {isSubmitted ? (
                                    <>
                                        <CheckCircle size={22} />
                                        Message Sent!
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={22} />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div> */}

                    {/* Contact Info & References */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-12"
                    >
                        {/* Contact Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    className="glass rounded-3xl p-6 shadow-xl border border-brand-cobalt/5 card-hover group"
                                >
                                    <div className="flex flex-col gap-4">
                                        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-md border border-brand-cobalt/10 group-hover:scale-110 group-hover:bg-brand-cobalt group-hover:text-white transition-all duration-300">
                                            <item.icon size={24} className="text-brand-cobalt group-hover:text-white" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-xs font-black text-brand-cobalt uppercase tracking-[0.2em] mb-1">{item.label}</div>
                                            <div className="text-sm font-bold text-brand-madison break-words">{item.value}</div>
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
                            className="glass rounded-3xl p-8 border border-brand-cobalt/5 shadow-2xl"
                        >
                            <h3 className="text-xl font-black mb-8 flex items-center gap-4 text-brand-madison uppercase tracking-widest text-sm">
                                <span className="w-2 h-8 bg-brand-cobalt rounded-full shadow-glow-primary" />
                                Professional References
                            </h3>

                            <div className="space-y-6">
                                {references.map((ref, index) => (
                                    <motion.div
                                        key={ref.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                                        className="p-6 bg-white/40 border border-brand-cobalt/10 rounded-2xl shadow-inner group hover:bg-white/60 transition-all"
                                    >
                                        <h4 className="font-black text-brand-madison text-lg mb-1 group-hover:text-brand-cobalt transition-colors">{ref.name}</h4>
                                        <p className="text-sm font-bold text-brand-cobalt uppercase tracking-widest mb-4">{ref.title}</p>
                                        <div className="flex flex-wrap gap-5 text-xs text-brand-madison/60 font-black uppercase tracking-widest">
                                            <span className="flex items-center gap-2">
                                                <Phone size={14} className="text-brand-cobalt" />
                                                {ref.phone}
                                            </span>
                                            {ref.email && (
                                                <span className="flex items-center gap-2">
                                                    <Mail size={14} className="text-brand-cobalt" />
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
