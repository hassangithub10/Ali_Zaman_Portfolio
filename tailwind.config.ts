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
                // High-Contrast Palette
                dark: {
                    900: "#0d0d0d",  // Cod Gray - primary background
                    800: "#1a1a1a",  // Secondary background
                    700: "#242424",  // Lighter gray
                    600: "#2a2a2a",  // Variant
                },
                accent: {
                    primary: "#ffda1a",   // Candlelight Yellow - primary accent
                    secondary: "#a40000", // Bright Red - secondary accent
                    brown: "#332113",     // Keeping for legacy or sub-accents
                },
                // Light colors for text
                light: {
                    100: "#ffffff",  // White for text
                    200: "#f4f4f4",  // Wild Sand
                    300: "#cccccc",  // Muted text
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
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
                    "0%, 100%": { boxShadow: "0 0 20px rgba(255, 218, 26, 0.4)" },
                    "50%": { boxShadow: "0 0 40px rgba(164, 0, 0, 0.6)" },
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
                "glow-red": "0 0 30px rgba(164, 0, 0, 0.4)",
                "glow-dark": "0 0 30px rgba(255, 218, 26, 0.5)",
                "glow-brown": "0 0 30px rgba(164, 0, 0, 0.4)",
            },
        },
    },
    plugins: [],
};

export default config;
