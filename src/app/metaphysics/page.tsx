import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import References from "@/components/ui/References";
import { Network, Box, Copy, Workflow } from "lucide-react";
import ModuleNavigation from "@/components/ui/ModuleNavigation";

export default function MetaphysicsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Metaphysics: The Nature of Reality</h1>
                <p className={styles.subtitle}>
                    Physics studies <em>moving</em> things. Metaphysics studies <em>existence</em> itself.
                    Before we ask "Does God exist?", we must ask "What does it mean to exist?"
                </p>
            </header>

            <ModuleNavigation />
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Box className={styles.icon} />
                    1. The Most Important Distinction: Essence vs. Existence
                </h2>
                <p className={styles.text}>
                    Ibn Sina (Avicenna) gave the world a "Software Update" in philosophy with this distinction.
                </p>

                <div className={styles.definitionBox}>
                    <h4 className={styles.defTitle}>The Phoenix Analogy</h4>
                    <p className={styles.defContent}>
                        You can imagine a Phoenix. You can describe its <strong>Essence</strong> (Golden feathers, rises from ash, immortal).
                    </p>
                    <p className={styles.defContent + " mt-4"}>
                        But describing it doesn't make it real. <strong>Existence</strong> is an external quality that must be "added" to the Essence.
                    </p>
                    <p className={styles.defContent + " mt-4"}>
                        Everything in the universe (You, Earth, Galaxy) has an Essence that <em>could</em> exist or <em>could not</em> exist.
                        Therefore, the universe is <strong>Contingent</strong> (Mumkin).
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Workflow className={styles.icon} />
                    2. The Argument from Contingency (Burhan al-Siddiqin)
                </h2>
                <p className={styles.text}>
                    If the universe is Contingent (it could have been different, or not existed at all), it needs a "Decider" (Murajjih) to tip the scales from Non-Existence to Existence.
                </p>
                <div className={styles.logicBlock}>
                    <strong>The Dependency Chain:</strong>
                    <div className="mt-2">1. You depend on your parents.</div>
                    <div className="mt-1">2. Parents depend on biology.</div>
                    <div className="mt-1">3. Biology depends on chemistry... on physics... on the Big Bang.</div>
                    <div className="mt-1">4. The Big Bang is a physical event. It is also contingent. What decided it?</div>
                    <div className="mt-4">
                        <strong>Conclusion:</strong> Use the "Domino Effect". An infinite chain of dominoes never falls unless a Hand pushes the first one.
                        That Hand must be <strong>Independent</strong> (Necessary Existence / Wajib al-Wujud).
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Copy className={styles.icon} />
                    3. The Attack: Destroying "Brute Fact" Naturalism
                </h2>
                <p className={styles.text}>
                    Atheists like Bertrand Russell argued: <em>"The universe is just there, and that's all."</em>
                    This is called the "Brute Fact" theory. It is the end of science.
                </p>

                <AssumptionToggle
                    statement="The universe doesn't need a reason. It's just a Brute Fact."
                    assumptions={[
                        "Violates the Principle of Sufficient Reason (PSR): The tool we use for science.",
                        "If the Universe (the biggest thing) has no reason, why should we look for reasons for anything else (gravity, cancer, atoms)?",
                        "It is an intellectual 'cop out'—giving up the search for explanation just to avoid God."
                    ]}
                    context="The Scientific Suicide:"
                />
            </section>

            <div style={{ marginTop: "4rem" }}>
                <References items={[
                    { title: "The Salvation (Al-Najat)", author: "Ibn Sina (Avicenna)", note: "Core text on contingency and existence." },
                    { title: "The Metaphysics of Mulla Sadra", author: "Ibrahim Kalin", note: "Introduction to Existentialism in Islamic thought." },
                    { title: "Metaphysics", author: "Aristotle", note: "The foundational definitions of potentiality and actuality." }
                ]} />
            </div>

            <ModuleNavigation />
        </div>
    );
}
