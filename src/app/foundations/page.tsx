import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import JargonBuster from "@/components/ui/JargonBuster";
import References from "@/components/ui/References";
import ComparisonTable from "@/components/ui/ComparisonTable";
import { Brain, Map as MapIcon, ShieldCheck, Microscope } from "lucide-react";
import ModuleNavigation from "@/components/ui/ModuleNavigation";

export default function FoundationsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Foundations: How Humans Know Anything</h1>
                <p className={styles.subtitle}>
                    Before we argue about God, we must agree on the tools of argument.
                    If we cannot agree that 2+2=4 or that reality is real, we cannot have a conversation.
                    This is <strong>Epistemology</strong>.
                </p>
            </header>

            <ModuleNavigation />

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Brain className={styles.icon} />
                    1. The Three Sources of Knowledge
                </h2>
                <p className={styles.text}>
                    Modern secular thought often reduces knowledge to <em>only</em> what can be seen (Scientism).
                    Islamic philosophy posits a more robust, three-pillared system. All three are necessary for a complete worldview.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-4 font-merriweather">
                    <li>
                        <strong>1. Hiss (Sense Perception):</strong> The inputs of the five senses.
                        <div className="mt-2 text-sm text-muted-foreground">Reliable for: Physical reality (Heat, Color, Distance).</div>
                        <div className="mt-1 text-sm text-red-500">Limit: Cannot prove causality, morality, or logic itself.</div>
                    </li>
                    <li>
                        <strong>2. Aql (Reason/Intellect):</strong> The processor that interprets data. It includes Self-Evident Truths (e.g., "A whole is greater than its part").
                        <div className="mt-2 text-sm text-muted-foreground">Reliable for: Mathematical and logical deduction.</div>
                        <div className="mt-1 text-sm text-red-500">Limit: Cannot give you historical data or detailed law.</div>
                    </li>
                    <li>
                        <strong>3. Khabar (Testimony/Report):</strong> Knowledge transmitted from another.
                        <div className="mt-2 text-sm text-muted-foreground">Reliable for: History, Geography (you believe in Antarctica without seeing it), and Prophecy.</div>
                        <div className="mt-1 text-sm text-red-500">Limit: Requires verification of the source's integrity (Isnad).</div>
                    </li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Microscope className={styles.icon} />
                    2. The Attack: Deconstructing "Scientism"
                </h2>
                <p className={styles.text}>
                    The biggest intellectual blockage today is <JargonBuster term="Scientism" definition="The self-refuting belief that science is the ONLY valid path to truth." />.
                    It masquerades as "smartness" but is philosophically bankrupt.
                </p>

                <div className={styles.highlightBox}>
                    <h4 className={styles.highlightTitle}>The Self-Refuting Argument</h4>
                    <p className={styles.highlightText}>
                        If someone says: <strong>"I only believe what can be scientifically proven."</strong>
                        <br /><br />
                        Ask them: <strong>"Can you scientifically prove that statement?"</strong>
                        <br /><br />
                        You cannot put that statement in a test tube. It is a <em>philosophical</em> statement, not a scientific one.
                        Therefore, by its own standard, it is false.
                    </p>
                </div>

                <AssumptionToggle
                    statement="Science has explained away the need for God."
                    assumptions={[
                        "Confuses 'Mechanism' with 'Agency'. (Explaining how an engine works doesn't prove Ford doesn't exist).",
                        "The 'Problem of Induction': Science assumes the future will be like the past. You cannot prove this without circular reasoning. God provides the guarantee of order.",
                        "Science presupposes logic and math; it cannot explain their origins."
                    ]}
                    context="The Category Error:"
                />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <ShieldCheck className={styles.icon} />
                    3. The Attack: Deconstructing Post-Modernism
                </h2>
                <p className={styles.text}>
                    The other extreme is <strong>Subjectivism</strong> ("My truth vs Your truth").
                    This destroys the possibility of any knowledge at all.
                </p>

                <ComparisonTable
                    headers={["Objective Truth (Islam)", "Subjective Truth (Post-Modernism)"]}
                    data={[
                        {
                            rowTitle: "Reality",
                            values: ["Exists independently of us. We discover it.", "Constructed by us. We create it."]
                        },
                        {
                            rowTitle: "Fatal Flaw",
                            values: ["Requires humility to submit to evidence.", "Self-Refuting: claiming 'There is no absolute truth' IS an absolute truth statement."]
                        },
                        {
                            rowTitle: "Outcome",
                            values: ["Meaning, Purpose, Law.", "Chaos, Power struggles, Nihilism."]
                        }
                    ]}
                />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <MapIcon className={styles.icon} />
                    4. Evolutionary Debunking of Atheism
                </h2>
                <p className={styles.text}>
                    If our brains are merely the product of blind evolution tailored for <em>survival</em>, not <em>truth</em>, why should we trust our logic?
                    <br /><br />
                    Darwin himself worried: <em>"With me the horrid doubt always arises whether the convictions of man's mind... are of any value or at all trustworthy."</em>
                    <br /><br />
                    <strong>Theism provides the necessary foundation for trusting Reason itself:</strong> Our minds were designed by a Rational Agent to understand the Rational Universe.
                </p>

                <div style={{ marginTop: "4rem" }}>
                    <References items={[
                        { title: "Deliverance from Error (Al-Munqidh)", author: "Al-Ghazali", note: "The journey from skepticism to certainty." },
                        { title: "Where the Conflict Really Lies", author: "Alvin Plantinga", note: "The Evolutionary Argument Against Naturalism." },
                        { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn", note: "Science moves in paradigms, not just linear truth." }
                    ]} />
                </div>
            </section>

            <ModuleNavigation />
        </div>
    );
}
