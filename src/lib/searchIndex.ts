export type SearchItem = {
    title: string;
    href: string;
    description: string;
    keywords: string[];
};

export const searchIndex: SearchItem[] = [
    {
        title: "Foundations",
        href: "/foundations",
        description: "Sources of Knowledge (Sense, Reason, Testimony) and Mental Models.",
        keywords: ["epistemology", "truth", "senses", "reason", "logic", "map territory"],
    },
    {
        title: "Logic & Argumentation",
        href: "/logic",
        description: "Deduction, Induction, Fallacies, and Islamic Qiyas.",
        keywords: ["deduction", "induction", "fallacy", "ad hominem", "qiyas", "analogy"],
    },
    {
        title: "Epistemology",
        href: "/epistemology",
        description: "Integrated Epistemic Model: Senses, Reason, and Revelation.",
        keywords: ["knowledge", "science", "revelation", "wahi", "empiricism", "rationalism"],
    },
    {
        title: "Metaphysics",
        href: "/metaphysics",
        description: "Existence vs Essence, Contingency (Mumkin), and Dependency Chains.",
        keywords: ["existence", "essence", "reality", "contingeny", "necessary being", "ibn sina"],
    },
    {
        title: "God (Ilāhiyyāt)",
        href: "/god",
        description: "Arguments for God (Contingency) and Divine Attributes.",
        keywords: ["god", "theism", "atheism", "deism", "tawhid", "attributes", "creator"],
    },
    {
        title: "Science & Reason",
        href: "/science",
        description: "Relationship between Science (Method) and Revelation (Guidance).",
        keywords: ["science", "scientism", "evolution", "miracles", "method", "why"],
    },
    {
        title: "Ethics (Akhlaq)",
        href: "/ethics",
        description: "Islamic vs Liberal Ethics: Moral Sources and Prevention model.",
        keywords: ["morality", "ethics", "liberalism", "secular", "sharia", "law", "values"],
    },
    {
        title: "Political Philosophy",
        href: "/politics",
        description: "The Social Contract vs Divine Covenant. Sovereignty belongs to God.",
        keywords: ["politics", "democracy", "liberalism", "sharia", "caliphate", "freedom", "law"],
    },
    {
        title: "Astronomy & Fine-Tuning",
        href: "/science/astronomy",
        description: "The Fine-Tuning Argument vs The Multiverse. Evidence of Design.",
        keywords: ["astronomy", "fine tuning", "multiverse", "design", "teleology", "universe"],
    },
    {
        title: "Quantum Mechanics",
        href: "/science/quantum",
        description: "The Observer Effect and the end of Materialism.",
        keywords: ["quantum", "physics", "observer effect", "materialism", "determinism", "bohr"],
    },
    {
        title: "Biology & Evolution",
        href: "/science/biology",
        description: "DNA as Information and the failure of Neo-Darwinism.",
        keywords: ["biology", "evolution", "darwin", "dna", "information", "mutation"],
    },
    {
        title: "Scientific Myths",
        href: "/science/myths",
        description: "Debunking common textbook myths: Miller-Urey, Haeckel, Junk DNA.",
        keywords: ["myths", "junk dna", "haeckels embryos", "miller urey", "science", "textbooks"],
    },
    {
        title: "Psychology of Doubt",
        href: "/psychology",
        description: "The heart's role in doubt. Al-Ghazali's diagnosis of skepticism.",
        keywords: ["psychology", "doubt", "waswasa", "heart", "ghazali", "certainty", "fitrah"],
    },
];
