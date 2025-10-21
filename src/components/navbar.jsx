'use client';

import Link from 'next/link';
import { useState } from 'react';
import NavLink from './navLink';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ToggleThemeButton from './toggle-theme';

const MENU_LIST = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/portfolio', title: 'Portfolio' },
    { url: '/contact', title: 'Contact' },
];

const topVariant = {
    close: { rotate: 0 },
    open: { rotate: 45, backgroundColor: 'rgb(255,255,255)' },
};

const centerVariant = {
    close: { opacity: 1 },
    open: { opacity: 0 },
};

const bottomVariant = {
    close: { rotate: 0 },
    open: { rotate: -45, backgroundColor: 'rgb(255,255,255)' },
};

const listVariant = {
    close: { x: '100vw' },
    open: {
        x: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.2,
        },
    },
};

const listItemVariant = {
    close: { x: -10, opacity: 0 },
    open: { x: 0, opacity: 1 },
};

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const SOCIAL_LIST = [
        {
            url: 'https://github.com/DucHuy2102',
            icon: (
                <FaGithub
                    size={24}
                    className='text-zinc-500 hover:text-black 
                dark:text-zinc-400 dark:hover:text-white'
                />
            ),
        },
        {
            url: 'https://www.facebook.com/Duc.Huy2102',
            icon: (
                <FaFacebook
                    size={24}
                    className='text-zinc-500 hover:text-blue-500
            dark:text-zinc-400 dark:hover:text-blue-500'
                />
            ),
        },
        {
            url: 'https://www.instagram.com/d_huy02/',
            icon: (
                <FaInstagram
                    size={24}
                    className='text-zinc-500 hover:bg-gradient-to-tr hover:from-yellow-400 rounded-md 
                hover:via-pink-500 hover:to-purple-600 hover:text-white dark:text-zinc-400 dark:hover:text-white'
                />
            ),
        },
        {
            url: 'https://www.linkedin.com/in/duchuy2102/',
            icon: (
                <FaLinkedin
                    size={24}
                    className='text-zinc-500 hover:text-blue-800 
                    dark:text-zinc-400 dark:hover:text-blue-600'
                />
            ),
        },
    ];

    return (
        <nav
            className='h-full flex items-center justify-between
        px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 font-gelasio'
        >
            {/* menu list */}
            <div
                className='hidden md:flex items-center justify-center gap-4
            text-lg font-medium w-1/3'
            >
                {MENU_LIST.map(({ url, title }, idx) => (
                    <NavLink href={url} title={title} key={idx} />
                ))}
            </div>

            {/* logo */}
            <div className='md:hidden lg:flex justify-center w-1/3'>
                <Link
                    href='/'
                    className='w-24 text-md bg-black rounded-md p-1 font-semibold 
                flex items-center justify-center gap-1 border border-white'
                >
                    <span className='text-white ml-1'>Duc</span>
                    <span
                        className='text-black bg-white w-12 h-8 rounded-sm
                    flex items-center justify-center'
                    >
                        Huy
                    </span>
                </Link>
            </div>

            {/* social */}
            <div
                className='w-1/3 hidden md:flex items-center 
            justify-center gap-4 text-zinc-600'
            >
                {SOCIAL_LIST.map(({ url, icon }, idx) => (
                    <a
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                        key={idx}
                        className='hover:scale-150 transition-transform duration-200'
                    >
                        {icon}
                    </a>
                ))}
                <ToggleThemeButton />
            </div>

            {/* menu */}
            <div className='md:hidden'>
                {/* menu button */}
                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className='w-10 h-8 cursor-pointer relative z-50
                flex flex-col items-center justify-between'
                >
                    <motion.div
                        variants={topVariant}
                        animate={menuOpen ? 'open' : 'close'}
                        className='w-10 h-1 bg-black rounded-sm origin-left'
                    />
                    <motion.div
                        variants={centerVariant}
                        animate={menuOpen ? 'open' : 'close'}
                        className='w-10 h-1 bg-black rounded-sm'
                    />
                    <motion.div
                        variants={bottomVariant}
                        animate={menuOpen ? 'open' : 'close'}
                        className='w-10 h-1 bg-black rounded-sm origin-left'
                    />
                </button>

                {/* menu list */}
                {menuOpen && (
                    <motion.div
                        variants={listVariant}
                        initial='close'
                        animate='open'
                        className='absolute top-0 left-0 z-40
                h-screen w-screen bg-black text-white text-4xl
                flex flex-col items-center justify-center gap-8'
                    >
                        {MENU_LIST.map(({ url, title }, idx) => (
                            <motion.div key={idx} variants={listItemVariant}>
                                <Link href={url}>{title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
