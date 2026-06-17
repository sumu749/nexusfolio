import type { ReactNode } from "react";

interface SheetProps {
    children: ReactNode;
}

interface SheetContentProps {
    children: ReactNode;
    className?: string;
}

export function Sheet({ children }: SheetProps) {
    return <div>{children}</div>;
}

export function SheetTrigger({ children }: SheetProps) {
    return <>{children}</>;
}

export function SheetContent({ children, className }: SheetContentProps) {
    return <div className={className}>{children}</div>;
}
