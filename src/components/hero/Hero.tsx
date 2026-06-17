"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Code2, Briefcase, Mail, Download, Send } from "lucide-react";
import HeroImage from "./HeroImage";

export function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen relative overflow-hidden py-20"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto px-6"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.p
                            className="text-lg font-semibold text-blue-400 mb-4"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            👋 Welcome to Nexusfolio
                        </motion.p>

                        <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                            Hi, I&apos;m{" "}
                            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Sumaiya Alam
                            </span>
                        </h1>

                        <div className="h-20 mb-6">
                            <p className="text-2xl font-semibold text-gray-300">
                                <Typewriter
                                    words={[
                                        "Full Stack Developer",
                                        "React Enthusiast",
                                        "UI/UX Designer",
                                        "Problem Solver",
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={60}
                                    delaySpeed={1500}
                                />
                            </p>
                        </div>

                        <p className="text-lg text-gray-400 mb-8 max-w-xl">
                            I build modern, responsive and user-friendly web
                            applications using React, Next.js, TypeScript and
                            Tailwind CSS. Passionate about crafting beautiful
                            digital experiences and solving real-world problems.
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-4 mb-8 flex-wrap">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/resume.pdf"
                                className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
                            >
                                <Download size={20} />
                                Download Resume
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="flex items-center gap-2 px-6 py-3 border border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition"
                            >
                                <Send size={20} />
                                Contact Me
                            </motion.a>
                        </div>

                        {/* Socials */}
                        <motion.div
                            className="flex gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <a
                                href="https://github.com/sumu749"
                                className="p-3 rounded-full border border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition"
                            >
                                <Code2 size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sumaiya-alam749/"
                                className="p-3 rounded-full border border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition"
                            >
                                <Briefcase size={24} />
                            </a>
                            <a
                                href="mailto:sumaiya.cse.tec@gmail.com"
                                className="p-3 rounded-full border border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition"
                            >
                                <Mail size={24} />
                            </a>
                        </motion.div>

                        {/* Tech Stack Pill */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur border border-blue-400/30 rounded-full"
                        >
                            <span className="text-sm font-semibold text-gray-300">
                                React • Next.js • TypeScript • Tailwind •
                                MongoDB • Node.js • JavaScript
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <HeroImage />
                </div>
            </motion.div>
        </section>
    );
}
