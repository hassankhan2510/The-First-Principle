import Link from "next/link";
import styles from "./page.module.css";
import { Scale, Users, HeartCrack, Brain, ArrowRight, Anchor } from "lucide-react";

export default function LiberalismPage() {
    return (
        <div className={styles.container}>
            {/* HERO */}
            <header className={styles.hero}>
                <h1 className={styles.title}>The Mirage of Freedom</h1>
                <p className={styles.subtitle}>
                    Liberalism promises absolute liberty, but delivers absolute chaos.
                    <br />
                    When the "Self" becomes God, society collapses.
                </p>
            </header>

            {/* 1. THE ROOT ERROR (EPISTEMOLOGY CONNECTION) */}
            <section className={styles.section}>
                <div className="bg-red-950/20 border border-red-900/50 p-8 rounded-3xl mb-12">
                    <h2 className="text-3xl font-bold font-merriweather text-red-500 mb-4 flex items-center gap-3">
                        <Brain /> The Root Error: Epistemological Failure
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Before analyzing the damage, we must understand the <strong>source code</strong>.
                        Liberalism is based on a fatal epistemological flaw: <strong>Subjectivism</strong>.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-black/40 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-2">The Islamic Epistemology</h3>
                            <p className="text-gray-400">
                                Truth is <strong>Objective</strong> and comes from the Creator (Wahi/Revelation).
                                Human rights are "Endowed by God", meaning no human can take them away.
                            </p>
                        </div>
                        <div className="bg-black/40 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold text-red-400 mb-2">The Liberal Epistemology</h3>
                            <p className="text-gray-400">
                                Truth is <strong>Subjective</strong> and comes from the "Self" (Feelings/Desires).
                                If truth is subjective, then "Human Rights" are just opinions that can change tomorrow.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <Link href="/foundations" className="text-red-400 hover:text-red-300 font-bold inline-flex items-center underline">
                            Review Epistemology Module <ArrowRight size={16} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. THE DAMAGE REPORT (STATS) */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>The Damage Report</h2>
                <div className={styles.grid}>
                    {/* Family Collapse */}
                    <div className={styles.card}>
                        <Users className="text-red-500 mb-4" size={40} />
                        <h3 className={styles.cardTitle}>The Death of Family</h3>
                        <span className={styles.stat}>40%+</span>
                        <p className={styles.cardText}>
                            Of children in hyper-liberal nations are born out of wedlock.
                            The "Nuclear Family" is viewed as oppressive, yet every statistic proves
                            fatherless homes lead to higher crime, poverty, and drug use.
                        </p>
                    </div>

                    {/* Mental Health */}
                    <div className={styles.card}>
                        <HeartCrack className="text-red-500 mb-4" size={40} />
                        <h3 className={styles.cardTitle}>The Meaning Void</h3>
                        <span className={styles.stat}>#1</span>
                        <p className={styles.cardText}>
                            Secular, liberal countries consistently rank highest in antidepressant usage.
                            When you remove God, you remove <strong>Purpose</strong>.
                            Freedom to "do whatever you want" leads to the paralysis of meaninglessness.
                        </p>
                    </div>

                    {/* Paradox of Freedom */}
                    <div className={styles.card}>
                        <Scale className="text-red-500 mb-4" size={40} />
                        <h3 className={styles.cardTitle}>The Paradox of Choice</h3>
                        <span className={styles.stat}>∞</span>
                        <p className={styles.cardText}>
                            Unlimited options create anxiety, not happiness.
                            Liberalism tells you to "Define your own truth", placing the infinite weight
                            of the universe on your finite shoulders. Islam lifts that burden.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. LOGIC: FREEDOM VS RESTRICTION */}
            <section className={styles.section}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold font-merriweather mb-8">The "Freedom" Fallacy</h2>
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <Anchor className="mx-auto text-blue-400 mb-6" size={64} />
                        <p className="text-2xl font-light leading-normal mb-8">
                            "A train is only free when it is bound to the tracks.
                            If it becomes 'free' of the tracks, it is no longer free to move—it is a wreck."
                        </p>
                        <p className="text-gray-400">
                            True freedom is functioning exactly as you were designed to function.
                            Submitting to the Designer (Islam) is the only way to be truly free from the
                            slavery of societal expectations and carnal desires.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}
