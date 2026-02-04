"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./sidebar.module.css";
import { cn } from "@/lib/utils";
import {
    BookOpen, Brain, GitBranch, Scale,
    Database, Network, Microscope, ShieldAlert, Sparkles, Zap, Globe, Dna, FlaskConical, Menu, X, History,
    LayoutTemplate, Library
} from "lucide-react";
import Search from "@/components/ui/Search";

const navItems = [
    { name: "Foundations", href: "/foundations", icon: Brain },
    { name: "Logic & Argumentation", href: "/logic", icon: GitBranch },
    { name: "Islamic Epistemology", href: "/epistemology", icon: BookOpen },
    { name: "God (Ilāhiyyāt)", href: "/god", icon: Sparkles },
    { name: "Science & Reason", href: "/science", icon: Zap },
    { name: "Ethics (Akhlaq)", href: "/ethics", icon: Scale },
    { name: "The Problem of Evil", href: "/evil", icon: ShieldAlert },
    { name: "Free Will & Qadar", href: "/freewill", icon: Network },
    { name: "The Soul & Consciousness", href: "/soul", icon: Microscope },
    { name: "Psychology of Doubt", href: "/psychology", icon: Brain },
    { name: "History of Ideas (Timeline)", href: "/history", icon: History },
    { name: "Political Philosophy", href: "/politics", icon: Scale },
    { name: "The Applied Lens", href: "/applied", icon: LayoutTemplate },
    { name: "Astronomy (Fine-Tuning)", href: "/science/astronomy", icon: Globe },
    { name: "Quantum (Observer Effect)", href: "/science/quantum", icon: Zap },
    { name: "Biology (Debunking Darwin)", href: "/science/biology", icon: Dna },
    { name: "Scientific Myths", href: "/science/myths", icon: FlaskConical },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

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

                <div className="px-6 mb-4">
                    <Link href="/answers" className="block w-full text-center bg-primary text-primary-foreground py-2 rounded-full font-bold text-sm hover:opacity-90 transition-opacity">
                        <Library className="inline mr-2 mb-1" size={16} /> The Answer Bank
                    </Link>
                </div>

                <Search />

                <nav className={styles.nav}>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname.startsWith(item.href);
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
