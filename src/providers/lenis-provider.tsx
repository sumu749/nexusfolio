"use client";

import { useEffect } from "react";
import Lenis from "lenis";

type LenisProviderProps = {
    children: React.ReactNode;
};

export default function LenisProvider({ children }: LenisProviderProps) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            infinite: false,
            wheelMultiplier: 1,
            lerp: 0.1,
            autoRaf: false,
        });

        let frame: number;

        const animate = (time: number) => {
            lenis.raf(time);
            frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);

        const handleAnchorClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            if (!target) return;
            const anchor = target.closest("a") as HTMLAnchorElement | null;
            if (!anchor) return;
            const href = anchor.getAttribute("href");
            if (!href || !href.startsWith("#")) return;

            const id = href.slice(1);
            const element = document.getElementById(id);
            if (!element) return;

            event.preventDefault();
            lenis.scrollTo(element, { offset: -24 });
            window.history.pushState(null, "", href);
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            document.removeEventListener("click", handleAnchorClick);
            cancelAnimationFrame(frame);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
