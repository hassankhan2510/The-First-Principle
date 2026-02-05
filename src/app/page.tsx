import Link from "next/link";
import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import { Brain, Scale, ShieldOff, Atom, Library, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

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
          <div className={styles.versionTag}>
            v2.2: CSS Grid Fixed
          </div>
        </div>

        {/* PORTAL GRID (BENTO STYLE) */}
        <div className={styles.grid}>

          {/* 1. Philosophy Track (Featured) */}
          <Link href="/foundations" className={cn(styles.card, styles.cardFeatured)}>
            {/* Background Icon */}
            <Brain size={240} className={styles.iconBg} />

            <div className="z-10">
              <Brain size={48} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Philosophy</h3>
              <p className={styles.cardDesc}>
                The Core Curriculum. Build your certainty from the ground up.
              </p>
            </div>
            <div className={styles.cardAction}>
              Start Here <ArrowRight size={14} />
            </div>
          </Link>

          {/* 2. Science Suite */}
          <Link href="/science" className={cn(styles.card, styles.cardSecondary)}>
            {/* Background Icon (Optional, simplify for secondary) */}

            <div className="z-10">
              <Atom size={32} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>Science Suite</h3>
              <p className={styles.cardDesc}>Quantum, Evolution, Cosmology.</p>
            </div>
          </Link>

          {/* 3. The Living Library */}
          <Link href="/answers" className={cn(styles.card, styles.cardLibrary)}>
            <div className="z-10">
              <Library size={32} className={styles.cardIcon} />
              <h3 className={styles.cardTitle}>The Library</h3>
              <p className={styles.cardDesc}>Answers, History, & Applied Lens.</p>
            </div>
          </Link>

          {/* 4. Future Module */}
          <div className={styles.cardDisabled}>
            <div className="opacity-50">
              <Sparkles size={32} className={styles.cardIcon} />
              <h3 className="font-bold text-lg mb-1">Coming Soon</h3>
              <p className="text-xs text-muted-foreground">Politics & Economics</p>
            </div>
          </div>

          {/* 5. Kids Mode */}
          <div className={styles.cardDisabled}>
            <div className="opacity-50">
              <Sparkles size={32} className={styles.cardIcon} />
              <h3 className="font-bold text-lg mb-1">Kids Mode</h3>
              <p className="text-xs text-muted-foreground">Stories for Little Hearts</p>
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
