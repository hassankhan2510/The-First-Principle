import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import References from "@/components/ui/References";
import { Dna, Fingerprint, Scissors, AlertTriangle, Code } from "lucide-react";

export default function BiologyPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Biology: The Information Problem</h1>
                <p className={styles.subtitle}>
                    "Biology is the study of complicated things that have the appearance of having been designed for a purpose." — Richard Dawkins (Atheist)
                    <br />
                    Why do they "appear" designed? Because they <strong>are</strong>.
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Code className={styles.icon} />
                    1. DNA is literally Code (Software)
                </h2>
                <p className={styles.text}>
                    Atheists confuse <strong>Chemistry</strong> (Ink) with <strong>Information</strong> (The Book).
                    The laws of physics can create a crystal (pattern), but they cannot create a Code (Language).
                </p>
                <div className={styles.logicBlock}>
                    <strong>The Microsoft Outlook Argument:</strong>
                    If you saw binary code for "Outlook.exe" written in sand, would you assume the waves wrote it?
                    <br /><br />
                    DNA is a 4-character digital code (A,C,T,G) that instructs the cell how to build proteins.
                    <strong>Information never arises from mindless matter.</strong> It always comes from a Mind.
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Scissors className={styles.icon} />
                    2. Debunking "Darwinism" (Macro-Evolution)
                </h2>
                <p className={styles.text}>
                    We must distinguish between scientific observation and philosophical storytelling.
                </p>
                <div className={styles.vsContainer}>
                    <div className={styles.vsCol} style={{ backgroundColor: "var(--muted)" }}>
                        <h4 className={styles.vsTitle}>Adaptation (Micro) - TRUE</h4>
                        <ul className={styles.vsList}>
                            <li>Observed in lab.</li>
                            <li>Bacteria developing resistance.</li>
                            <li>Beak sizes changing (Finches).</li>
                            <li><strong>Loss</strong> or shuffling of existing info.</li>
                        </ul>
                    </div>
                    <div className={styles.vsCol} style={{ backgroundColor: "var(--card)" }}>
                        <h4 className={styles.vsTitle}>Darwinism (Macro) - FALSE</h4>
                        <ul className={styles.vsList}>
                            <li>Never observed.</li>
                            <li>Fish turning into Philosophers.</li>
                            <li>Origin of NEW organs/plans.</li>
                            <li>Requires <strong>Generation</strong> of NEW info.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Fingerprint className={styles.icon} />
                    3. Homology: Common Ancestor or Common Designer?
                </h2>
                <p className={styles.text}>
                    Textbooks show the similar bone structure of a bat wing and human hand and say: "Proof of Ancestry!"
                </p>
                <AssumptionToggle
                    statement="Similarity proves we are all related to a rock 'soup' 4 billion years ago."
                    assumptions={[
                        "Alternative Explanation: Common Designer using a 'Design Template'.",
                        "If you see a Porsche and a VW Beetle share parts, do you assume the Porsche evolved from the Beetle? Or that the same Engineer built both?",
                        "Similarity is evidence of efficiency, not necessarily lineage."
                    ]}
                    context="The Homology Fallacy:"
                />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Dna className={styles.icon} />
                    4. The Mutation Problem
                </h2>
                <p className={styles.text}>
                    Darwinism relies on "Random Mutation" to build new features.
                    <br />
                    <strong>The Problem:</strong> Mutations are typos. 99.9% are harmful or neutral.
                    You cannot write the Encyclopedia Britannica by randomly hitting backspace on a keyboard for a billion years.
                    Time degrades information (Entropy); it does not create it.
                </p>
            </section>

            <div style={{ marginTop: "4rem" }}>
                <References items={[
                    { title: "Signature in the Cell", author: "Dr. Stephen Meyer", note: "Mathematical proof that DNA information cannot be random." },
                    { title: "Darwin's Doubt", author: "Dr. Stephen Meyer", note: "The Cambrian Explosion: Animals appeared suddenly, not gradually." },
                    { title: "Evolution: A Theory in Crisis", author: "Dr. Michael Denton", note: "Agnostic biologist dismantling the mechanism of selection." }
                ]} />
            </div>
        </div>
    );
}
