"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.css";
import { cn } from "@/lib/utils";
import {
    BookOpen, Brain, GitBranch, Scale,
    Network, Microscope, ShieldAlert, Sparkles, Zap, Globe, Dna, FlaskConical, Menu, X, History,
    LayoutTemplate, Library, ArrowLeft, Home
} from "lucide-react";
import Search from "@/components/ui/Search";

const navItems = [
    // Philosophy Track (Default)
    { name: "Foundations", href: "/foundations", icon: Brain, domain: "philosophy" },
    { name: "Logic & Argumentation", href: "/logic", icon: GitBranch, domain: "philosophy" },
    { name: "Islamic Epistemology", href: "/epistemology", icon: BookOpen, domain: "philosophy" },
    { name: "God (Ilāhiyyāt)", href: "/god", icon: Sparkles, domain: "philosophy" },
    { name: "Ethics (Akhlaq)", href: "/ethics", icon: Scale, domain: "philosophy" },
    { name: "The Problem of Evil", href: "/evil", icon: ShieldAlert, domain: "philosophy" },
    { name: "Free Will & Qadar", href: "/freewill", icon: Network, domain: "philosophy" },
    { name: "The Soul & Consciousness", href: "/soul", icon: Microscope, domain: "philosophy" },
    { name: "Psychology of Doubt", href: "/psychology", icon: Brain, domain: "philosophy" },
    { name: "Political Philosophy", href: "/politics", icon: Scale, domain: "philosophy" },

    // Science Suite
    { name: "Astronomy (Fine-Tuning)", href: "/science/astronomy", icon: Globe, domain: "science" },
    { name: "Quantum (Observer Effect)", href: "/science/quantum", icon: Zap, domain: "science" },
    { name: "Biology (Debunking Darwin)", href: "/science/biology", icon: Dna, domain: "science" },
    { name: "Scientific Myths", href: "/science/myths", icon: FlaskConical, domain: "science" },
    { name: "Science & Reason", href: "/science", icon: Zap, domain: "science" }, // General intro

    // The Living Library
    { name: "The Answer Bank", href: "/answers", icon: Library, domain: "library" },
    { name: "History of Ideas", href: "/history", icon: History, domain: "library" },
    { name: "The Applied Lens", href: "/applied", icon: LayoutTemplate, domain: "library" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Determine current domain
    let currentDomain = "home";
    if (pathname.startsWith("/science")) currentDomain = "science";
    else if (pathname === "/answers" || pathname === "/history" || pathname === "/applied") currentDomain = "library";
    else if (pathname !== "/") currentDomain = "philosophy";

    // Filter items
    const visibleItems = navItems.filter(item => item.domain === currentDomain);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                className={styles.mobileToggle}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Backdrop Overlay for Mobile */}
            <div
                className={cn(styles.overlay, isOpen && styles.overlayOpen)}
                onClick={() => setIsOpen(false)}
            />

            <aside className={cn(styles.sidebar, isOpen && styles.sidebarOpen)}>
                <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
                    The First Principle
                </Link>

                <Search />

                {/* Context Header / Switcher */}
                {currentDomain !== "home" && (
                    <div className="mb-6 px-2">
                        <Link href="/" className="flex items-center text-xs font-bold text-muted-foreground hover:text-primary transition-colors mb-4">
                            <ArrowLeft size={14} className="mr-1" /> Back to Hub
                        </Link>
                        <h3 className="text-sm font-black uppercase tracking-widest text-primary border-b border-border pb-2 mb-2">
                            {currentDomain === "philosophy" && "Philosophy Track"}
                            {currentDomain === "science" && "Science Suite"}
                            {currentDomain === "library" && "Living Library"}
                        </h3>
                    </div>
                )}

                <nav className={styles.nav}>
                    {/* If on Home, show nothing or just main links? 
                        Actually, let's show Philosophy by default if on Home, OR show nothing 
                        and let the Home Page be the only navigator. 
                        Better UX: If on Home, show nothing (clean). 
                        BUT, users might want quick access. 
                        Let's fallback to Philosophy if on Home so it's not empty. */}

                    {(currentDomain === "home" ? navItems.filter(i => i.domain === "philosophy") : visibleItems).map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href; // Exact match or startswith?
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(styles.navItem, isActive && styles.navItemActive)}
                                onClick={() => setIsOpen(false)}
                            >
                                <Icon size={18} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
                <div className={styles.footer}>
                    <p>© 2026 The First Principle</p>
                    <p>Hikma & Reason</p>
                </div>
            </aside>
        </>
    );
}
