"use client";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import Loader from "@/components/ui/Loader";
import type { ReactNode } from "react";

export default function SmoothScrollProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            smoothWheel: true,
        });

        let rafId = 0;
        function raf(time: number) {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);

        const minimumLoadTime = 700;
        const loadId = window.setTimeout(
            () => setIsLoading(false),
            minimumLoadTime,
        );

        return () => {
            cancelAnimationFrame(rafId);
            window.clearTimeout(loadId);
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <Loader visible={isLoading} />
            {!isLoading && children}
        </>
    );
}
