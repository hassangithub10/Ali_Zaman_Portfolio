import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Premium Blue Palette
                brand: {
                    cobalt: "#0047ab",   // Primary Accent
                    malibu: "#87c4ff",   // Secondary Accent
                    madison: "#05245a",  // Deep Highlight / Headings
                    linkwater: "#e6eef6", // Odd Section Background
                    hawkes: "#cce6ff",    // Even Section Background
                },
                // Adaptation for the new theme
                dark: {
                    900: "#05245a",  // Deepest blue instead of black
                    800: "#e6eef6",  // Odd bg
                    700: "#cce6ff",  // Even bg
                    600: "#87c4ff",  // Accent
                },
                accent: {
                    primary: "#0047ab",
                    secondary: "#87c4ff",
                    deep: "#05245a",
                },
                light: {
                    100: "#ffffff",
                    200: "#e6eef6",
                    300: "#05245a", // Muted text is now dark blue
                },
            },
            fontFamily: {
                sans: ["Quera Demo", "Inter", "system-ui", "sans-serif"],
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
                "gradient": "gradient 8s ease infinite",
                "slide-up": "slide-up 0.6s ease-out",
                "fade-in": "fade-in 0.8s ease-out",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-20px)" },
                },
                "pulse-glow": {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(0, 71, 171, 0.4)" },
                    "50%": { boxShadow: "0 0 40px rgba(135, 196, 255, 0.6)" },
                },
                gradient: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                "slide-up": {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
            boxShadow: {
                "glow-primary": "0 0 30px rgba(0, 71, 171, 0.4)",
                "glow-secondary": "0 0 30px rgba(135, 196, 255, 0.5)",
                "glow-deep": "0 0 30px rgba(5, 36, 90, 0.4)",
            },
        },
    },
    plugins: [],
};

export default config;
