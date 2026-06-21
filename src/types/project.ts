export interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    live: string;
    github: string;
    techStack: string[];
    challenges: string[];
    futurePlans: string[];
    overview?: string;
    features?: string[];
    featured?: boolean;
}
