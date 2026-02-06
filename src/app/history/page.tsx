
import styles from "./page.module.css";
import { GraduationCap, BookOpen, Scroll, Flag, Quote, Lightbulb, Brain, Skull, CloudOff, Lock, Anchor, Dna } from "lucide-react";
import ModuleNavigation from "@/components/ui/ModuleNavigation";

export default function HistoryPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>The Genealogy of Confusion</h1>
                <p className="text-muted-foreground">
                    How did we get here? Trace the history of ideas from the split of Mind & Body to the death of Meaning.
                </p>
            </header>

            <ModuleNavigation />

            <div className={styles.grid}>
                {/* 1. Descartes */}
                <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                        <div className="flex items-center justify-between mb-2">
                            <span className={styles.year}>1641</span>
                            <Brain size={18} className="text-blue-500" />
                        </div>
                        <h3 className={styles.itemTitle}>René Descartes</h3>
                        <p className="text-sm"><strong>The Great Divorce (Cartesian Dualism)</strong>. <br />
                            Descartes wanted certainty, so he doubted everything except his own mind ("Cogito, ergo sum").
                            <br /><br />
                            <strong>The Error:</strong> He separated the knowing Mind from the physical World.
                            Before him, the world was a book of symbols (Signs/Ayat). After him, it became a machine of dead matter.</p>
                        <div className={styles.symptom}>
                            <strong>The Virus:</strong> Subjectivity. "Truth starts inside MY head," not outside in Reality.
                        </div>
                    </div>
                </div>

                {/* 2. Hume */}
                <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                        <div className="flex items-center justify-between mb-2">
                            <span className={styles.year}>1748</span>
                            <CloudOff size={18} className="text-gray-500" />
                        </div>
                        <h3 className={styles.itemTitle}>David Hume</h3>
                        <p className="text-sm"><strong>The Suicide of Reason</strong>. <br />
                            If we only know what we "sense," how do we know <strong>Causality</strong> (that Fire causes Heat)? We don't see "Cause," we only see "Event A then Event B."
                            <br /><br />
                            <strong>The Error:</strong> Radical Empiricism. Be rejecting Metaphysics, he destroyed the foundation of Science itself (Induction).</p>
                        <div className={styles.symptom}>
                            <strong>The Virus:</strong> Skepticism. "We can't really know anything for sure."
                        </div>
                        <div className="mt-4 text-center">
                            <a href="/epistemology" className="inline-flex items-center text-xs font-bold text-primary hover:underline">
                                See The Cure: Epistemology &rarr;
                            </a>
                        </div>
                    </div>
                </div>

                {/* 3. Kant */}
                <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                        <div className="flex items-center justify-between mb-2">
                            <span className={styles.year}>1781</span>
                            <Lock size={18} className="text-orange-500" />
                        </div>
                        <h3 className={styles.itemTitle}>Immanuel Kant</h3>
                        <p className="text-sm"><strong>The One-Way Mirror</strong>. <br />
                            Kant tried to save God from Hume's attacks. He split reality into two:
                            <br />1. <strong>Phenomenal:</strong> The world of Science/Senses (we can know this).
                            <br />2. <strong>Noumenal:</strong> The world of God/Things-in-themselves (we can NEVER know this).
                            <br /><br />
                            <strong>The Error:</strong> He locked God out of the rational mind.</p>
                        <div className={styles.symptom}>
                            <strong>The Virus:</strong> Secularism. "Faith is private feelings; Science is public facts."
                        </div>
                    </div>
                </div>

                {/* 4. Darwin (NEW) */}
                <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                        <div className="flex items-center justify-between mb-2">
                            <span className={styles.year}>1859</span>
                            <Dna size={18} className="text-green-600" />
                        </div>
                        <h3 className={styles.itemTitle}>Charles Darwin</h3>
                        <p className="text-sm"><strong>The Replacement Creator</strong>. <br />
                            With God locked out by Kant, nature needed a new designer. "Natural Selection" became the blind substitute for Divine Wisdom.
                            <br /><br />
                            <strong>The Error:</strong> Confusing Mechanism with Agency. Explaining *how* life adapts doesn't explain *why* life exists or *where* the information (DNA) came from.</p>
                        <div className={styles.symptom}>
                            <strong>The Virus:</strong> Naturalism. "Nature is all there is. We are just accidents."
                        </div>
                        <div className="mt-4 text-center">
                            <a href="/science/biology" className="inline-flex items-center text-xs font-bold text-red-500 hover:text-red-600 hover:underline">
                                See The Debunk: Biology &rarr;
                            </a>
                        </div>
                    </div>
                </div>

                {/* 5. Nietzsche */}
                <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                        <div className="flex items-center justify-between mb-2">
                            <span className={styles.year}>1882</span>
                            <Skull size={18} className="text-red-500" />
                        </div>
                        <h3 className={styles.itemTitle}>Friedrich Nietzsche</h3>
                        <p className="text-sm"><strong>The Honest Atheist</strong>. <br />
                            He saw the trap. If God is "dead" (irrelevant), then objective Morality, Truth, and Human Rights are dead too. They are just "shadows of God."
                            <br /><br />
                            <strong>The Insight:</strong> You cannot have Christian Morality without the Christian God.</p>
                        <div className={styles.symptom}>
                            <strong>The Symptom:</strong> Nihilism. "There are no facts, only interpretations."
                        </div>
                    </div>
                </div>

                {/* 6. Freud (NEW) */}
                <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                        <div className="flex items-center justify-between mb-2">
                            <span className={styles.year}>1900</span>
                            <Brain size={18} className="text-purple-500" />
                        </div>
                        <h3 className={styles.itemTitle}>Sigmund Freud</h3>
                        <p className="text-sm"><strong>The Death of the Soul</strong>. <br />
                            Since we are just animals (Darwin), our "morality" is just repressed sexual frustration. God is just a "Father Figure" projection.
                            <br /><br />
                            <strong>The Error:</strong> Reducing the complex Human Soul (Ruh) to simple animal instincts (Nafs).</p>
                        <div className={styles.symptom}>
                            <strong>The Virus:</strong> Psychologism. "Your beliefs are just coping mechanisms."
                        </div>
                    </div>
                </div>

                {/* 7. Post-Modernism (NEW) */}
                <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                        <div className="flex items-center justify-between mb-2">
                            <span className={styles.year}>1960s</span>
                            <CloudOff size={18} className="text-pink-500" />
                        </div>
                        <h3 className={styles.itemTitle}>Post-Modernism</h3>
                        <p className="text-sm"><strong>The End of Truth</strong>. <br />
                            Derrida, Foucault, and Rorty. Since there is no God, there is no "Capital T" Truth. There is only Power. Language is just a game to control people.
                            <br /><br />
                            <strong>The Error:</strong> Self-Refuting. Is the statement "There is no Truth" true? If yes, it's false.</p>
                        <div className={styles.symptom}>
                            <strong>The Virus:</strong> Relativism. "My Truth vs Your Truth."
                        </div>
                    </div>
                </div>

                {/* 8. The Solution */}
                <div className={styles.timelineItem}>
                    <div className={styles.timelineContent} style={{ borderColor: "var(--primary)", borderWidth: "2px" }}>
                        <div className="flex items-center justify-between mb-2">
                            <span className={styles.year} style={{ background: "var(--primary)", color: "white" }}>Today</span>
                            <Anchor size={18} className="text-emerald-500" />
                        </div>
                        <h3 className={styles.itemTitle}>The Return to Reason</h3>
                        <p className="text-sm"><strong>The First Principle</strong>. <br />
                            We step off the train of madness.
                            <br />1. <strong>We trust our Reason (Aql)</strong> because it is anchored in the Necessary Being.
                            <br />2. <strong>We trust Science</strong> as the study of God's Habits (Sunnah).
                            <br />3. <strong>We trust Revelation</strong> because it bypasses the limits of the finite mind.</p>
                        <div className={styles.cure}>
                            <strong>The Cure:</strong> La ilaha illa Allah. There is no god but Allah.
                        </div>
                    </div>
                </div>
            </div>

            <ModuleNavigation />
        </div>
    );
}
