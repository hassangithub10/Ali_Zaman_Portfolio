import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Engr. Ali Zaman | Strategic Planning & Supply Chain Expert",
    description: "Portfolio of Engr. Ali Zaman, a specialist in Strategic Planning, Supply Chain, and Operational Excellence with 12+ years of experience.",
    icons: {
        icon: "/favicon.png",
    },
    keywords: ["Ali Zaman", "Strategic Planning", "Supply Chain", "Operations", "Production Planning", "Change Management", "Business Optimization"],
    authors: [{ name: "Engr. Ali Zaman" }],
    openGraph: {
        title: "Engr. Ali Zaman | Strategic Planning & Supply Chain Expert",
        description: "Experienced professional in Strategic Planning, Supply Chain Management, and Operations.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="bg-dark-900 text-light-100 antialiased">
                {children}
            </body>
        </html>
    );
}
