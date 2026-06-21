"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader({ visible }: { visible: boolean }) {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="fixed inset-0 z-999 flex items-center justify-center bg-[#0B1020]"
                >
                    <motion.h1
                        animate={{ opacity: [0.4, 1, 0.4], y: [0, -8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-6xl font-bold bg-linear-to-r from-[#4E56C0] via-[#9B5DE0] to-[#D78FEE] bg-clip-text text-transparent"
                    >
                        Nexusfolio
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
