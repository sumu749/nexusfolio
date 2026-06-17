import Navbar from "@/components/navbar/Navbar";
import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Education } from "@/components/education/Education";
import { Experience } from "@/components/experience/Experience";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { Skills } from "@/components/skills/Skills";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="mx-auto max-w-6xl px-6 py-10">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Education />
                <ProjectsSection />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
