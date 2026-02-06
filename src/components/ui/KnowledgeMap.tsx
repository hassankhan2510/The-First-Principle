"use client";

import Link from "next/link";
import styles from "./knowledge-map.module.css";
import { Brain, Search, Atom, Scale, ArrowRight } from "lucide-react";

export default function KnowledgeMap() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>The Knowledge Path</h2>
                <p className={styles.subtitle}>Start from the root, not the branches.</p>
            </div>

            <div className={styles.map}>
                {/* SVG Lines Connector */}
                <svg className={styles.connector} viewBox="0 0 800 200" preserveAspectRatio="none">
                    {/* Path from Logic to Epistemology */}
                    <path d="M 100 100 L 300 100" className={styles.pathLine} />
                    {/* Path from Epistemology to God */}
                    <path d="M 300 100 L 500 100" className={styles.pathLine} />
                    {/* Path from God to Science */}
                    <path d="M 500 100 L 700 100" className={styles.pathLine} />
                </svg>

                {/* Nodes */}
                <div className={styles.nodes}>

                    {/* Level 1: Logic */}
                    <Link href="/logic" className={styles.nodeWrapper}>
                        <div className={styles.node}>
                            <Scale size={24} />
                        </div>
                        <span className={styles.label}>1. Logic</span>
                    </Link>

                    {/* Level 2: Epistemology */}
                    <Link href="/foundations" className={styles.nodeWrapper}>
                        <div className={styles.node}>
                            <Brain size={24} />
                        </div>
                        <span className={styles.label}>2. Epistemology</span>
                    </Link>

                    {/* Level 3: The Creator */}
                    <Link href="/god" className={styles.nodeWrapper}>
                        <div className={styles.node}>
                            <Search size={24} />
                        </div>
                        <span className={styles.label}>3. The Creator</span>
                    </Link>

                    {/* Level 4: Reality (Science) */}
                    <Link href="/science" className={styles.nodeWrapper}>
                        <div className={styles.node}>
                            <Atom size={24} />
                        </div>
                        <span className={styles.label}>4. Reality</span>
                    </Link>

                </div>
            </div>
        </div>
    );
}
