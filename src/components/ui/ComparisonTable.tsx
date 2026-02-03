import styles from "./comparison-table.module.css";
import { cn } from "@/lib/utils";

interface ComparisonTableProps {
    headers: string[];
    data: {
        rowTitle: string;
        values: string[];
    }[];
    className?: string;
}

export default function ComparisonTable({
    headers,
    data,
    className,
}: ComparisonTableProps) {
    return (
        <div className={cn(styles.container, className)}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>Feature</th>
                        {headers.map((header, index) => (
                            <th key={index} className={styles.th}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className={styles.tr}>
                            <td className={cn(styles.td, styles.rowHeader)}>{row.rowTitle}</td>
                            {row.values.map((value, colIndex) => (
                                <td key={colIndex} className={styles.td}>
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
