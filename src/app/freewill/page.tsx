import styles from "../page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import ComparisonTable from "@/components/ui/ComparisonTable";
import References from "@/components/ui/References";
import { Network, GitBranch, Zap, Brain } from "lucide-react";

export default function FreeWillPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Free Will & Predestination (Qadar)</h1>
                <p className={styles.subtitle}>
                    "If God knows I will sin, why am I guilty?"
                    This is the classic paradox. The answer lies in distinguishing <strong>Knowledge</strong> from <strong>Force</strong>.
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Brain className={styles.icon} />
                    1. Knowledge ≠ Causation
                </h2>
                <p className={styles.text}>
                    Does knowing the future make it happen? No. God is outside of Time.
                </p>
                <div className={styles.definitionBox}>
                    <h4 className={styles.defTitle}>The Teacher Analogy</h4>
                    <div className={styles.defContent}>
                        <p>
                            A teacher knows a lazy student will fail. She predicts it perfectly.
                            <br />
                            When the student fails, did the teacher *force* him?
                        </p>
                        <p className="mt-4 font-bold">
                            No. Knowledge followed the reality; it didn't create the reality.
                        </p>
                        <p className="mt-2">
                            God knows what you will choose because you *will* choose it. He doesn't make you choose it because He knows it.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Zap className={styles.icon} />
                    2. The Theory of Kasb (Acquisition)
                </h2>
                <p className={styles.text}>
                    Ash'ari and Maturidi theology solved this with the "Acquisition" model.
                    We are not Creators of our actions; we are Choosers.
                </p>

                <div className={styles.logicBlock}>
                    <strong>The Electrician & The Switch:</strong>
                    <div className="mt-4">
                        1. <strong>God (The Power Plant):</strong> Supplies the energy/capacity to act. You cannot create energy.
                    </div>
                    <div className="mt-2">
                        2. <strong>You (The Switch):</strong> You choose the direction (On/Off).
                    </div>
                    <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-800 rounded border-l-4 border-blue-500">
                        <strong>The Formula:</strong> God creates the *Action* (Walking, Talking) corresponding to your *Choice*.
                        You "Acquire" (Kasb) the moral responsibility by flipping the switch.
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <GitBranch className={styles.icon} />
                    3. Responsibility vs. Outcome
                </h2>
                <p className={styles.text}>
                    Why is judgment just? Because Judgment tracks <strong>Intention</strong>, not Outcome.
                </p>

                <ComparisonTable
                    headers={["Scenario A", "Scenario B"]}
                    data={[
                        {
                            rowTitle: "Intention",
                            values: ["Intends to steal money.", "Intends to steal money."]
                        },
                        {
                            rowTitle: "Outcome",
                            values: ["Succeeds and steals $1000.", "Fails (Police arrive). Steals $0."]
                        },
                        {
                            rowTitle: "Moral Status",
                            values: ["Guilty of Theft.", "Guilty of Theft (Intention)."]
                        }
                    ]}
                />
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                    God judges the "Choice in the Heart". The external result is up to Him. You are the captain of the ship's wheel, even if the ocean currents (Qadar) move the ship.
                </p>
            </section>

            <div style={{ marginTop: "4rem" }}>
                <References items={[
                    { title: "Creed of Imam Tahawi", author: "Imam Tahawi", note: "The standard Sunni position on Qadar." },
                    { title: "Al-Iqtisad fi al-I'tiqad", author: "Al-Ghazali", note: "The Golden Mean between Fatalism and Autonomy." },
                    { title: "Kitab al-Tawhid", author: "Imam Maturidi", note: "On the wisdom of God's decree." }
                ]} />
            </div>
        </div>
    );
}
