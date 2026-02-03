import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import References from "@/components/ui/References";
import { Microscope, HelpCircle, Lightbulb, Target, Settings, Globe } from "lucide-react";

export default function SciencePage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Science vs. Scientism</h1>
                <p className={styles.subtitle}>
                    Methodological Naturalism is a tool. Metaphysical Naturalism is a religion.
                    Confusing the two is the biggest mistake of the modern age.
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Settings className={styles.icon} />
                    1. Mechanism vs. Agency
                </h2>
                <p className={styles.text}>
                    To explain *how* a thing works does not explain *why* it exists or *who* made it.
                </p>
                <div className={styles.definitionBox}>
                    <h4 className={styles.defTitle}>The Factory Analogy</h4>
                    <p className={styles.defContent}>
                        Evolution is like a machine in a factory. It explains how raw materials become products (Species).
                        <span className="block mt-2 font-bold">But who built the factory?</span>
                        <span className="block mt-2">
                            Evolution presupposes a Universe, Laws of Physics, Time, and Stability.
                            Asking Evolution to explain Existence is like asking a toaster to explain electricity.
                        </span>
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Target className={styles.icon} />
                    2. The "God of the Gaps" Fallacy
                </h2>
                <p className={styles.text}>
                    Atheists say: "You only use God to explain what Science hasn't solved yet. As Science grows, God shrinks."
                </p>
                <AssumptionToggle
                    statement="God is just a placeholder for ignorance."
                    assumptions={[
                        "Assumes we believe in God to find 'missing links'.",
                        "We believe in God to explain the *Laws themselves*, not just the gaps.",
                        "Gravity is not a gap. It is a known law. Why does it exist? Why is it mathematical? *That* is the God question."
                    ]}
                    context="The Theistic Response:"
                />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Globe className={styles.icon} />
                    3. What Science Cannot Do
                </h2>
                <p className={styles.text}>
                    Science is powerful because it is limited. It studies the Physical. It cannot ground its own foundations.
                </p>
                <div className={styles.logicBlock}>
                    <div className="mb-4">
                        <strong>1. Mathematics:</strong> Science uses math, but cannot *prove* math. 2+2=4 is not an experiment.
                    </div>
                    <div className="mb-4">
                        <strong>2. Logic:</strong> You cannot put "The Law of Non-Contradiction" under a microscope. It is assumed <em>A Priori</em>.
                    </div>
                    <div>
                        <strong>3. Morality:</strong> Science can tell you how to kill a man (biology/physics). It cannot tell you if you *should*.
                    </div>
                </div>
                <p className="mt-4 text-center italic text-slate-500">
                    "Science describes the stage. Religion explains the play."
                </p>
            </section>

            <div style={{ marginTop: "4rem" }}>
                <References items={[
                    { title: "Where the Conflict Really Lies", author: "Alvin Plantinga", note: "Evolution vs Naturalism." },
                    { title: "The Territories of Science and Religion", author: "Peter Harrison", note: "History of the 'Warfare' thesis." },
                    { title: "The Book of Animals", author: "Al-Jahiz", note: "Early Islamic theories of natural selection." }
                ]} />
            </div>
        </div>
    );
}
