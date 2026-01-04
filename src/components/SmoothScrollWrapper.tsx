"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ReactNode } from "react";

interface SmoothScrollWrapperProps {
    children: ReactNode;
}

export default function SmoothScrollWrapper({ children }: SmoothScrollWrapperProps) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            {/* Progress Bar */}
            <motion.div
                style={{ scaleX }}
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-dark-700 origin-left z-[100]"
            />
            {children}
        </>
    );
}
