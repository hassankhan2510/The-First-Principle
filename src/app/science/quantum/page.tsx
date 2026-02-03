import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import References from "@/components/ui/References";
import { Atom, Eye, Zap, Ghost, Brain } from "lucide-react";

export default function QuantumPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Quantum Mechanics: The Death of Materialism</h1>
                <p className={styles.subtitle}>
                    "If you think you understand quantum mechanics, you don't understand quantum mechanics." — Feynman
                    <br />
                    But one thing is clear: The 19th-century idea of "Solid Matter" is dead.
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Eye className={styles.icon} />
                    1. The Observer Effect
                </h2>
                <p className={styles.text}>
                    The Double Slit Experiment proved something terrifying to Materialists:
                    Particles (matter) behave like Waves (probability) until they are <strong>Observed</strong>.
                </p>
                <div className={styles.logicBlock}>
                    <strong>The Implication:</strong>
                    Matter is not "fundamental." <strong>Information</strong> and <strong>Observation</strong> are fundamental.
                    You cannot have a universe without an Observer.
                    <br /><br />
                    <em>Materialism says: Consciousness comes from Matter.</em>
                    <br />
                    <em>Quantum Physics says: Matter comes from Consciousness (Observation).</em>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Ghost className={styles.icon} />
                    2. Rescuing Materialism?
                </h2>
                <p className={styles.text}>
                    Atheists try to save their worldview with the "Many Worlds Interpretation" (Multiverse again) specifically to avoid the need for an Observer.
                </p>
                <AssumptionToggle
                    statement="The moon is there even if no one looks at it. (Naive Realism)"
                    assumptions={[
                        "Quantum Mechanics says: No, it isn't. Not in a definite state.",
                        "It exists as a 'Probability Wave' until measurement collapsed the wave function.",
                        "This forces us to ask: Who observed the Universe at the Big Bang to make it 'Real'? (The Ultimate Observer)."
                    ]}
                    context="The Materialist Assumption:"
                />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Brain className={styles.icon} />
                    3. Max Planck's Admission
                </h2>
                <p className={styles.text}>
                    The father of Quantum Mechanics was not a Materialist. He knew what his discovery meant.
                </p>
                <div className={styles.quoteBox}>
                    "I regard consciousness as fundamental. I regard matter as derivative from consciousness. We cannot get behind consciousness. Everything that we talk about, everything that we regard as existing, postulates consciousness."
                    <span className={styles.quoteAuthor}>— Max Planck, Nobel Prize in Physics (1918)</span>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Zap className={styles.icon} />
                    4. The Islamic View: Al-Haqq (The Truth)
                </h2>
                <p className={styles.text}>
                    The universe is not "self-subsisting." It is constantly being sustained by the Will of Allah (<em>Qayyum</em>).
                    If He looked away, it would vanish.
                    <br /><br />
                    Islamic Occasionalism (Ash'ari theology) aligns perfectly with Quantum Indeterminacy. Atoms have no power; God creates the effect when the atom acts.
                </p>
            </section>

            <div style={{ marginTop: "4rem" }}>
                <References items={[
                    { title: "The Quantum Enigma", author: "Rosenblum & Kuttner", note: "Physics encounters Consciousness." },
                    { title: "Mind Before Matter", author: "Dr. Trinh Xuan Thuan", note: "Astrophysicist arguing against chance." },
                    { title: "Wholeness and the Implicate Order", author: "David Bohm", note: "The universe is a holographic projection." }
                ]} />
            </div>
        </div>
    );
}
