"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
    skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
    return (
        <motion.span
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 shadow-sm shadow-slate-950/20 transition"
        >
            {skill}
        </motion.span>
    );
}
