import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import ComparisonTable from "@/components/ui/ComparisonTable";
import JargonBuster from "@/components/ui/JargonBuster";
import References from "@/components/ui/References";
import { Sparkles, ArrowRight, Layers, HelpCircle, Network } from "lucide-react";

export default function GodPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>God in Islamic Philosophy (Ilāhiyyāt)</h1>
                <p className={styles.subtitle}>
                    We do not start with "The Quran says God exists." We start with "Reality requires an explanation."
                    The <strong>Argument from Contingency</strong> (Burhan al-Siddiqin) relies on existence itself, not just the motion of atoms.
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <ArrowRight className={styles.icon} />
                    1. Essence vs. Existence (The Phoenix)
                </h2>
                <p className={styles.text}>
                    Imagine a <strong>Phoenix</strong>. You can describe its Essence (Golden feathers, rises from ash). But it doesn't exist.
                    Now imagine a <strong>Real Bird</strong>. Its Essence doesn't guarantee its existence either—it needs parents, food, and air.
                    <br /><br />
                    Everything in the universe (You, Earth, Gravity) is like the Bird. It is <JargonBuster term="Contingent (Mumkin)" definition="A thing that could exist or not exist. It requires an external cause to tip the scale to existence." />.
                </p>

                <ComparisonTable
                    headers={["The Phoenix (Mental Concept)", "The Real Bird (Contingent Being)"]}
                    data={[
                        { rowTitle: "Essence (What it is)", values: ["Golden feathers, burns, rises.", "Feathers, beak, flies."] },
                        { rowTitle: "Existence (Is it real?)", values: ["No. Existence is NOT part of its definition.", "Yes. But it RECEIVED existence from outside."] },
                        { rowTitle: "Verdict", values: ["Purely Imaginary.", "Dependent on a Cause."] }
                    ]}
                />

                <div className={styles.logicBlock} style={{ marginTop: "2rem" }}>
                    <strong>The Conclusion:</strong>
                    If the universe is Contingent (it could have been different), it needs a Cause that is <strong>Necessary</strong>.
                    This Cause must have existence as part of its own Essence.
                    This is what we call the <JargonBuster term="Wajib al-Wujud" definition="The Necessary Being. The One whose existence is not borrowed from another, but is self-sustaining." />.
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Layers className={styles.icon} />
                    2. The Infinite Regress (The Dominoes)
                </h2>
                <p className={styles.text}>
                    "Who created God?" is the wrong question. It assumes God is a Domino.
                </p>
                <div className={styles.argumentBox}>
                    <div className={styles.premise}>
                        <span className={styles.premiseNum}>P1.</span>
                        <span>Imagine an infinite line of soldiers. Soldier A needs permission from B... B from C... C from D.</span>
                    </div>
                    <div className={styles.premise}>
                        <span className={styles.premiseNum}>P2.</span>
                        <span>If the line is infinite, does the command ever get given? No.</span>
                    </div>
                    <div className={styles.premise}>
                        <span className={styles.premiseNum}>P3.</span>
                        <span>Yet, here we are. The command *was* given. Existence is happening.</span>
                    </div>
                    <div className={styles.conclusion}>
                        Conclusion: There must be a Commander who does not need permission. A <strong>Necessary Being</strong> (Wajib al-Wujud).
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Sparkles className={styles.icon} />
                    3. Deducing the Attributes
                </h2>
                <p className={styles.text}>
                    We don't need scripture yet. Logic alone gives us the profile of the Necessary Being.
                </p>

                <div className={styles.attributeGrid}>
                    <div className={styles.attributeCard}>
                        <h4 className={styles.attrTitle}>Eternal</h4>
                        <p className={styles.attrDesc}>If It had a beginning, It would need a cause. That would make It contingent. Thus, It must be Beginningless.</p>
                    </div>
                    <div className={styles.attributeCard}>
                        <h4 className={styles.attrTitle}>One (Tawhid)</h4>
                        <p className={styles.attrDesc}>If there were two, they would differ. The difference would be a "part". Parts require assembly. Assembly requires a Builder. Thus, It must be One.</p>
                    </div>
                    <div className={styles.attributeCard}>
                        <h4 className={styles.attrTitle}>Non-Physical</h4>
                        <p className={styles.attrDesc}>Physical things have parts (atoms). Parts depend on each other. The Necessary Being cannot depend on anything.</p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <HelpCircle className={styles.icon} />
                    4. Why God ≠ The Flying Spaghetti Monster
                </h2>
                <p className={styles.text}>
                    The favorite parody of internet atheism. Why can't the Necessary Being be a Spaghetti Monster?
                </p>
                <AssumptionToggle
                    statement="Why can't the First Cause be a Flying Spaghetti Monster?"
                    assumptions={[
                        "FSM is made of Spaghetti (Parts). Anything with parts is Contingent (depends on parts).",
                        "FSM has a shape (limited). Why that shape and not another? That requires a chooser.",
                        "God is not a 'Big Object' in the sky. God is the Metaphysical Ground of all Being.",
                        "Comparing God to FSM is a Category Error: It confuses 'A Weird Contingent Thing' with 'The Necessary Existence'."
                    ]}
                    context="The Parody Failure:"
                />
            </section>

            <div style={{ marginTop: "4rem" }}>
                <References items={[
                    { title: "The Salvation (Al-Najat)", author: "Ibn Sina", note: "The Burhan al-Siddiqin in its original form." },
                    { title: "Summa Theologica", author: "Thomas Aquinas", note: "Western adoption of the Contingency argument." },
                    { title: "The Incoherence of the Incoherence", author: "Ibn Rushd", note: "Defending the philosophical necessity of God." }
                ]} />
            </div>
        </div>
    );
}
