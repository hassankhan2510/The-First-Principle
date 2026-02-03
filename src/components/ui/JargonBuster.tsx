"use client";

import { useState } from "react";
import styles from "./jargon-buster.module.css";
import { cn } from "@/lib/utils";

interface JargonBusterProps {
    term: string;
    definition: string;
}

export default function JargonBuster({ term, definition }: JargonBusterProps) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <span
            className={styles.container}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <span className={styles.term}>{term}</span>
            <div className={cn(styles.tooltip, isVisible && styles.visible)}>
                <p className={styles.definition}>{definition}</p>
            </div>
        </span>
    );
}
