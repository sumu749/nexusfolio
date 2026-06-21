import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        slug: "etuition-bd",
        title: "eTuition BD",
        description:
            "A complete tuition management platform connecting students, tutors and administrators with secure authentication, dashboards and payment integration.",

        image: "/projects/etuition.png",

        live: "https://etuitionbd-by-sumu.web.app/",
        github: "https://github.com/sumu749/eTuitionBd-client-side",

        techStack: ["React", "Node.js", "MongoDB", "Firebase", "JWT", "Stripe"],

        challenges: [
            "Complex role-based dashboard",
            "Secure authentication",
            "Payment workflow",
        ],
        futurePlans: ["Video classes", "Real-time chat", "Mobile application"],
        overview:
            "eTuition BD is a complete tuition management platform where students can find tutors, tutors can manage sessions and admins can control the entire system.",
        features: [
            "Role Based Authentication",
            "Student Dashboard",
            "Tutor Dashboard",
            "Admin Dashboard",
            "Stripe Payment Integration",
            "Responsive Design",
        ],
        featured: true,
        category: "",
    },

    {
        slug: "warm-paws",

        title: "Warm Paws",

        description:
            "Pet adoption platform helping users discover, adopt and manage pet adoption requests through an intuitive experience.",

        image: "/projects/warm-paws.png",

        live: "https://warm-paws-config.web.app/",
        github: "https://github.com/sumu749/warm-paws-by-sumu",

        techStack: ["React", "MongoDB", "Firebase", "Tailwind"],

        challenges: [
            "Advanced filtering",
            "Image management",
            "Responsive adoption flow",
        ],
        futurePlans: ["Pet donation system", "Veterinarian directory"],
        overview:
            "Warm Paws is a pet adoption platform connecting pets with loving families.",
        features: [
            "Pet Listings",
            "Adoption Requests",
            "Advanced Filtering",
            "Responsive Design",
        ],
        category: "",
    },

    {
        slug: "rent-wheels",

        title: "RentWheels",

        description:
            "Modern vehicle rental platform with booking management, availability tracking and user-friendly rental experience.",

        image: "/projects/rentwheels.png",

        live: "https://rentwheel-by-sumu.web.app/",
        github: "https://github.com/sumu749/rentWheel-client-side",

        techStack: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],

        challenges: [
            "Booking logic",
            "Vehicle availability",
            "Reservation workflow",
        ],
        futurePlans: ["Online payment", "Driver booking", "Maps integration"],
        overview:
            "RentWheels is a vehicle rental solution that allows users to browse and rent vehicles online.",
        features: [
            "Vehicle Listings",
            "Booking System",
            "Availability Management",
            "User Dashboard",
        ],
        category: "",
    },
];
