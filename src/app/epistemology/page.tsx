import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import ComparisonTable from "@/components/ui/ComparisonTable";
import JargonBuster from "@/components/ui/JargonBuster";
import References from "@/components/ui/References";
import { BookOpen, Microscope, Brain, Scale, Eye, Globe } from "lucide-react";

export default function EpistemologyPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Epistemology: The Architecture of Truth</h1>
                <p className={styles.subtitle}>
                    Imagine a person determined to measure weight with a ruler. They slide it across a stone and declare it "weightless" because the ruler shows nothing.
                    The problem isn't the stone. It's the wrong tool.
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Scale className={styles.icon} />
                    1. The Hierarchy of Truth
                </h2>
                <p className={styles.text}>
                    Islamic epistemology doesn't reject science; it gives it a specific address.
                    Truth is accessed through three distinct tools, each valid for a specific job.
                </p>

                <div className={styles.epistemologyGrid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}><Eye size={20} /> 1. Hiss (Senses)</h3>
                        <p className={styles.cardText}>
                            **Tool:** <JargonBuster term="Hiss" definition="Sense perception. The five senses (sight, hearing, etc.) used to observe the physical world." /> (Observation).
                            <span className="block mt-2">**Domain:** The Physical World (Fire burns, Planets orbit).</span>
                            <span className="block mt-1 text-red-400">**Limit:** Cannot tell you if Justice is good, or if Numbers exist.</span>
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}><Brain size={20} /> 2. Aql (Reason)</h3>
                        <p className={styles.cardText}>
                            **Tool:** <JargonBuster term="Aql" definition="The Intellect/Reason. The faculty that processes data and understands abstract concepts (Mathematics, Logic)." /> (Deduction).
                            <span className="block mt-2">**Domain:** Self-Evident Truths (The whole &gt; the part).</span>
                            <span className="block mt-1 text-red-400">**Limit:** Science *presupposes* Reason. You assume logic to do science.</span>
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}><BookOpen size={20} /> 3. Khabar (Report)</h3>
                        <p className={styles.cardText}>
                            **Tool:** <JargonBuster term="Mutawatir" definition="Mass-Transmitted Report. A report conveyed by so many people at every stage that collusion on a lie is impossible." /> (Verification).
                            <span className="block mt-2">**Domain:** History & The Unseen (God, Afterlife).</span>
                            <span className="block mt-1 text-red-400">**Limit:** You know your parents are your parents only by Report, not Science.</span>
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Globe className={styles.icon} />
                    2. The Critique of Scientism
                </h2>
                <p className={styles.text}>
                    Scientism is the claim that <em>"Only scientifically verifiable statements are true."</em>
                    This claim destroys itself immediately.
                </p>

                <AssumptionToggle
                    statement="Only science leads to truth."
                    assumptions={[
                        "The Self-Refuting Paradox: Can you prove scientifically that 'only science is true'? No. It's a philosophical claim, not a scientific one.",
                        "Science cannot prove its own foundations: Logic, Math, and the reliability of Induction cannot be put in a test tube. They are assumed *A Priori*.",
                        "It confuses Mechanism with Meaning. Knowing *how* ink adheres to paper doesn't explain *what* the poem means."
                    ]}
                    context="The Scientism Paradox:"
                />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Microscope className={styles.icon} />
                    3. The Verification Crisis
                </h2>
                <p className={styles.text}>
                    If we accept Report (Khabar), how do we avoid blind gullibility?
                    Islamic Civilization built the most rigorous historical filter in human history: <strong>The Isnad (Chain of Transmission)</strong>.
                </p>

                <div className={styles.logicBlock}>
                    <strong>The Algorithmic Safety Checks:</strong>
                    <div className="mt-2 text-sm bg-slate-100 dark:bg-slate-800 p-2 rounded">
                        1. <strong>Continuity:</strong> Is the chain unbroken from source to receiver?
                    </div>
                    <div className="mt-1 text-sm bg-slate-100 dark:bg-slate-800 p-2 rounded">
                        2. <strong>Integrity (Adala):</strong> Is the reporter famously truthful? One lie disqualifies them forever.
                    </div>
                    <div className="mt-1 text-sm bg-slate-100 dark:bg-slate-800 p-2 rounded">
                        3. <strong>Corroboration:</strong> Do other independent chains report the same thing?
                    </div>
                    <p className="mt-4">
                        To reject a Mutawatir (Mass-Transmitted) report because you didn't "see it" is not rational skepticism; it is selective amnesia.
                        You accept "Napoleon existed" on far less evidence.
                    </p>
                </div>
            </section>

            <div style={{ marginTop: "4rem" }}>
                <References items={[
                    { title: "The Decisive Treatise", author: "Ibn Rushd", note: "On the harmony of Wisdom and Law." },
                    { title: "Deliverance from Error", author: "Al-Ghazali", note: "An intellectual autobiography." },
                    { title: "The Book of Healing", author: "Ibn Sina", note: "The synthesis of Aristotelian logic and faith." }
                ]} />
            </div>
        </div>
    );
}
