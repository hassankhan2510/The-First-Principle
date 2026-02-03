import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import References from "@/components/ui/References";
import { Brain, Heart, AlertTriangle, Fingerprint, EyeOff, Search } from "lucide-react";

export default function PsychologyPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>The Psychology of Doubt (Tazkiyah)</h1>
                <p className={styles.subtitle}>
                    "Why do smart people believe stupid things?"
                    Philosophy treats doubt as a math problem. Often, it's a <strong>heart problem</strong>.
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Brain className={styles.icon} />
                    1. The Diagnosis: Intellect vs. Ego
                </h2>
                <p className={styles.text}>
                    We assume we are rational computers. We are not. We are "Lawyers."
                    <span className="block mt-2">
                        A lawyer doesn't search for the *truth*; they search for arguments to defend their client (The Ego).
                        If your heart hates a conclusion, your brain will find a reason to reject the evidence.
                    </span>
                </p>
                <div className={styles.logicBlock}>
                    <strong>The Insight of Al-Ghazali:</strong>
                    "The heart is the King, and the limbs (including the brain) are its troops."
                    If the King is corrupt (Arrogant), the troops will fight for corruption.
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <AlertTriangle className={styles.icon} />
                    2. The Two Roots of Doubt
                </h2>
                <p className={styles.text}>
                    Skepticism isn't always about "Logic". Often, it is a mask for two spiritual diseases.
                </p>

                <div className={styles.modelGrid}>
                    <div className={styles.modelCard}>
                        <h4 className={styles.modelTitle}>A. Kibr (Arrogance)</h4>
                        <p className={styles.attrDesc}>
                            "I am too smart to follow a 1400-year-old book."
                            <br /><br />
                            This is the doubt of the Academic. It feels intellectually superior to deconstruct everything. Submission feels like defeat.
                        </p>
                    </div>
                    <div className={styles.modelCard}>
                        <h4 className={styles.modelTitle}>B. Shahwa (Desire)</h4>
                        <p className={styles.attrDesc}>
                            "I want to be free."
                            <br /><br />
                            This is the doubt of the Libertine. If God exists, I have to stop staring at forbidden things / cheating / hoarding wealth.
                            It is easier to kill the Policeman (Belief) than to obey the Law.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <EyeOff className={styles.icon} />
                    3. The Veil of Scientism
                </h2>
                <p className={styles.text}>
                    One of the biggest psychological copes today is "Scientism" (The belief that Science is the *only* truth).
                </p>
                <AssumptionToggle
                    statement="I only believe what I can see."
                    assumptions={[
                        "Do you accept Dark Matter? You haven't seen it.",
                        "Do you accept Human Rights? They are invisible ideas.",
                        "This statement is often a cover for: 'I don't want to be accountable to an Unseen Authority'."
                    ]}
                    context="The Psychological Realization:"
                />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Heart className={styles.icon} />
                    4. The Cure: Knowledge + Humility
                </h2>
                <p className={styles.text}>
                    You cannot debate arrogance out of a person. You can only starve it.
                    True philosophy starts with <strong>Epistemic Humility</strong>: Admitting that my brain is a limited tool, not a god.
                </p>
            </section>

            <div style={{ marginTop: "4rem" }}>
                <References items={[
                    { title: "Deliverance from Error (Al-Munqidh)", author: "Al-Ghazali", note: "The autobiography of a skeptic who found certainty." },
                    { title: "Purification of the Heart", author: "Hamza Yusuf (Trans.)", note: "Diagnosing spiritual diseases." },
                    { title: "The Righteous Mind", author: "Jonathan Haidt", note: "Modern psychology confirms: Intuition comes first, reasoning comes second." }
                ]} />
            </div>
        </div>
    );
}
