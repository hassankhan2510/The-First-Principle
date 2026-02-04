import styles from "./page.module.css";
import { Microscope, Bot, HeartCrack, ShoppingBag, Scale } from "lucide-react";

export default function AppliedPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>The Applied Lens</h1>
                <p className={styles.subtitle}>
                    Philosophy is useless if it stays in the classroom.
                    Here is how to use First Principles to deconstruct the headlines you see every day.
                </p>
            </header>

            <div className={styles.grid}>

                {/* 1. Feminism */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}>
                            <HeartCrack size={20} />
                        </div>
                        <h2 className={styles.cardTitle}>Feminism & The Family</h2>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.narrativeBox}>
                            "Gender is just a social construct. True freedom means total independence from family roles."
                        </div>
                        <span className={styles.deconstructionTitle}>The Deconstruction</span>
                        <div className={styles.point}>
                            <strong>Metaphysics (Fitra):</strong> It ignores biological reality. Men and Women are equal in value (Soul) but different in function (Body/Psychology). You cannot build a society on "Sameness."
                        </div>
                        <div className={styles.point}>
                            <strong>The Outcome:</strong> The Atomization of Society. When the Family unit breaks, the State becomes the "Father" and the Corporation becomes the "Husband."
                        </div>
                    </div>
                </div>

                {/* 2. AI */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}>
                            <Bot size={20} />
                        </div>
                        <h2 className={styles.cardTitle}>Artificial Intelligence</h2>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.narrativeBox}>
                            "We are building a conscious mind. God is not needed effectively to create a Soul."
                        </div>
                        <span className={styles.deconstructionTitle}>The Deconstruction</span>
                        <div className={styles.point}>
                            <strong>Epistemology (The Chinese Room):</strong> AI processes <em>Syntax</em> (0s and 1s) but creates no <em>Semantics</em> (Meaning). It has Information, but zero Knowledge.
                        </div>
                        <div className={styles.point}>
                            <strong>The Problem:</strong> The "Idolatry of Intellect." We confuse Calculation speed with Wisdom.
                        </div>
                    </div>
                </div>

                {/* 3. Liberalism */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}>
                            <Scale size={20} />
                        </div>
                        <h2 className={styles.cardTitle}>Liberalism (The Harm Principle)</h2>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.narrativeBox}>
                            "My body, my choice. I can do whatever I want as long as I don't physically hurt you."
                        </div>
                        <span className={styles.deconstructionTitle}>The Deconstruction</span>
                        <div className={styles.point}>
                            <strong>Ethics:</strong> It assumes the only "Harm" is physical. It ignores <em>Moral Harm</em>. If a society normalizes vice, the entire community rots (Crime, Broken Families, Depression).
                        </div>
                        <div className={styles.point}>
                            <strong>The Reality:</strong> Absolute Freedom is just slavery to Impulse (Hawa). True Freedom is discipline.
                        </div>
                    </div>
                </div>

                {/* 4. Consumerism */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}>
                            <ShoppingBag size={20} />
                        </div>
                        <h2 className={styles.cardTitle}>Consumerism</h2>
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.narrativeBox}>
                            "I shop, therefore I am. Happiness comes from acquiring the next upgrade."
                        </div>
                        <span className={styles.deconstructionTitle}>The Deconstruction</span>
                        <div className={styles.point}>
                            <strong>Psychology (The Hedonic Treadmill):</strong> The Soul (Ruh) is infinite; the world (Dunya) is finite. You cannot fill an infinite hole with finite things.
                        </div>
                        <div className={styles.point}>
                            <strong>The Cure:</strong> Zuhd (Detachment). Owning the world in your hand, not in your heart.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
