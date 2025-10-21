import AnimationProvider from '@/components/AnimationProvider';
import type { Metadata } from 'next';
import { Inter, Gelasio } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });
const gelasio = Gelasio({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-gelasio' });

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
        <html lang='en' suppressHydrationWarning className={gelasio.variable}>
            <body className={inter.className}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='dark'
                    enableSystem
                    disableTransitionOnChange
                >
                    <AnimationProvider>{children}</AnimationProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
