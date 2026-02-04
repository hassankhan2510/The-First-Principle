import styles from "./page.module.css";
import { History, Brain, Skull, CloudOff, Lock, Anchor } from "lucide-react";

export default function HistoryPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>The Genealogy of Confusion</h1>
                <p className="text-muted-foreground">
                    How did we get here? Trace the history of ideas from the split of Mind & Body to the death of Meaning.
                </p>
            </header>

            <div className={styles.timeline}>
                {/* 1. Descartes */}
                <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                        <div className="flex items-center justify-between mb-2">
                            <span className={styles.year}>1641</span>
                            <Brain size={18} className="text-blue-500" />
                        </div>
                        <h3 className={styles.itemTitle}>René Descartes</h3>
                        <p className="text-sm"><strong>The Split (Cartesian Dualism)</strong>. He separated the Mind (Thinking) from the Body (Matter). He tried to prove God using <em>only</em> math, bypassing the world.</p>
                        <div className={styles.symptom}>
                            <strong>The Virus:</strong> "I think, therefore I am." (Subjectivity begins).
                        </div>
                        <div className={styles.cure}>
                            <strong>The Cure:</strong> Islam integrates the Inner (Batin) and Outer (Zahir). The world is an Sign (Ayah) of God, not just a machine.
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
                        <p className="text-sm"><strong>The Skepticism</strong>. He denied Causality. He said we only see "Event A then Event B," not the <em>connection</em> between them.</p>
                        <div className={styles.symptom}>
                            <strong>The Virus:</strong> "Miracles are impossible because they break the laws of nature." (Scientism begins).
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
                        <p className="text-sm"><strong>The Wall</strong>. He tried to save faith but ended up isolating it. He said we can know the <em>Phenomenal</em> (Science) but never the <em>Noumenal</em> (God/Reality).</p>
                        <div className={styles.symptom}>
                            <strong>The Virus:</strong> "Faith is private/irrational. Science is public/fact." (Secularism begins).
                        </div>
                    </div>
                </div>

                {/* 4. Nietzsche */}
                <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                        <div className="flex items-center justify-between mb-2">
                            <span className={styles.year}>1882</span>
                            <Skull size={18} className="text-red-500" />
                        </div>
                        <h3 className={styles.itemTitle}>Friedrich Nietzsche</h3>
                        <p className="text-sm"><strong>The Crash</strong>. He saw where this was going. If Reason is just biology and God is "dead" (irrelevant), then Truth is dead too.</p>
                        <div className={styles.symptom}>
                            <strong>The Symptom:</strong> Nihilism. "There are no facts, only interpretations."
                        </div>
                    </div>
                </div>

                {/* 5. The Solution */}
                <div className={styles.timelineItem}>
                    <div className={styles.timelineContent} style={{ borderColor: "var(--primary)", borderWidth: "2px" }}>
                        <div className="flex items-center justify-between mb-2">
                            <span className={styles.year} style={{ background: "var(--primary)", color: "white" }}>Today</span>
                            <Anchor size={18} className="text-emerald-500" />
                        </div>
                        <h3 className={styles.itemTitle}>The Return to Reason</h3>
                        <p className="text-sm"><strong>The First Principle</strong>. We restore the definition of Knowledge. Science is a tool, Reason is the judge, Revelation is the light.</p>
                        <div className={styles.cure}>
                            <strong>The Solution:</strong> Reconnect the Mind to Reality. Reconnect Reality to God.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
