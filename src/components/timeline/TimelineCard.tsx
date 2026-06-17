"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

interface TimelineItem {
    type: string;
    year: string;
    title: string;
    institution: string;
    description: string;
}

interface TimelineCardProps {
    item: TimelineItem;
    side: "left" | "right";
    index: number;
}

export default function TimelineCard({ item, side, index }: TimelineCardProps) {
    const isEducation = item.type === "education";
    const icon = isEducation ? (
        <GraduationCap size={18} />
    ) : (
        <Briefcase size={18} />
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className={`relative flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr] ${
                side === "right"
                    ? "lg:grid-cols-[1fr_auto_1fr]"
                    : "lg:grid-cols-[1fr_auto_1fr]"
            }`}
        >
            <div
                className={`hidden lg:block ${side === "right" ? "order-3" : "order-1"}`}
            />

            <div className="relative order-2 flex items-start justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/95 text-cyan-300 shadow-xl shadow-cyan-500/10">
                    {icon}
                </div>
            </div>

            <div
                className={`order-4 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-blue-950/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 ${
                    side === "right" ? "lg:mr-8" : "lg:ml-8"
                }`}
            >
                <span className="text-sm uppercase tracking-[0.35em] text-cyan-400">
                    {item.year}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                    {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                    {item.institution}
                </p>
                <p className="mt-4 text-slate-300 leading-7">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
}
