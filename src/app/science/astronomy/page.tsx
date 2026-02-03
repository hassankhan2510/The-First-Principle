import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import References from "@/components/ui/References";
import { Globe, Gauge, Infinity, AlertTriangle, Target } from "lucide-react";

export default function AstronomyPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Astronomy: The Fine-Tuned Universe</h1>
                <p className={styles.subtitle}>
                    "The universe is not just 'big'. It is impeccably, impossibly precise."
                    <br />
                    Real Science shows that if the laws of physics were different by 0.000000001%, you wouldn't be here.
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Target className={styles.icon} />
                    1. The Goldilocks Enigma
                </h2>
                <p className={styles.text}>
                    Imagine a machine with 50 dials (Gravity, Expansion Rate, Nuclear Force, etc.).
                    Each dial must be set to a *precise* number for life to exist.
                    If you turn any dial just ONE click left or right, the universe collapses or freezes.
                </p>
                <div className={styles.logicBlock}>
                    <strong>The Rate of Expansion:</strong>
                    "If the expansion rate of the universe was different by one part in 10^55, the universe would have collapsed back on itself."
                    <br /><br />
                    <strong>The Odds:</strong> It is like throwing a dart across the universe and hitting a single atom.
                    Is this "Chance"? Or is it "Design"?
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Infinity className={styles.icon} />
                    2. The Atheist Escape: "The Multiverse"
                </h2>
                <p className={styles.text}>
                    When faced with these odds, Atheists panic. They cannot say "God did it."
                    So they invented the <strong>Multiverse</strong>.
                </p>
                <AssumptionToggle
                    statement="If there are infinite universes, one of them HAD to be right. We are just the lucky ones."
                    assumptions={[
                        "You have zero proof. (Have you seen another universe?)",
                        "This is not Science. It is Science Fiction.",
                        "It is the 'Gambler's Fallacy'. (If I win the lottery 50 times in a row, you assume I cheated, not that I played infinite games).",
                        "This is a 'Cope'. They invented an infinity of invisible universes just to avoid One Creator."
                    ]}
                    context="The Multiverse Assumption:"
                />
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Gauge className={styles.icon} />
                    3. The Cosmological Constant (Dark Energy)
                </h2>
                <p className={styles.text}>
                    The energy density of space is fine-tuned to 1 part in 10^120.
                    That is a 1 followed by 120 zeros.
                    <span className="block mt-2 font-bold text-red-600">
                        There are not even that many atoms in the universe.
                    </span>
                    To say this happened by "Accident" is an insult to intellect.
                </p>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Globe className={styles.icon} />
                    4. The Quranic Perspective
                </h2>
                <p className={styles.text}>
                    1400 years ago, before telescopes, the Quran challenged us to look for flaws.
                </p>
                <div className={styles.definitionBox}>
                    <h4 className={styles.defTitle}>"No Flaws in the Creation"</h4>
                    <p className={styles.defContent}>
                        "He who created the seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency. So return your vision to the sky, do you see any breaks?"
                        <br />
                        <span className="text-sm text-slate-500 block mt-2">(Quran 67:3)</span>
                        <br />
                        The universe is "Muzan" (Balanced). It is not chaotic debris. It is a structured Palace.
                    </p>
                </div>
            </section>

            <div style={{ marginTop: "4rem" }}>
                <References items={[
                    { title: "Just Six Numbers", author: "Martin Rees", note: "The Astronomer Royal admits the universe is tuned by 6 deep numbers." },
                    { title: "There Is a God", author: "Antony Flew", note: "The world's most famous atheist became a theist because of Fine-Tuning." },
                    { title: "The Cosmic Coincidence", author: "John Gribbin", note: "How the constants of nature are set for life." }
                ]} />
            </div>
        </div>
    );
}
