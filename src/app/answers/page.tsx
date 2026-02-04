"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { qnaData } from "@/data/qna";
import { Search, ChevronDown, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Theology", "Science", "Ethics", "Social", "Logic"];

export default function AnswersPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [openId, setOpenId] = useState<string | null>(null);

    // Filter Logic
    const filteredData = qnaData.filter((item) => {
        const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = item.question.toLowerCase().includes(searchLower) ||
            item.answer.toLowerCase().includes(searchLower) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchLower));
        return matchesCategory && matchesSearch;
    });

    const toggleItem = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>The Answer Bank</h1>
                <p className={styles.subtitle}>
                    A growing repository of answers to the most common doubts.
                    Search the library to find certainty.
                </p>
            </header>

            {/* Search Bar */}
            <div className={styles.searchContainer}>
                <Search className={styles.searchIcon} size={20} />
                <input
                    type="text"
                    placeholder="Search keywords (e.g., evolution, suffering)..."
                    className={styles.searchInput}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Filter Tabs */}
            <div className={styles.filters}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={cn(styles.filterBtn, selectedCategory === cat && styles.activeFilter)}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Q&A List */}
            <div className={styles.qaList}>
                {filteredData.length === 0 ? (
                    <div className="text-center text-muted-foreground py-10">
                        No answers found. Try a different search term.
                    </div>
                ) : (
                    filteredData.map((item) => (
                        <div
                            key={item.id}
                            className={cn(styles.qaItem, openId === item.id && styles.qaOpen)}
                        >
                            <div
                                className={styles.qaHeader}
                                onClick={() => toggleItem(item.id)}
                            >
                                <div>
                                    <span className={styles.qaCategory}>{item.category}</span>
                                    <h3 className={styles.qaQuestion}>{item.question}</h3>
                                </div>
                                <ChevronDown className={styles.qaIcon} />
                            </div>
                            {openId === item.id && (
                                <div className={styles.qaAnswer}>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
