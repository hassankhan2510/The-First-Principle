import Link from "next/link";
import styles from "./KnowledgeMap.module.css";
import { Brain, BookOpen, Sparkles, Scale, Zap, Globe, ShieldAlert, GitBranch } from "lucide-react";

// Define the Node positions (percentage based for responsiveness inside fixed container)
const nodes = [
    { id: "foundations", x: 50, y: 10, label: "Foundations", icon: Brain, href: "/foundations", isStart: true },
    { id: "logic", x: 25, y: 30, label: "Logic", icon: GitBranch, href: "/logic" },
    { id: "epistemology", x: 75, y: 30, label: "Epistemology", icon: BookOpen, href: "/epistemology" },
    { id: "god", x: 50, y: 50, label: "God (Ilāhiyyāt)", icon: Sparkles, href: "/god" },
    { id: "science", x: 20, y: 75, label: "Advanced Science", icon: Zap, href: "/science/astronomy" }, // Point to first science arg
    { id: "politics", x: 50, y: 85, label: "Politics", icon: Globe, href: "/politics" },
    { id: "ethics", x: 80, y: 75, label: "Ethics", icon: Scale, href: "/ethics" },
];

const connections = [
    { from: "foundations", to: "logic" },
    { from: "foundations", to: "epistemology" },
    { from: "logic", to: "god" },
    { from: "epistemology", to: "god" },
    { from: "god", to: "science" },
    { from: "god", to: "politics" },
    { from: "god", to: "ethics" }
];

export default function KnowledgeMap() {
    return (
        <div className={styles.container}>
            <div className={styles.mapContainer}>
                {/* SVG for Lines */}
                <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
                    {connections.map((conn, idx) => {
                        const start = nodes.find(n => n.id === conn.from);
                        const end = nodes.find(n => n.id === conn.to);
                        if (!start || !end) return null;

                        return (
                            <line
                                key={idx}
                                x1={`${start.x}%`}
                                y1={`${start.y}%`}
                                x2={`${end.x}%`}
                                y2={`${end.y}%`}
                                className={styles.svgLine}
                            />
                        );
                    })}
                </svg>

                {/* Nodes */}
                {nodes.map((node) => {
                    const Icon = node.icon;
                    return (
                        <Link
                            key={node.id}
                            href={node.href}
                            className={styles.node}
                            style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        >
                            <div className={styles.nodeCircle}>
                                <Icon size={28} />
                                {node.isStart && <span className={styles.startBadge}>Start</span>}
                            </div>
                            <span className={styles.nodeLabel}>{node.label}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
