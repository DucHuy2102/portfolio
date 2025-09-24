import Navbar from '@/components/navbar';
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
                <div className='w-screen h-screen bg-gradient-to-b from-white to-black/30'>
                    <div className='h-24'>
                        <Navbar />
                    </div>
                    <div className='h-[calc(100vh-6rem)]'>{children}</div>
                </div>
            </body>
        </html>
    );
}
