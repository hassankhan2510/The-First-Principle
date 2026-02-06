"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowLeft, BookOpen } from "lucide-react";
import styles from "./module-navigation.module.css";

const CURRICULUM = [
    { path: "/foundations", label: "Foundations" },
    { path: "/logic", label: "Logic" },
    { path: "/epistemology", label: "Epistemology" },
    { path: "/metaphysics", label: "Metaphysics" },
    { path: "/god", label: "The Creator" },
    { path: "/science", label: "Science Suite" },
    { path: "/ethics", label: "Ethics" },
    { path: "/applied", label: "Applied Lens" },
    { path: "/history", label: "History" },
];

export default function ModuleNavigation() {
    const pathname = usePathname();
    const currentIndex = CURRICULUM.findIndex(item => item.path === pathname);

    if (currentIndex === -1) return null; // Not a curriculum page

    const prev = currentIndex > 0 ? CURRICULUM[currentIndex - 1] : null;
    const next = currentIndex < CURRICULUM.length - 1 ? CURRICULUM[currentIndex + 1] : null;

    return (
        <div className={styles.container}>
            {prev ? (
                <Link href={prev.path} className={styles.navButton}>
                    <ArrowLeft size={16} />
                    <span className={styles.label}>
                        <span className={styles.subtext}>Previous</span>
                        {prev.label}
                    </span>
                </Link>
            ) : (
                <div className={styles.spacer} />
            )}

            {/* Middle - Mobile only mainly, or just decoration */}
            <div className={styles.indicator}>
                <BookOpen size={20} className="text-gray-500" />
                <span className="text-xs text-gray-500 uppercase tracking-widest hidden md:block">
                    Module {currentIndex + 1} of {CURRICULUM.length}
                </span>
            </div>

            {next ? (
                <Link href={next.path} className={`${styles.navButton} ${styles.next}`}>
                    <span className={styles.label}>
                        <span className={styles.subtext}>Next</span>
                        {next.label}
                    </span>
                    <ArrowRight size={16} />
                </Link>
            ) : (
                <div className={styles.spacer} />
            )}
        </div>
    );
}
