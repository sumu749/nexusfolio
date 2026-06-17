export function Placeholder({ title }: { title: string }) {
    return (
        <section className="rounded-3xl border border-white/10 bg-black/20 p-8 text-center text-slate-300">
            <p>{title} component placeholder</p>
        </section>
    );
}
