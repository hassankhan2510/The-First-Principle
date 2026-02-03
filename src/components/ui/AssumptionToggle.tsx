"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react";
import styles from "./assumption-toggle.module.css";
import { cn } from "@/lib/utils";

interface AssumptionToggleProps {
    statement: string;
    assumptions: string[];
    context?: string;
    className?: string;
}

export default function AssumptionToggle({
    statement,
    assumptions,
    context,
    className,
}: AssumptionToggleProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn(styles.card, className)}>
            {context && (
                <p className="text-sm text-muted-foreground mb-2 font-inter">{context}</p>
            )}
            <div className={styles.statement}>
                {statement}
            </div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={styles.toggleButton}
                aria-expanded={isOpen}
            >
                {isOpen ? <EyeOff size={16} /> : <Eye size={16} />}
                {isOpen ? "Hide Assumptions" : "Reveal Assumptions"}
            </button>

            {isOpen && (
                <div className={styles.assumptionsContainer}>
                    <h4 className={styles.assumptionsTitle}>Hidden Assumptions</h4>
                    <ul className={styles.assumptionsList}>
                        {assumptions.map((assumption, index) => (
                            <li key={index} className={styles.assumptionItem}>
                                {assumption}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
