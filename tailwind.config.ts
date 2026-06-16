import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0B0B0F",
                primary: "#8B5CF6",
                accent: "#A855F7",
                text: "#FFFFFF",
            },
            backgroundColor: {
                background: "#0B0B0F",
            },
            textColor: {
                text: "#FFFFFF",
            },
        },
    },
    plugins: [],
};

export default config;
