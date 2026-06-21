"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Atom, Database, LayoutDashboard, Server, Type } from "lucide-react";

export default function HeroImage() {
    return (
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto max-w-lg md:max-w-xl"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>

            {/* Main Card */}
            <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 bg-linear-to-br from-gray-900/50 to-gray-800/50 backdrop-blur p-6">
                {/* Animated Border */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute inset-0 border border-blue-500/20 rounded-3xl pointer-events-none"
                ></motion.div>

                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute inset-2 border border-cyan-500/10 rounded-3xl pointer-events-none"
                ></motion.div>

                {/* Photo */}
                <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 mb-6 aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5]">
                    <Image
                        src="/images/portfolio.png"
                        alt="Sumaiya Alam"
                        fill
                        quality={100}
                        className="object-cover"
                        priority
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent"></div>
                </div>

                {/* Bottom Info */}
                <div className="relative z-10 space-y-2">
                    <h3 className="text-2xl font-bold text-white">
                        Sumaiya Alam
                    </h3>
                    <p className="text-blue-400 font-semibold">
                        MERN Stack Developer
                    </p>
                </div>
            </div>

            {/* Floating Tech Badges */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -top-3 -left-3 rounded-full bg-slate-900/95 border border-white/10 shadow-xl px-3 py-2 flex items-center gap-2"
            >
                <Atom size={18} className="text-cyan-400" />
                <span className="text-sm font-semibold text-white">React</span>
            </motion.div>

            <motion.div
                animate={{ y: [0, 10, 0], x: [0, 4, 0] }}
                transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                }}
                className="absolute top-12 -right-5 rounded-full bg-slate-900/95 border border-white/10 shadow-xl px-3 py-2 flex items-center gap-2"
            >
                <LayoutDashboard size={18} className="text-blue-400" />
                <span className="text-sm font-semibold text-white">
                    Next.js
                </span>
            </motion.div>

            <motion.div
                animate={{ x: [0, -8, 0], y: [0, 6, 0] }}
                transition={{
                    duration: 4.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.35,
                }}
                className="absolute bottom-28 left-0 rounded-full bg-slate-900/95 border border-white/10 shadow-xl px-3 py-2 flex items-center gap-2"
            >
                <Type size={18} className="text-emerald-400" />
                <span className="text-sm font-semibold text-white">
                    TypeScript
                </span>
            </motion.div>

            <motion.div
                animate={{ x: [0, 8, 0], y: [0, 10, 0] }}
                transition={{
                    duration: 4.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                }}
                className="absolute bottom-32 right-0 rounded-full bg-slate-900/95 border border-white/10 shadow-xl px-3 py-2 flex items-center gap-2"
            >
                <Server size={18} className="text-orange-400" />
                <span className="text-sm font-semibold text-white">
                    Node.js
                </span>
            </motion.div>

            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.15,
                }}
                className="absolute top-40 -right-14 rounded-full bg-slate-900/95 border border-white/10 shadow-xl px-3 py-2 flex items-center gap-2"
            >
                <Database size={18} className="text-green-400" />
                <span className="text-sm font-semibold text-white">
                    MongoDB
                </span>
            </motion.div>
        </motion.div>
    );
}
