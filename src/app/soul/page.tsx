import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import References from "@/components/ui/References";
import { Brain, User, Fingerprint, Lock, ShieldCheck } from "lucide-react";

export default function SoulPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>The Soul & Consciousness (The "Hard Problem")</h1>
                <p className={styles.subtitle}>
                    We proved God exists. But what are YOU?
                    If you are just a "bag of chemicals," then you have no rights, no dignity, and no self.
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Brain className={styles.icon} />
                    1. The Problem: Materialism
                </h2>
                <p className={styles.text}>
                    Atheistic Materialism claims: "You are your brain."
                    Everything you feel is just neurons firing. Love is dopamine. Sadness is low serotonin.
                    There is no "You" inside the machine.
                </p>
                <div className={styles.logicBlock}>
                    <strong>The Consequence:</strong>
                    <div className="mt-2">
                        If you are just atoms, then <strong>Human Rights are a fiction</strong>.
                        We don't give rights to computers or rocks. If you are just a "meat computer," why do you have dignity?
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Lock className={styles.icon} />
                    2. The Defense: The "Hard Problem of Consciousness"
                </h2>
                <p className={styles.text}>
                    Neuroscience can explain how the brain processes data (Soft Problem).
                    It fails completely to explain <strong>Qualia</strong> (The "Feeling" of experience).
                </p>
                <AssumptionToggle
                    statement="Science will explain consciousness eventually."
                    assumptions={[
                        "The Gap is Metaphysical, not Scientific.",
                        "Matter has Mass, Spin, Charge. It does not have 'Sadness' or 'Redness'.",
                        "You can describe a sunset to a blind neuroscientist perfectly. He still doesn't know what it *looks* like.",
                        "The 'Experience' (Subjective) cannot be reduced to the 'Mechanism' (Objective)."
                    ]}
                    context="The Mary's Room Argument:"
                />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <User className={styles.icon} />
                    3. The Islamic View: The Ruh (Soul)
                </h2>
                <p className={styles.text}>
                    Islam posits the <strong>Ruh</strong> (Spirit) as an immaterial reality.
                </p>
                <div className={styles.definitionBox}>
                    <h4 className={styles.defTitle}>The Driver & The Car Analogy</h4>
                    <p className={styles.defContent}>
                        <strong>The Body/Brain</strong> is the Car. It has hardware, wiring, and fuel (Biology).
                        <span className="block mt-2">
                            <strong>The Soul</strong> is the Driver. It is the "I" that decides where to go.
                        </span>
                        <span className="block mt-4 font-bold">
                            If the car breaks (Brain Damage), the Driver cannot drive.
                            But that doesn't mean the Driver doesn't exist. It just means the interface is broken.
                        </span>
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <ShieldCheck className={styles.icon} />
                    4. Why This Matters
                </h2>
                <p className={styles.text}>
                    Without the Soul, we are just biological accidents. The strong eat the weak.
                    With the Soul, we are Sacred beings with eternal worth.
                </p>
                <div className={styles.logicBlock}>
                    "And I breathed into him of My Spirit." (Quran 15:29)
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        This is the only anchor for Human Rights that cannot be voted away.
                    </div>
                </div>
            </section>

            <div style={{ marginTop: "4rem" }}>
                <References items={[
                    { title: "The Conscious Mind", author: "David Chalmers", note: "The atheist philosopher who coined the 'Hard Problem'." },
                    { title: "The Soul's Long Journey", author: "Mulla Sadra", note: "Islamic metaphysics of the self." },
                    { title: "Alchemy of Happiness", author: "Al-Ghazali", note: "Knowing yourself is the key to knowing God." }
                ]} />
            </div>
        </div>
    );
}
