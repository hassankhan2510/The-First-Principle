import Link from 'next/link'
import styles from './page.module.css' // Re-using page styles or creating specific ones? simpler inline for 404
import { ShieldAlert, ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <ShieldAlert size={64} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{
                fontFamily: 'var(--font-merriweather)',
                fontSize: '2.5rem',
                marginBottom: '1rem'
            }}>
                404: Logic Not Found
            </h2>
            <p style={{
                fontFamily: 'var(--font-inter)',
                color: 'var(--muted-foreground)',
                marginBottom: '2rem',
                maxWidth: '500px'
            }}>
                The premise you are looking for does not exist in our valid arguments list.
                It may be a fallacy or a broken link.
            </p>
            <Link href="/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--primary)',
                color: 'var(--primary-foreground)',
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                fontWeight: '600'
            }}>
                <ArrowLeft size={18} /> Return to Reason
            </Link>
        </div>
    )
}
