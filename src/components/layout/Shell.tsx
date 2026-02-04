"use client";

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import styles from "@/app/layout.module.css";
import { cn } from "@/lib/utils";

export default function Shell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <div className={styles.container}>
            {!isHomePage && <Sidebar />}

            <main
                className={cn(styles.main)}
                style={{
                    marginLeft: isHomePage ? 0 : undefined,
                    width: isHomePage ? "100%" : undefined
                }}
            >
                {children}
            </main>
        </div>
    );
}
