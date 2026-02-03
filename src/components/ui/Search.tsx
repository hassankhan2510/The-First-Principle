"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { Search as SearchIcon, X } from "lucide-react";
import styles from "./search.module.css";
import { searchIndex } from "@/lib/searchIndex";

export default function Search() {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const results = useMemo(() => {
        if (!query) return [];
        const lowerQuery = query.toLowerCase();

        return searchIndex.filter((item) => {
            const titleMatch = item.title.toLowerCase().includes(lowerQuery);
            const descMatch = item.description.toLowerCase().includes(lowerQuery);
            const keywordMatch = item.keywords.some(k => k.toLowerCase().includes(lowerQuery));
            return titleMatch || descMatch || keywordMatch;
        });
    }, [query]);

    return (
        <div className={styles.searchContainer} ref={wrapperRef}>
            <SearchIcon className={styles.searchIcon} size={16} />
            <input
                type="text"
                placeholder="Search concepts..."
                className={styles.searchInput}
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setIsOpen(true);
                }}
                onFocus={() => setIsOpen(true)}
            />
            {query && (
                <button
                    onClick={() => { setQuery(""); setIsOpen(false); }}
                    style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--muted-foreground)" }}
                >
                    <X size={14} />
                </button>
            )}

            {isOpen && query && (
                <div className={styles.resultsDropdown}>
                    {results.length > 0 ? (
                        results.map((result) => (
                            <Link
                                key={result.href}
                                href={result.href}
                                className={styles.resultItem}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className={styles.resultTitle}>{result.title}</span>
                                <span className={styles.resultDesc}>{result.description}</span>
                            </Link>
                        ))
                    ) : (
                        <div className={styles.noResults}>No matches found.</div>
                    )}
                </div>
            )}
        </div>
    );
}
