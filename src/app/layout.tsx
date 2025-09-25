import AnimationProvider from '@/components/AnimationProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'dHuy Portfolio',
    description:
        'Welcome to my personal portfolio website where I showcase my projects and skills.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <AnimationProvider>{children}</AnimationProvider>
            </body>
        </html>
    );
}
