'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './navbar';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function AnimationProvider({ children }) {
    const pathName = usePathname();
    const namePage = useMemo(() => {
        return pathName.substring(1).charAt(0).toUpperCase() + pathName.substring(2) || 'Home';
    }, [pathName]);

    return (
        <AnimatePresence mode='wait'>
            <div key={pathName} className='w-screen h-screen'>
                <motion.div
                    className='h-screen w-screen fixed bg-black rounded-b-[100px] z-[100]'
                    animate={{ height: '0vh' }}
                    exit={{ height: '150vh' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
                <motion.div
                    className='fixed top-0 left-0 right-0 bottom-0 w-fit h-fit m-auto
                    text-white text-7xl font-bold z-[101] font-gelasio'
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                    {namePage}
                </motion.div>
                <motion.div
                    className='h-screen w-screen fixed bottom-0 bg-black rounded-t-[100px] z-[90]'
                    initial={{ height: '150vh' }}
                    animate={{ height: '0vh', transition: { delay: 0.5 } }}
                />
                <div className='h-24'>
                    <Navbar />
                </div>
                <div className='h-[calc(100vh-6rem)]'>{children}</div>
            </div>
        </AnimatePresence>
    );
}
