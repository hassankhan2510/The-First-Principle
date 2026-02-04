import Link from "next/link";
import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import { Brain, Scale, ShieldOff, Atom, Library, ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className="text-center mb-12">
          <h1 className={styles.title}>
            The First Principle
          </h1>
          <p className={styles.subtitle}>
            Teaches how to think, not what to chant.
          </p>
        </div>

        {/* PORTAL GRID (BENTO STYLE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">

          {/* 1. Philosophy Track (Featured - Larger) */}
          <Link href="/foundations" className="group relative col-span-1 md:col-span-2 lg:col-span-1 row-span-2 bg-gradient-to-br from-card to-secondary/10 border border-border rounded-3xl p-8 hover:border-primary transition-all hover:shadow-2xl overflow-hidden flex flex-col justify-between h-[400px]">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
              <Brain size={200} />
            </div>
            <div className="z-10">
              <div className="bg-primary/10 w-fit p-3 rounded-2xl mb-4">
                <Brain className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-black font-merriweather mb-2 text-foreground group-hover:text-primary transition-colors">Philosophy</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">
                The Core Curriculum. Build your certainty from the ground up.
              </p>
            </div>
            <div className="z-10 flex items-center text-sm font-bold uppercase tracking-widest text-primary mt-8">
              Start Here <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* 2. Science Suite */}
          <Link href="/science" className="group relative bg-card border border-border rounded-3xl p-8 hover:border-blue-500 transition-all hover:shadow-xl overflow-hidden h-[190px] flex flex-col justify-center">
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Atom size={120} />
            </div>
            <div className="z-10 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold font-merriweather mb-1 group-hover:text-blue-500 transition-colors">Science Suite</h3>
                <p className="text-xs text-muted-foreground font-medium">Quantum, Evolution, Cosmology.</p>
              </div>
              <Atom className="text-blue-500" size={28} />
            </div>
          </Link>

          {/* 3. The Living Library */}
          <Link href="/answers" className="group relative bg-card border border-border rounded-3xl p-8 hover:border-emerald-500 transition-all hover:shadow-xl overflow-hidden h-[190px] flex flex-col justify-center">
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Library size={120} />
            </div>
            <div className="z-10 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold font-merriweather mb-1 group-hover:text-emerald-500 transition-colors">The Library</h3>
                <p className="text-xs text-muted-foreground font-medium">Answers, History, & Applied Lens.</p>
              </div>
              <Library className="text-emerald-500" size={28} />
            </div>
          </Link>

          {/* 4. Future Module (Placeholder/Coming Soon) */}
          <div className="group relative bg-muted/30 border border-border/50 rounded-3xl p-8 overflow-hidden h-[190px] flex flex-col justify-center cursor-not-allowed">
            <div className="z-10 flex items-start justify-between opacity-50">
              <div>
                <h3 className="text-lg font-bold font-merriweather mb-1">Coming Soon</h3>
                <p className="text-xs text-muted-foreground font-medium">Politics & Economics</p>
              </div>
              <Sparkles className="text-muted-foreground" size={28} />
            </div>
          </div>

          {/* 5. Kids Mode (Placeholder/Coming Soon) */}
          <div className="group relative bg-muted/30 border border-border/50 rounded-3xl p-8 overflow-hidden h-[190px] flex flex-col justify-center cursor-not-allowed">
            <div className="z-10 flex items-start justify-between opacity-50">
              <div>
                <h3 className="text-lg font-bold font-merriweather mb-1">Kids Mode</h3>
                <p className="text-xs text-muted-foreground font-medium">Stories for Little Hearts</p>
              </div>
              <Sparkles className="text-muted-foreground" size={28} />
            </div>
          </div>

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
