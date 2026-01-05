import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Bdjobs Mock Interview Platform',
    description: 'Practice real-world interviews with verified professionals.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
