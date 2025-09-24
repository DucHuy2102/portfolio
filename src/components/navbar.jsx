'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import NavLink from './navLink';

const MENU_LIST = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/portfolio', title: 'Portfolio' },
    { url: '/contact', title: 'Contact' },
];

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
                <Link href='#'>
                    <FaGithub size={24} className='hover:text-black' />
                </Link>{' '}
                <Link href='#'>
                    <FaFacebook size={24} className='hover:text-blue-500' />
                </Link>
                <Link href='#'>
                    <FaInstagram
                        size={24}
                        className='hover:bg-gradient-to-tr hover:from-yellow-400 rounded-md 
                        hover:via-pink-500 hover:to-purple-600 hover:text-white'
                    />
                </Link>
                <Link href='#'>
                    <FaLinkedin size={24} className='hover:text-blue-800' />
                </Link>
            </div>

            {/* menu */}
            <div className='md:hidden'>
                {/* menu button */}
                <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className=' w-10 h-7 cursor-pointer relative z-50
                flex flex-col items-center justify-between'
                >
                    <div className='w-10 h-1 bg-black rounded-sm' />
                    <div className='w-10 h-1 bg-black rounded-sm' />
                    <div className='w-10 h-1 bg-black rounded-sm' />
                </button>

                {/* menu list */}
                {menuOpen && (
                    <div
                        className='absolute top-0 left-0
                h-screen w-screen bg-black text-white text-4xl
                flex flex-col items-center justify-center gap-8'
                    >
                        {MENU_LIST.map(({ url, title }, idx) => (
                            <Link href={url} key={idx} className=''>
                                {title}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
