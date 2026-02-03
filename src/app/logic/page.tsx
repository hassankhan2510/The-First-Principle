import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import ComparisonTable from "@/components/ui/ComparisonTable";
import JargonBuster from "@/components/ui/JargonBuster";
import References from "@/components/ui/References";
import { GitBranch, Scale, AlertTriangle, Brain } from "lucide-react";

export default function LogicPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Logic & Argumentation</h1>
                <p className={styles.subtitle}>
                    To think is to judge. To judge requires a standard.
                    Logic is the immune system of the mind. Without it, you will accept any virus of thought.
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <GitBranch className={styles.icon} />
                    1. The Argument from Reason
                </h2>
                <p className={styles.text}>
                    Before we use logic, we must ask: <strong>Where do the Laws of Logic come from?</strong>
                    <br /><br />
                    If the universe is just atoms banging together (Materialism), then "thoughts" are just chemical fizz.
                    Chemicals are not "true" or "false"—they just <em>are</em>.
                    <br /><br />
                    <strong>The Atheist's Dilemma:</strong> To argue against God, you must use Logic. But Logic itself (immaterial, universal, invariant laws) cannot exist in a purely material universe.
                    The fact that we can debate proves the universe is more than just matter.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Brain className={styles.icon} />
                    2. The Two Engines: Deduction vs. Induction
                </h2>
                <p className={styles.text}>
                    We must sharpen our tools. Most valid Islamic theology relies on <JargonBuster term="Deduction" definition="Reasoning from general to specific. If premises are true, the conclusion MUST be true (e.g., All men die -> Socrates is a man -> Socrates will die)." />.
                    Most atheistic objections rely on bad <JargonBuster term="Induction" definition="Reasoning from specific observations to general rules. It yields probability, not certainty (e.g., 'All swans I've seen are white' doesn't prove black swans don't exist)." />.
                </p>

                <ComparisonTable
                    headers={["Deductive Reasoning ( Certainty )", "Inductive Reasoning ( Probability )"]}
                    data={[
                        {
                            rowTitle: "Mechanism",
                            values: ["Top-Down: Truth flows from Premise to Conclusion.", "Bottom-Up: Patterns observed imply a rule."]
                        },
                        {
                            rowTitle: "Strength",
                            values: ["Absolute. If premises are true, conclusion MUST be true.", "Probabilistic. The 'Black Swan' can always appear."]
                        },
                        {
                            rowTitle: "Role in Faith",
                            values: ["Proving God's existence (Logical Necessity).", "Science, Evolution, Historical Analysis."]
                        }
                    ]}
                />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <AlertTriangle className={styles.icon} />
                    3. Weaponized Fallacies (The Attack)
                </h2>
                <p className={styles.text}>
                    Modern discourse is riddled with these specific fallacies used to silence religious thought.
                </p>

                <AssumptionToggle
                    statement="Religion is just a coping mechanism / You believe because of geogaphy."
                    assumptions={[
                        "Genetic Fallacy: Thinking the ORIGIN of a belief affects its TRUTH.",
                        "If you were born in ancient Greece, you'd believe the earth is flat. Does that make the earth flat?",
                        "Psychologizing the opponent ('You're just scared') is an admission that you can't defeat their argument."
                    ]}
                    context="Fallacy 1: The Genetic Fallacy (Bulverism)"
                />

                <div style={{ height: "1.5rem" }} />

                <AssumptionToggle
                    statement="Who created God? If everything needs a creator, God does too."
                    assumptions={[
                        "Strawman Fallacy: Misrepresenting the argument.",
                        "We never said 'Everything needs a creator'. We said 'Everything that BEGINS to exist needs a creator'.",
                        "God, by definition, is Uncreated/Necessary. Asking 'Who created the Uncreated' is a contradiction like 'Square Circle'."
                    ]}
                    context="Fallacy 2: The Strawman"
                />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Scale className={styles.icon} />
                    4. Islamic Contribution: Qiyās (Analogy)
                </h2>
                <p className={styles.text}>
                    Islamic logic isn't just Greek copy-paste. It developed <JargonBuster term="Qiyās" definition="Analogical Deduction. Using a 'Root' case (Asl) to judge a new 'Branch' case (Far') based on a shared effective cause (Illah)." />, the bridge between Revelation and Novelty.
                    It allows the Quran to speak to AI, Bitcoin, and Gene Editing.
                </p>
                <div className={styles.logicBlock}>
                    <strong>The Legal Algorithm:</strong>
                    <div className="mt-2 text-sm bg-slate-100 dark:bg-slate-800 p-2 rounded">
                        <code>Target Case (Bitcoin) = Root Case (Gold/Currency) + Effective Cause (Value Storage)</code>
                    </div>
                    <p className="mt-4">
                        Without this logical machinery, religion would die. With it, it is timeless.
                    </p>
                </div>

                <div style={{ marginTop: "4rem" }}>
                    <References items={[
                        { title: "Miracles", author: "C.S. Lewis", note: "The classic Argument from Reason against Naturalism." },
                        { title: "A Rulebook for Arguments", author: "Anthony Weston", note: "Practical guide to constructing arguments." },
                        { title: "Al-Qistas Al-Mustaqim", author: "Al-Ghazali", note: "Application of logic to theology." }
                    ]} />
                </div>
            </section>
        </div>
    );
}
