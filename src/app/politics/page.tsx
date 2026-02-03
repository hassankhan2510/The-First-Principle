import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import ComparisonTable from "@/components/ui/ComparisonTable";
import References from "@/components/ui/References";
import { Scale, Users, Gavel, Crown, Globe } from "lucide-react";

export default function PoliticsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Political Philosophy: The Caliphate vs. Liberal Democracy</h1>
                <p className={styles.subtitle}>
                    "Democracy is the worst form of government, except for all the others." — Churchill
                    <br />
                    This implies humanity has never found a *good* system. Islam disagrees.
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Users className={styles.icon} />
                    1. The Myth of the "Social Contract"
                </h2>
                <p className={styles.text}>
                    Liberal Democracy is built on a fairy tale: The Social Contract (Rousseau, Locke).
                    The idea is that free individuals "agreed" to give up some rights to the State in exchange for protection.
                </p>
                <div className={styles.logicBlock}>
                    <strong>The First Principles Critique:</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li><strong>Consent is Fabricated:</strong> You never signed this contract. You were born into it. If you reject it, men with guns put you in a cage.</li>
                        <li><strong>The Tyranny of the 51%:</strong> In Democracy, if 51% of people vote to tax the 49% at 100%, it is "legal." There is no objective justice, only the will of the mob.</li>
                        <li><strong>Fluctuating Morality:</strong> In 2000, X was illegal. In 2020, X is a "Human Right." Laws follow trends, not Truth.</li>
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Crown className={styles.icon} />
                    2. Hakimiyya: Who is Sovereign?
                </h2>
                <p className={styles.text}>
                    The core difference between Islam and Secularism is <strong>Sovereignty</strong>.
                    In Secularism, Man makes the Law (Legislature). In Islam, God makes the Law (Shari'ah), and Man judges by it (Judiciary).
                </p>
                <h3 className={styles.modelTitle} style={{ textAlign: "center", fontSize: "1.2rem", marginBottom: "1rem" }}>Source of Law: God vs. Man</h3>
                <ComparisonTable
                    headers={["Liberal Democracy", "The Caliphate (Khilafah)"]}
                    data={[
                        { rowTitle: "Sovereign", values: ["The People (Demos)", "The Creator (Allah)"] },
                        { rowTitle: "Objective?", values: ["No (Changes every election)", "Yes (Fixed Principles)"] },
                        { rowTitle: "Purpose", values: ["Maximize Individual Liberty", "Establish Justice (Adl)"] },
                        { rowTitle: "Limit on Power", values: ["Constitution (can be amended)", "Shari'ah (Cannot be changed)"] }
                    ]}
                />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Gavel className={styles.icon} />
                    3. The Paradox of Tolerance
                </h2>
                <p className={styles.text}>
                    Liberalism claims to be "Neutral." It is not. It is a religion that tolerates everything *except* what contradicts Liberalism.
                </p>
                <AssumptionToggle
                    statement="We should just let people do what they want as long as it doesn't hurt others."
                    assumptions={[
                        "Who defines 'Hurt'? (Is polluting hurt? Is moral corruption hurt?)",
                        "This assumes the purpose of life is Hedonism (Pleasure).",
                        "It ignores Collective Harm: A society that normalizes vice collapses (see Rome, Weimar)."
                    ]}
                    context="The 'Harm Principle' Fallacy:"
                />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Globe className={styles.icon} />
                    4. The Islamic Solution: Adl (Justice)
                </h2>
                <p className={styles.text}>
                    The Caliphate is not a Theocracy (Priests ruling). It is a <strong>Nomocracy</strong> (Rule of Law).
                    The Caliph is not a King; he is an employee of the Ummah, hired to implement God's Law.
                </p>
                <div className={styles.modelGrid}>
                    <div className={styles.modelCard}>
                        <h4 className={styles.modelTitle}>Protection (Maqasid)</h4>
                        <p className={styles.attrDesc}>
                            The State exists *only* to protect 5 things:
                            <br />1. Religion (Deen)
                            <br />2. Life (Nafs)
                            <br />3. Intellect (Aql)
                            <br />4. Lineage/Family (Nasl)
                            <br />5. Property (Maal)
                        </p>
                    </div>
                    <div className={styles.modelCard}>
                        <h4 className={styles.modelTitle}>Accountability</h4>
                        <p className={styles.attrDesc}>
                            "There is no obedience to the created in disobedience to the Creator."
                            <br />
                            In Democracy, you can't sue the Parliament for making a "bad law."
                            In Islam, a grandmother can sue the Caliph if he violates the Shari'ah.
                        </p>
                    </div>
                </div>
            </section>

            <div style={{ marginTop: "4rem" }}>
                <References items={[
                    { title: "The Impossible State", author: "Wael Hallaq", note: "Academic critique of why the Modern State is incompatible with Shari'ah." },
                    { title: "Islam and the Destiny of Man", author: "Gai Eaton", note: "Contrasts secular freedom with spiritual submission." },
                    { title: "Milestones", author: "Sayyid Qutb", note: "On Hakimiyya and the Sovereignty of God." }
                ]} />
            </div>
        </div>
    );
}
