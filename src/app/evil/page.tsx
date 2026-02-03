import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import ComparisonTable from "@/components/ui/ComparisonTable";
import References from "@/components/ui/References";
import { ShieldAlert, Microscope, Scale, Heart, Eye } from "lucide-react";

export default function EvilPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>The Problem of Evil (Theodicy)</h1>
                <p className={styles.subtitle}>
                    "If God is Good, wwhy is there so much pain?"
                    This is not just a philosophical riddle; it is the cry of the human heart.
                    An honest theology must respect the pain while refusing incoherent reasoning.
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <ShieldAlert className={styles.icon} />
                    1. The Logical vs. Evidential Problem
                </h2>
                <p className={styles.text}>
                    The <strong>Logical Problem</strong> (God is impossible because Evil exists) has largely failed in philosophy (thanks to Alvin Plantinga).
                    The real challenge is the <strong>Evidential Problem</strong>: "Given the *amount* of suffering, God is unlikely."
                </p>
                <div className={styles.logicBlock}>
                    <strong>The Core Assumption:</strong>
                    <div className="mt-2">
                        The evidential argument assumes: <em>"The purpose of life is maximum pleasure and minimum pain."</em>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Heart className={styles.icon} />
                    2. The Hedonistic Fallacy
                </h2>
                <p className={styles.text}>
                    If the goal of life were pleasure, then anesthesia would be the highest good. But we admire those who endure, not those who merely consume.
                </p>
                <AssumptionToggle
                    statement="If God loved us, He wouldn't let us suffer."
                    assumptions={[
                        "Assumes 'Love' means 'Pampering'. A surgeon cuts you to save you. Is that hate?",
                        "Assumes this life is the Destination (Paradise). Islam says this life is the Exam Room (Ibtila).",
                        "Pain is the medium where virtues become real. Courage needs Danger. Patience needs Hardship."
                    ]}
                    context="The Definition of 'Good':"
                />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Scale className={styles.icon} />
                    3. The Free Will Defense
                </h2>
                <p className={styles.text}>
                    A world with the <em>possibility</em> of evil is morally richer than a world of programmed robots.
                </p>
                <div className={styles.logicBlock}>
                    <div className="mb-4">
                        <strong>Moral Goodness requires Choice.</strong> A robot that feeds the poor has no virtue.
                    </div>
                    <div className="mb-4">
                        <strong>Choice entails Risk.</strong> If I am free to love, I must be free to hate.
                    </div>
                    <div>
                        <strong>Conclusion:</strong> To remove all suffering, God would have to remove all Freedom. That would create a painless world, but also a meaningless one.
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Eye className={styles.icon} />
                    4. The Painting Analogy (Perspective)
                </h2>
                <p className={styles.text}>
                    Imagine standing inches away from a massive painting. All you see is a dark, ugly black pixel.
                    You conclude: "The artist is incompetent."
                </p>
                <div className={styles.definitionBox}>
                    <h4 className={styles.defTitle}>The Epistemic Gap</h4>
                    <p className={styles.defContent}>
                        We see the pixel (The Event). God sees the Canvas (The Context).
                        <span className="block mt-2">
                            What looks like "pointless evil" locally may be "essential contrast" globally.
                            Shadows define the light. Without the dark background, the foreground has no shape.
                        </span>
                    </p>
                </div>
            </section>

            <div style={{ marginTop: "4rem" }}>
                <References items={[
                    { title: "God, Freedom, and Evil", author: "Alvin Plantinga", note: "The definitive philosophical response to the Logical Problem." },
                    { title: "Ihya Ulum al-Din (Book of Patience)", author: "Al-Ghazali", note: "The spiritual purpose of suffering." },
                    { title: "The Problem of Evil", author: "Yaqeen Institute", note: "Modern Islamic synthesis." }
                ]} />
            </div>
        </div>
    );
}
