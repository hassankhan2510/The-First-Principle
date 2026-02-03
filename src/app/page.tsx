import Link from "next/link";
import styles from "./page.module.css";
import AssumptionToggle from "@/components/ui/AssumptionToggle";
import KnowledgeMap from "@/components/ui/KnowledgeMap";
import { Brain, Scale, ShieldOff, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1 className={styles.title}>
          Teaches how to think,<br />not what to chant.
        </h1>
        <p className={styles.subtitle}>
          A structured, first-principles approach to Islamic Philosophy.
          <br />
          Navigate the intellectual map below to explore the connection between Reason, God, and Science.
        </p>

        <div style={{ marginTop: "3rem", marginBottom: "2rem" }}>
          <h3 className={styles.sectionTitle} style={{ marginBottom: "1rem" }}>The Curriculum Map</h3>
          <KnowledgeMap />
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
