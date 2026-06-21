import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";
import Aurora from "@/components/ui/Aurora";
import Cursor from "@/components/ui/Cursor";
import PageTransition from "@/components/providers/PageTransition";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
    title: "Nexusfolio | Sumaiya Alam",
    description:
        "Full Stack Developer specializing in React, Next.js, TypeScript and MERN stack applications.",
    keywords: [
        "Next.js Developer",
        "React Developer",
        "MERN Stack Developer",
        "Portfolio",
    ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="cursor-none bg-[#0B1020] text-white">
                <Cursor />
                <Aurora />
                <SmoothScrollProvider>
                    <PageTransition>{children}</PageTransition>
                </SmoothScrollProvider>
            </body>
        </html>
    );
}
