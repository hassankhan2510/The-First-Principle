export type QAItem = {
    id: string;
    question: string;
    answer: string;
    category: "Theology" | "Science" | "Ethics" | "Social" | "Logic";
    tags: string[];
};

export const qnaData: QAItem[] = [
    {
        id: "evil-1",
        category: "Theology",
        question: "If God is Merciful, why is there Evil and Suffering?",
        answer: "Evil is not a 'created thing' like a rock; it is the *absence* of good, just as darkness is the absence of light. Suffering exists as a test (Bala') to cultivate virtues like patience (Sabr) and courage. Without danger, courage cannot exist. This world is a gym, not a spa.",
        tags: ["evil", "suffering", "theodicy", "god"]
    },
    {
        id: "evolution-1",
        category: "Science",
        question: "Does Evolution disprove God?",
        answer: "No. Evolution is a claim about *mechanism* (how things change), not *agency* (who made them). Even if Evolution were 100% true, it would only explain the survival of the fittest, not the *arrival* of the fittest. Code (DNA) still requires a Coder.",
        tags: ["evolution", "darwin", "science", "biology"]
    },
    {
        id: "science-bigbang",
        category: "Science",
        question: "Is the Big Bang mentioned in the Quran?",
        answer: "The Quran (21:30) states: 'Do the disbelievers not see that the heavens and the earth were a joined entity (ratqan), then We separated them?' This aligns with the cosmological singularity. The Quran is not a science textbook, but it guides us to reflect on scientific truths.",
        tags: ["big bang", "cosmology", "quran", "miracles"]
    },
    {
        id: "logic-rock",
        category: "Logic",
        question: "Can God create a rock so heavy He cannot lift it?",
        answer: "This is a logical fallacy called a 'Category Mistake.' It is like asking: 'Can God draw a square circle?' or 'Can God smell the color 9?' These are not 'things'—they are nonsense. God's power applies to all *possibilities*, not to logical absurdities.",
        tags: ["logic", "omnipotence", "paradox", "philosophy"]
    },
    {
        id: "ethics-harsh",
        category: "Ethics",
        question: "Why does Islam have 'harsh' punishments?",
        answer: "Islamic Law (Hudud) is primarily a *deterrent*. The standard of evidence is so high (e.g., 4 eyewitnesses for adultery) that they are rarely applied. The goal is to show the gravity of the sin to protect society, not to seek revenge.",
        tags: ["sharia", "law", "punishment", "justice"]
    },
    {
        id: "social-hijab",
        category: "Social",
        question: "Why do women wear Hijab?",
        answer: "Hijab is not about oppression; it is about *agency* and *privacy*. In a world that commodifies women's bodies for consumption, Hijab forces society to value a woman for her mind and soul, not her physical appearance. It is an act of devotion to God, not men.",
        tags: ["women", "hijab", "feminism", "modesty"]
    },
    {
        id: "social-freedom",
        category: "Social",
        question: "Is Islam compatible with Freedom?",
        answer: "Islam defines Freedom differently than Liberalism. Liberalism says Freedom is 'doing what you want' (Slave to self). Islam says Freedom is 'doing what is right' (Slave to God). You are either a slave to your cravings or a slave to the Sustainer. Only the latter is true liberation.",
        tags: ["freedom", "liberalism", "liberty", "human rights"]
    },
    {
        id: "logic-quran",
        category: "Logic",
        question: "How do I know the Quran is from God?",
        answer: "The Quran offers the 'Falsification Test' (4:82): 'If it were from other than Allah, they would have found within it much contradiction.' It also challenges limits (2:23) to produce a chapter like it. Despite 1400 years of attempts, its linguistic and structural unity remains unbreakable.",
        tags: ["quran", "proof", "miracle", "prophet"]
    },
    {
        id: "theology-purpose",
        category: "Theology",
        question: "Why did God create us if He knows we might fail?",
        answer: "He created us for *Rahma* (Mercy). He gave us Free Will because love that is forced is not love. The risk of failure is the price of the dignity of being a free agent. He wants us to choose Him freely.",
        tags: ["purpose", "free will", "creation", "destiny"]
    },
    {
        id: "personal-connection",
        category: "Theology",
        question: "I feel disconnected from prayer. What do I do?",
        answer: "Iman (Faith) fluctuates. Don't rely on the 'feeling'; rely on the *discipline*. Prayer is an appointment with the King. You show up out of duty, and eventually, the love returns. Make Dua for 'Khushu' (Humility) and understand *what* you are saying.",
        tags: ["prayer", "spirituality", "connection", "worship"]
    }
];
