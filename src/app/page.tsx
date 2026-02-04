import Link from "next/link";
import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import { Brain, Scale, ShieldOff, Atom, Library, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>
          Teaches how to think,<br />not what to chant.
        </h1>
        <p className={styles.subtitle}>
          The Intellectual Hub for the Modern Muslim.
          <br />
          Choose your path below to begin the deconstruction.
        </p>

        {/* DOMAIN HUB SELECTOR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">

          {/* 1. Philosophy Track */}
          <Link href="/foundations" className="group block p-8 bg-card border border-border rounded-xl hover:border-primary transition-all hover:shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Brain size={100} />
            </div>
            <div className="relative z-10">
              <Brain className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-black font-merriweather mb-2 group-hover:text-primary transition-colors">Philosophy Track</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Master the core First Principles. From Epistemology (How we know) to Theology (Who God is).
              </p>
              <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center">
                Start Curriculum <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* 2. Science Suite */}
          <Link href="/science" className="group block p-8 bg-card border border-border rounded-xl hover:border-blue-500 transition-all hover:shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Atom size={100} />
            </div>
            <div className="relative z-10">
              <Atom className="text-blue-500 mb-4" size={40} />
              <h3 className="text-2xl font-black font-merriweather mb-2 group-hover:text-blue-500 transition-colors">Science Suite</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Reconcile Faith with Reason. Deep dives into Quantum Mechanics, Evolution, and Fine-Tuning.
              </p>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500 flex items-center">
                Explore Science <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* 3. The Living Library */}
          <Link href="/answers" className="group block p-8 bg-card border border-border rounded-xl hover:border-emerald-500 transition-all hover:shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Library size={100} />
            </div>
            <div className="relative z-10">
              <Library className="text-emerald-500 mb-4" size={40} />
              <h3 className="text-2xl font-black font-merriweather mb-2 group-hover:text-emerald-500 transition-colors">Living Library</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                The Answer Bank, History of Ideas, and Applied Lens. Practical tools for modern doubts.
              </p>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 flex items-center">
                Enter Library <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

        </div>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Rules of Engagement</h2>
        <div className={styles.rulesGrid}>
          <div className={styles.ruleCard}>
            <div className={styles.ruleIconWrapper}>
              <ShieldOff size={28} />
            </div>
            <h3 className={styles.ruleTitle}>No Preaching</h3>
            <p className={styles.ruleDesc}>We analyze the logic of belief. We do not demand blind submission.</p>
          </div>
          <div className={styles.ruleCard}>
            <div className={styles.ruleIconWrapper}>
              <Brain size={28} />
            </div>
            <h3 className={styles.ruleTitle}>Arguments &gt; Conclusions</h3>
            <p className={styles.ruleDesc}>A true conclusion built on a weak premise is still a weak argument.</p>
          </div>
          <div className={styles.ruleCard}>
            <div className={styles.ruleIconWrapper}>
              <Scale size={28} />
            </div>
            <h3 className={styles.ruleTitle}>Intellectual Honesty</h3>
            <p className={styles.ruleDesc}>We address the strongest counter-arguments, not strawman fallacies.</p>
          </div>
        </div>
      </section>

      <div style={{ marginTop: "4rem" }}>
        <AssumptionToggle
          statement="Most people inherit their beliefs without ever questioning their foundations."
          assumptions={[
            "Beliefs are often socially approximated rather than intellectually constructed.",
            "Questioning foundations is necessary for true conviction (Yaqeen).",
            "Stability of faith requires knowing 'why' not just 'what'."
          ]}
          context="Example of how we analyze statements:"
        />
      </div>
    </div>
  );
}
