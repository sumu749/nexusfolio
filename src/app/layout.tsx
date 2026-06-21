import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Aurora from "@/components/ui/Aurora";
import CommandPalette from "@/components/ui/CommandPalette";
import Cursor from "@/components/ui/Cursor";
import PageTransition from "@/components/providers/PageTransition";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
    metadataBase: new URL("https://nexusfolio-pi.vercel.app/"),
    title: "Nexusfolio | Sumaiya Alam",
    description:
        "Full Stack Developer specializing in React, Next.js, TypeScript and MERN stack applications.",
    keywords: [
        "Next.js Developer",
        "React Developer",
        "MERN Stack Developer",
        "Portfolio",
    ],
    icons: {
        icon: "/favicon.ico",
        apple: "/icon.png",
    },
    manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} cursor-none bg-[#0B1020] text-white`}
            >
                <Cursor />
                <Aurora />
                <CommandPalette />
                <SmoothScrollProvider>
                    <PageTransition>{children}</PageTransition>
                </SmoothScrollProvider>
            </body>
        </html>
    );
}
