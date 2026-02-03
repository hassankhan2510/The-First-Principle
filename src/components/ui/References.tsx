import { Book } from "lucide-react";
import styles from "./references.module.css";

type Reference = {
    title: string;
    author: string;
    note?: string;
};

export default function References({ items }: { items: Reference[] }) {
    return (
        <div className={styles.referencesContainer}>
            <h3 className={styles.refTitle}>
                <Book size={20} />
                References & Further Reading
            </h3>
            <ul className={styles.refList}>
                {items.map((item, idx) => (
                    <li key={idx} className={styles.refItem}>
                        <span className={styles.bookTitle}>{item.title}</span>
                        <span className={styles.author}>{item.author}</span>
                        {item.note && <span className="text-xs text-muted-foreground mt-1">{item.note}</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
}
