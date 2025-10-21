'use client';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { FaSun, FaMoon } from 'react-icons/fa';
import { AnimatePresence, motion } from 'motion/react';

export default function ToggleThemeButton() {
    const { theme, setTheme } = useTheme();

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.5, rotate: -90 },
        visible: { opacity: 1, scale: 1, rotate: 0 },
        exit: { opacity: 0, scale: 0.5, rotate: 90, transition: { duration: 0.2 } },
    };

    return (
        <Button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='cursor-pointer flex justify-center items-center gap-2 group'
            variant='ghost'
            size='icon'
        >
            <AnimatePresence mode='wait' initial={false}>
                <motion.span
                    key='sun-icon'
                    variants={iconVariants}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    className='block dark:hidden'
                >
                    <FaSun className='text-yellow-500 group-hover:text-yellow-400' />
                </motion.span>
                <motion.span
                    key='moon-icon'
                    variants={iconVariants}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    className='hidden dark:block'
                >
                    <FaMoon className='text-gray-500 group-hover:text-gray-100' />
                </motion.span>
            </AnimatePresence>
        </Button>
    );
}
