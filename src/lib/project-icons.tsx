import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
    SiMongodb,
    SiFirebase,
    SiNextdotjs,
    SiTypescript,
    SiStripe,
    SiTailwindcss,
} from "react-icons/si";

export const techIcons: Record<string, React.ReactNode> = {
    React: <FaReact />,
    "Node.js": <FaNodeJs />,
    MongoDB: <SiMongodb />,
    Firebase: <SiFirebase />,
    Next: <SiNextdotjs />,
    "Next.js": <SiNextdotjs />,
    TypeScript: <SiTypescript />,
    Stripe: <SiStripe />,
    Tailwind: <SiTailwindcss />,
    "Tailwind CSS": <SiTailwindcss />,
};

export default techIcons;
