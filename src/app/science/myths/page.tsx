import styles from "./page.module.css";
import References from "@/components/ui/References";
import { FlaskConical, AlertOctagon, Trash2, Baby } from "lucide-react";

export default function MythsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Scientific Myths: Icons of Falsehood</h1>
                <p className={styles.subtitle}>
                    "A lie told often enough becomes the truth." — Lenin
                    <br />
                    Textbooks still teach experiments that were debunked 50 years ago. Why? Because they have no replacement.
                </p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <AlertOctagon className={styles.icon} />
                    1. The "Zombie Science" List
                </h2>
                <p className={styles.text}>
                    These are arguments that are dead scientifically, but kept alive in classrooms to indoctrinate students.
                </p>

                <div className={styles.mythGrid}>
                    <div className={styles.mythCard}>
                        <div className={styles.mythBadge}>Debunked</div>
                        <h3 className={styles.mythTitle}>Myth 1: The Miller-Urey Experiment (1953)</h3>
                        <p className={styles.truthContent}>
                            <strong>The Claim:</strong> They created "Life in a test tube" by sparking gases.
                            <br /><br />
                            <strong>The Truth:</strong>
                            <br />1. They used the wrong atmosphere (Hydrogen-rich). The early earth was Nitrogen/CO2 based.
                            <br />2. They created <em>Amino Acids</em> (building blocks), not Proteins. Finding a brick is not finding a Skyscraper.
                            <br />3. It created a "tar" that kills life.
                        </p>
                        <span className={styles.truthLabel}>Verdict: Chemistry ≠ Biology.</span>
                    </div>

                    <div className={styles.mythCard}>
                        <div className={styles.mythBadge}>Fraud</div>
                        <h3 className={styles.mythTitle}>Myth 2: Haeckel's Embryos</h3>
                        <p className={styles.truthContent}>
                            <strong>The Claim:</strong> Human embryos look like fish/lizards in the womb, proving ancestry.
                            <br /><br />
                            <strong>The Truth:</strong>
                            <br />Ernst Haeckel <em>faked the drawings</em> in 1874 to make them look similar. He was convicted of fraud by his own university.
                            <br />Yet, these drawings appeared in textbooks until the 2000s.
                        </p>
                        <span className={styles.truthLabel}>Verdict: Scientific Fraud.</span>
                    </div>

                    <div className={styles.mythCard}>
                        <div className={styles.mythBadge}>Refuted</div>
                        <h3 className={styles.mythTitle}>Myth 3: "Junk DNA"</h3>
                        <p className={styles.truthContent}>
                            <strong>The Claim:</strong> 98% of our DNA is useless "leftovers" from evolution.
                            <br /><br />
                            <strong>The Truth:</strong>
                            <br />The ENCODE Project (2012) proved that "Junk" DNA is actually the <strong>Operating System</strong> (Regulatory Switches) of the cell.
                            <br />It was an "Argument from Ignorance": We didn't know what it did, so we called it junk.
                        </p>
                        <span className={styles.truthLabel}>Verdict: Arrogance, not Science.</span>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <FlaskConical className={styles.icon} />
                    2. The Vestigial Organ Fallacy
                </h2>
                <p className={styles.text}>
                    They used to list 100+ "useless" organs (Appendix, Tonsils, Coccyx) as proof of evolution.
                    <br />
                    Today, we know the functions of almost all of them.
                    <br /><br />
                    <strong>The Appendix:</strong> A safehouse for good bacteria (Gut Flora).
                    <br />
                    <strong>The Tonsils:</strong> First line of defense for the immune system.
                </p>
                <div className={styles.logicBlock}>
                    <strong>The Pattern:</strong>
                    Every time Atheists claim "Bad Design" or "Useless Parts," Science eventually proves them wrong.
                    <strong>The flaw is in their knowledge, not in the Creation.</strong>
                </div>
            </section>

            <div style={{ marginTop: "4rem" }}>
                <References items={[
                    { title: "Icons of Evolution", author: "Dr. Jonathan Wells", note: "Systematically debunks Miller-Urey, Haeckel, and Peppered Moths." },
                    { title: "The Myth of Junk DNA", author: "Dr. Jonathan Wells", note: "How the ENCODE project destroyed the evolutionary assumption." },
                    { title: "Zombie Science", author: "Dr. Jonathan Wells", note: "Why dead theories refuse to die." }
                ]} />
            </div>
        </div>
    );
}
