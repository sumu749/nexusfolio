"use client";
import { motion } from "framer-motion";

export default function Aurora() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden">
            <motion.div
                animate={{
                    x: [0, 120, 0],
                    y: [0, 60, 0],
                }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -left-24 top-16 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#8B5CF6]/40 via-[#A78BFA]/20 to-[#60A5FA]/10 blur-[160px] opacity-90 mix-blend-screen"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, -40, 0],
                }}
                transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute right-[-120px] top-[30%] h-[440px] w-[440px] rounded-full bg-gradient-to-br from-[#22D3EE]/30 via-[#818CF8]/20 to-[#F472B6]/10 blur-[160px] opacity-80 mix-blend-screen"
            />
            <motion.div
                animate={{
                    x: [0, 40, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-80px] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#9333EA]/50 via-[#0EA5E9]/30 to-[#EC4899]/20 blur-[180px] opacity-80 mix-blend-screen"
            />
        </div>
    );
}
