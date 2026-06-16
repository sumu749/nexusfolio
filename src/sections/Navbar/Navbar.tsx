"use client";

import { useEffect, useState } from "react";
import {
    Home,
    User,
    Sparkles,
    GraduationCap,
    Briefcase,
    Mail,
} from "lucide-react";

import { motion } from "framer-motion";
import clsx from "clsx";

const navItems = [
    {
        label: "Home",
        href: "#hero",
        icon: Home,
    },
    {
        label: "About",
        href: "#about",
        icon: User,
    },
    {
        label: "Skills",
        href: "#skills",
        icon: Sparkles,
    },
    {
        label: "Education",
        href: "#education",
        icon: GraduationCap,
    },
    {
        label: "Projects",
        href: "#projects",
        icon: Briefcase,
    },
    {
        label: "Contact",
        href: "#contact",
        icon: Mail,
    },
];

export default function Navbar() {
    const [active, setActive] = useState("#hero");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const sections = navItems
            .map((item) => document.querySelector(item.href))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(`#${entry.target.id}`);
                    }
                });
            },
            {
                threshold: 0.4,
            },
        );

        sections.forEach((section) => {
            observer.observe(section!);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section!);
            });
        };
    }, []);

    const scrollToSection = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        e.preventDefault();

        const target = document.querySelector(href);

        target?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <header className="fixed top-5 left-1/2 z-50 -translate-x-1/2 w-full max-w-7xl px-4">
            <div
                className={clsx(
                    "relative flex items-center justify-between transition-all duration-500",
                    scrolled ? "py-2" : "py-4",
                )}
            >
                {/* Glow */}
                <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-purple-600/40 blur-[120px]" />

                <div className="absolute -right-20 top-0 h-40 w-40 rounded-full bg-violet-500/40 blur-[120px]" />

                {/* Logo */}
                <div className="z-10 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                        N
                    </div>

                    <span className="font-bold text-white text-xl">Nexus.</span>
                </div>

                {/* Center Nav */}
                <nav className="relative z-10 flex items-center gap-1 rounded-full border border-white/10 bg-black/30 backdrop-blur-2xl p-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="relative"
                            >
                                {active === item.href && (
                                    <motion.div
                                        layoutId="active-pill"
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                        className="absolute inset-0 rounded-full bg-white"
                                    />
                                )}

                                <div
                                    className={clsx(
                                        "relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                                        active === item.href
                                            ? "text-black"
                                            : "text-white/70 hover:text-white",
                                    )}
                                >
                                    <Icon size={16} />
                                    <span>{item.label}</span>
                                </div>
                            </a>
                        );
                    })}
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    className="z-10 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
                >
                    Hire Me
                </a>
            </div>
        </header>
    );
}
