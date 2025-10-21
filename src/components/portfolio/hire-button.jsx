'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HireButton() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className='h-screen w-full flex flex-col
        justify-center items-center font-gelasio'
        >
            <div className='w-full flex flex-col justify-center items-center gap-5'>
                <h1 className='text-5xl sm:text-7xl text-center w-full'>
                    Let&apos;s <span className='text-orange-500 dark:text-blue-400'>craft</span>{' '}
                    your vision into{' '}
                    <span className='text-teal-500 dark:text-yellow-400'>code.</span>
                </h1>
                <span
                    className='block h-[1px] sm:h-[2px] w-3/4 sm:w-1/2 mx-auto bg-gradient-to-r 
                    from-white via-black to-white'
                />
                <p className='text-lg sm:text-2xl max-w-[22rem] sm:max-w-3xl text-zinc-400 dark:text-zinc-500 text-center'>
                    I build elegant, high-performance web applications — transforming ideas into
                    digital reality.
                </p>
            </div>
            <div className='relative w-full flex justify-center items-center'>
                <Link
                    href='/contact'
                    className='block md:hidden mt-20'
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <button
                        className='rounded-full w-28 h-28 bg-black dark:bg-white text-white dark:text-black
                    dark:hover:bg-blue-500 dark:hover:text-white text-xl cursor-pointer hover:bg-blue-500'
                    >
                        Hire Me
                    </button>
                </Link>
                <motion.svg
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                    viewBox='0 0 300 300'
                    className='w-64 h-64 md:w-96 md:h-96 hidden md:block'
                >
                    <defs>
                        <path
                            id='circlePath'
                            d='M 150, 150
                                    m -60, 0
                                    a 60,60 0 0,1 120,0
                                    a 60,60 0 0,1 -120,0'
                        />
                    </defs>
                    <circle cx='100' cy='100' r='75' fill='none' />
                    <text fill='#000'>
                        <textPath xlinkHref='#circlePath' className='text-xl'>
                            Full-Stack Developer
                        </textPath>
                    </text>
                </motion.svg>
                <Link
                    href='/contact'
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className='hidden md:flex items-center justify-center 
                    h-16 w-16 md:w-28 md:h-28 rounded-full cursor-pointer absolute
                    inset-0 m-auto hover:scale-110 transition-all
                    text-lg bg-black text-white hover:bg-blue-500 
                    dark:bg-white dark:text-black dark:hover:bg-blue-500 dark:hover:text-white'
                >
                    Hire Me
                </Link>
                {hovered && (
                    <motion.p
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className='w-full absolute -bottom-10 md:bottom-16 left-1/2 transform -translate-x-1/2 
                    text-xl text-center md:hidden md:dark:block'
                    >
                        👆Click on to connect with me!☝️
                    </motion.p>
                )}
            </div>
        </div>
    );
}
