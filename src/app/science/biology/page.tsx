import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import References from "@/components/ui/References";
import { Dna, Fingerprint, Scissors, AlertTriangle, Code, Calculator, Timer, Layers, Microscope } from "lucide-react";

export default function BiologyPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Biology: The Death of Darwinism</h1>
                <p className={styles.subtitle}>
                    "If it could be demonstrated that any complex organ existed which could not possibly have been formed by numerous, successive, slight modifications, my theory would absolutely break down." — Charles Darwin
                </p>
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500 rounded-lg inline-block text-red-400 font-bold">
                    Spoiler: It broke down.
                </div>
            </header>

            {/* 1. The Mathematical Problem */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Calculator className={styles.icon} />
                    1. The Mathematical Impossibility
                </h2>
                <div className={styles.logicBlock}>
                    <p className="mb-4">
                        Neo-Darwinism claims that <strong>Random Mutation + Natural Selection</strong> created all life.
                        Math says: <strong>Impossible.</strong>
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-card p-6 rounded-lg border border-border">
                            <h4 className="text-xl font-bold mb-2 text-primary flex items-center gap-2">
                                <Timer size={20} /> The Waiting Time Problem
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                To get just <strong>2 specific coordinated mutations</strong> (e.g., to create a simple new binding site) in a fruit fly population takes <strong>100 Million Years</strong>.
                            </p>
                            <p className="mt-4 text-xs font-mono bg-muted p-2 rounded">
                                Source: Behe & Snoke (2004), Sanford (2008).
                                <br />Evolution is too slow to produce complex life in 4.5 billion years.
                            </p>
                        </div>
                        <div className="bg-card p-6 rounded-lg border border-border">
                            <h4 className="text-xl font-bold mb-2 text-primary flex items-center gap-2">
                                <Layers size={20} /> The Probability Limit
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                The chance of forming <strong>ONE functional protein</strong> (150 amino acids) by chance is <strong>1 in 10⁷⁷</strong>.
                            </p>
                            <p className="mt-4 text-xs font-mono bg-muted p-2 rounded">
                                Atoms in the galaxy: 10⁶⁶.
                                <br />There are not enough atoms or seconds in the universe to get even <em>one</em> protein by luck.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. The Fossil Problem */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Fingerprint className={styles.icon} />
                    2. The Fossil Fail: The Cambrian Explosion
                </h2>
                <p className={styles.text}>
                    Darwin predicted a "Tree of Life" — starting with one simple organism and slowly branching out.
                    The Fossil Record shows a <strong>Big Bang</strong>.
                </p>
                <AssumptionToggle
                    statement="The fossil record shows slow, gradual change over billions of years."
                    assumptions={[
                        "Fact: 530 Million Years Ago, nearly ALL major animal body plans (Phyla) appeared suddenly.",
                        "No ancestors. No transitions. Just 'POOF' -> Complex Animals (with eyes, guts, spinal cords).",
                        "Darwin knew this. He called it 'fatal' to his theory. He hoped we'd find the missing links. 150 years later... we still haven't."
                    ]}
                    context="Reality Check (The Cambrian Explosion):"
                />
            </section>

            {/* 3. The Mechanics Problem */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Microscope className={styles.icon} />
                    3. Irreducible Complexity (The Mouse Trap)
                </h2>
                <p className={styles.text}>
                    Neo-Darwinism works by "slight, successive modifications." You build a car by adding one bolt at a time, and <em>every version must drive</em>.
                </p>
                <div className="mt-6 border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">
                    <h3 className="text-lg font-bold">Exhibit A: The Bacterial Flagellum</h3>
                    <p className="mt-2 text-sm italic text-muted-foreground">
                        A biological rotary motor. 100,000 RPM. Reverses in 1/4 turn. Water-cooled.
                    </p>
                    <ul className="mt-4 space-y-2 list-disc pl-5">
                        <li>It has <strong>40 structural parts</strong> (Rotor, Stator, Drive Shaft, U-Joint).</li>
                        <li>If you remove <strong>ONE part</strong>, it doesn't spin 50% slower. <strong>It stops completely.</strong></li>
                        <li><strong>Conclusion:</strong> It could not have evolved step-by-step. All 40 parts had to be there at once. That is <strong>Design</strong>.</li>
                    </ul>
                </div>
            </section>

            {/* 4. The Information Problem */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>
                    <Code className={styles.icon} />
                    4. The DNA Code (The Fatal Blow)
                </h2>
                <p className={styles.text}>
                    The most devastating argument against Materialism is Information.
                </p>
                <div className={styles.vsContainer}>
                    <div className={styles.vsCol} style={{ backgroundColor: "var(--muted)" }}>
                        <h4 className={styles.vsTitle}>Matter (Hardware)</h4>
                        <ul className={styles.vsList}>
                            <li>Ink on Paper.</li>
                            <li>Silicon in a Chip.</li>
                            <li>Chemicals in DNA (Sugar, Phosphate).</li>
                            <li><strong>Follows Physics.</strong></li>
                        </ul>
                    </div>
                    <div className={styles.vsCol} style={{ backgroundColor: "var(--card)" }}>
                        <h4 className={styles.vsTitle}>Information (Software)</h4>
                        <ul className={styles.vsList}>
                            <li>The Words "I Love You".</li>
                            <li>The Windows 11 OS.</li>
                            <li>The Instructions to build an Eye.</li>
                            <li><strong>Follows Syntax/Meaning.</strong></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6 text-center italic font-serif text-lg text-muted-foreground">
                    "Information is entirely independent of the medium. <br />You cannot explain a book by studying the chemistry of the ink."
                </div>
            </section>

            <div style={{ marginTop: "4rem" }}>
                <References items={[
                    { title: "Darwin's Doubt", author: "Dr. Stephen Meyer", note: "The definitive book on the Cambrian Explosion." },
                    { title: "Genetic Entropy", author: "Dr. John Sanford", note: "Cornell Geneticist proves genomes degrade over time; they don't improve." },
                    { title: "The Edge of Evolution", author: "Dr. Michael Behe", note: "Defining the mathematical limits of random mutation." },
                    { title: "Evolution: A Theory in Crisis (3rd Ed)", author: "Dr. Michael Denton", note: "Why the scientific elite are secretly moving on from Darwin." }
                ]} />
            </div>
        </div>
    );
}
