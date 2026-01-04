"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const SmoothScrollWrapper = dynamic(
    () => import("@/components/SmoothScrollWrapper"),
    { ssr: false }
);

export default function Home() {
    return (
        <SmoothScrollWrapper>
            <Header />
            <main className="relative">
                <Hero />
                <div className="section-divider" />
                <About />
                <div className="section-divider" />
                <Experience />
                <div className="section-divider" />
                <Skills />
                <div className="section-divider" />
                <Education />
                <div className="section-divider" />
                <Contact />
            </main>
            <Footer />
        </SmoothScrollWrapper>
    );
}
