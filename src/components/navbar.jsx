'use client';

import Link from 'next/link';
import { useState } from 'react';
import NavLink from './navLink';
import { motion } from 'framer-motion';
import {
    MENU_LIST,
    SOCIAL_LIST,
    topVariant,
    centerVariant,
    bottomVariant,
    listVariant,
} from '../utils/links';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav
            className='h-full flex items-center justify-between
        px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48'
        >
            {/* menu list */}
            <div
                className='hidden md:flex items-center justify-center gap-4
            text-lg font-medium w-1/3 text-zinc-600'
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
                flex items-center justify-center gap-1'
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
                    <a href={url} target='_blank' rel='noopener noreferrer' key={idx}>
                        {icon}
                    </a>
                ))}
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
