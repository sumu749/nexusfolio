"use client";
import { useEffect, useState } from "react";

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const move = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };
        const hide = () => setIsVisible(false);
        const show = () => setIsVisible(true);

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseleave", hide);
        window.addEventListener("mouseenter", show);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseleave", hide);
            window.removeEventListener("mouseenter", show);
        };
    }, []);

    return (
        <>
            <div
                className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 rounded-full bg-[#9B5DE0] shadow-[0_0_0_8px_rgba(155,93,224,0.12)] transition-opacity duration-200"
                style={{
                    transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
                    opacity: isVisible ? 1 : 0,
                }}
            />
            <div
                className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border border-[#9B5DE0]/40 transition-opacity duration-200"
                style={{
                    transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0)`,
                    opacity: isVisible ? 1 : 0,
                }}
            />
        </>
    );
}
