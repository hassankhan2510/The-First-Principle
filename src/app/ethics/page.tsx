import styles from "./page.module.css";
import ComparisonTable from "@/components/ui/ComparisonTable";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import References from "@/components/ui/References";
import { Scale, Heart, ShieldAlert, Gavel } from "lucide-react";

export default function EthicsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Ethics: The Source of Morality</h1>
                <p className={styles.subtitle}>
                    "If God does not exist, everything is permitted." — Dostoevsky
                    Without a transcendent anchor, "Human Rights" are just "Human Preferences."
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Gavel className={styles.icon} />
                    1. The Subjectivity Problem
                </h2>
                <p className={styles.text}>
                    If morality is just a "Social Contract" (what we agree on), then the Nazis weren't <em>wrong</em>; they just lost the war.
                    If they had won, their consensus would be the "Moral Truth" today.
                </p>
                <AssumptionToggle
                    statement="Morality is just 'Do no harm' and 'Be nice'."
                    assumptions={[
                        "Who defines 'Harm'? Is psychological harm included? Is spiritual harm included?",
                        "If morality is democratic, then slavery was 'Moral' in 1800 because the majority voted for it.",
                        "Without God, morality is just 'Fashion'. It changes every season."
                    ]}
                    context="The Relativist Trap:"
                />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Scale className={styles.icon} />
                    2. The Euthyphro Dilemma Solved
                </h2>
                <p className={styles.text}>
                    Plato's famous trap: "Is it good because God loves it, or does God love it because it is good?"
                </p>
                <div className={styles.logicBlock}>
                    <strong>The Islamic Answer (Divine Command):</strong>
                    <div className="mt-2">
                        It is a False Dichotomy.
                    </div>
                    <div className="mt-2 text-sm bg-slate-100 dark:bg-slate-800 p-2 rounded">
                        <strong>Option 3:</strong> God's Nature *IS* the Good.
                    </div>
                    <p className="mt-4">
                        He doesn't "invent" morality arbitrarily. And He doesn't "obey" an external moral law.
                        Honesty is good because God is Truth (Al-Haqq). Justice is good because God is Just (Al-Adl).
                        Morality is an expression of Fundamental Reality.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <ShieldAlert className={styles.icon} />
                    3. The Prevention Model (Sadd al-Dhara'i)
                </h2>
                <p className={styles.text}>
                    Liberal Ethics focuses on <strong>Punishing Outcomes</strong> (Theft, Assault).
                    Islamic Ethics focuses on <strong>Blocking Pathways</strong> (Interest, Intoxication, Immodesty).
                </p>

                <ComparisonTable
                    headers={["Liberal Ethics (Reactive)", "Islamic Ethics (Preventative)"]}
                    data={[
                        {
                            rowTitle: "Focus",
                            values: ["The Harm Principle (Wait until damage happens).", "Sadd al-Dhara'i (Block the road to damage)."]
                        },
                        {
                            rowTitle: "Alcohol Example",
                            values: ["Drink safely. Punish drunk drivers.", "Forbid the substance entirely to prevent the risk."]
                        },
                        {
                            rowTitle: "Sexual Ethics",
                            values: ["Consent is the only rule.", "Sanctity of Lineage and Family Structure."]
                        }
                    ]}
                />
            </section>

            <div style={{ marginTop: "4rem" }}>
                <References items={[
                    { title: "AFTER VIRTUE", author: "Alasdair MacIntyre", note: "Why modern ethics is incoherent." },
                    { title: "Refining the Characters", author: "Miskawayh", note: "Classical Islamic virtue ethics." },
                    { title: "The impossibility of Moral Obligation without God", author: "Elizabeth Anscombe", note: "Philosophical critique of secular duty." }
                ]} />
            </div>
        </div>
    );
}
