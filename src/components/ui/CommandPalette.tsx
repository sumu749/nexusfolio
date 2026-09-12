"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
    Command,
    CommandInput,
    CommandItem,
    CommandList,
    CommandGroup,
    CommandEmpty,
} from "cmdk";
import {
    Download,
    GitBranch,
    Globe,
    Folder,
    Home,
    Mail,
    Sparkles,
    User,
} from "lucide-react";

const commands = [
    {
        id: "home",
        name: "Home",
        href: "#home",
        icon: Home,
    },
    {
        id: "about",
        name: "About",
        href: "#about",
        icon: User,
    },
    {
        id: "skills",
        name: "Skills",
        href: "#skills",
        icon: Sparkles,
    },
    {
        id: "education",
        name: "Journey",
        href: "#education",
        icon: Globe,
    },
    {
        id: "projects",
        name: "Projects",
        href: "#projects",
        icon: Folder,
    },
    {
        id: "contact",
        name: "Contact",
        href: "#contact",
        icon: Mail,
    },
    {
        id: "resume",
        name: "Resume",
        href: "/resume.pdf",
        icon: Download,
        external: true,
    },
    {
        id: "github",
        name: "GitHub",
        href: "https://github.com/sumu749",
        icon: GitBranch,
        external: true,
    },
];

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
            const isCommand = isMac ? event.metaKey : event.ctrlKey;

            if (isCommand && event.key.toLowerCase() === "k") {
                event.preventDefault();
                setOpen((current) => !current);
            }

            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 50);
        } else {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setValue("");
        }
    }, [open]);

    const filteredCommands = useMemo(
        () =>
            commands.filter((command) =>
                command.name.toLowerCase().includes(value.toLowerCase()),
            ),
        [value],
    );

    const openCommand = (command: (typeof commands)[number]) => {
        setOpen(false);
        if (command.href.startsWith("#")) {
            const element = document.querySelector(command.href);
            element?.scrollIntoView({ behavior: "smooth" });
            return;
        }

        if (command.external) {
            window.open(command.href, "_blank", "noreferrer");
            return;
        }

        // eslint-disable-next-line react-hooks/immutability
        window.location.href = command.href;
    };

    return (
        <div>
            <button
                type="button"
                className="fixed bottom-6 right-6 z-9999 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white shadow-xl shadow-violet-500/10 backdrop-blur-xl transition hover:bg-white/10"
                onClick={() => setOpen(true)}
            >
                <span>Ctrl + K</span>
            </button>

            {open ? (
                <div className="fixed inset-0 z-9998 flex items-center justify-center bg-black/40 px-4 py-8 backdrop-blur-sm">
                    <Command className="w-full max-w-2xl overflow-hidden rounded-4xl border border-white/10 bg-[#0B1020]/95 text-white shadow-[0_30px_120px_rgba(109,40,217,0.25)] backdrop-blur-2xl">
                        <CommandInput
                            ref={inputRef}
                            value={value}
                            onValueChange={setValue}
                            placeholder="Jump to..."
                            className="h-16 bg-[#111827] px-5 text-lg text-white outline-none placeholder:text-slate-500"
                        />
                        <CommandList className="max-h-105 overflow-auto">
                            <CommandEmpty className="px-5 py-4 text-sm text-slate-400">
                                No matching command.
                            </CommandEmpty>
                            <CommandGroup heading="Navigate">
                                {filteredCommands.map((command) => {
                                    const Icon = command.icon;
                                    return (
                                        <CommandItem
                                            key={command.id}
                                            value={command.name}
                                            onSelect={() =>
                                                openCommand(command)
                                            }
                                            className="flex cursor-default items-center gap-3 px-5 py-3 text-sm text-slate-100 outline-none transition hover:bg-white/10"
                                        >
                                            <Icon className="h-4 w-4 text-violet-300" />
                                            {command.name}
                                        </CommandItem>
                                    );
                                })}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </div>
            ) : null}
        </div>
    );
}
