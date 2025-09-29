'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaRegMessage } from 'react-icons/fa6';
import { FaLaptop } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <div
                className='h-full flex flex-col lg:flex-row px-4 sm:px-8 
            md:px-12 lg:px-24 xl:px-48 font-gelasio'
            >
                {/* image */}
                <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
                    <Image
                        src='/my-picture_light.png'
                        alt='Image_Home_Page_Light'
                        fill
                        className='object-contain dark:hidden'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                    <Image
                        src='/my-picture_dark.png'
                        alt='Image_Home_Page_Dark'
                        fill
                        className='object-contain hidden dark:block'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                </div>

                {/* text */}
                <div
                    className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-5 
                sm:gap-6 md:gap-7 lg:gap-8 items-center justify-center'
                >
                    {/* title */}
                    <h1
                        className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                    font-bold text-center lg:text-left'
                    >
                        Crafting Clean & Impactful Web Experiences
                    </h1>

                    {/* description */}
                    <p className='md:text-xl'>
                        I&apos;m Nguyen Duc Huy, a software engineer specializing in{' '}
                        <strong>Next.js, React, and TypeScript</strong>. With experience leading
                        projects from e-commerce platforms to personal applications, I focus on
                        building{' '}
                        <em>
                            <span className='text-blue-600 font-bold'>scalable</span>,{' '}
                            <span className='text-amber-600 font-bold'>intuitive</span>, and{' '}
                            <span className='text-rose-600 font-bold'>modern web solutions</span>
                        </em>{' '}
                        that leave a lasting impression.
                    </p>

                    {/* buttons */}
                    <div className='flex gap-4 w-full justify-end'>
                        <Link href='/portfolio'>
                            <Button
                                className='cursor-pointer md:py-5 border border-black dark:border-white
                            bg-white text-black hover:bg-black hover:text-white font-semibold
                            dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black'
                            >
                                <FaLaptop className='mr-1' />
                                View My Work
                            </Button>
                        </Link>
                        <Link href='/contact'>
                            <Button
                                className='cursor-pointer md:py-5 border border-black dark:border-white
                            bg-white text-black hover:bg-black hover:text-white font-semibold
                            dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black'
                            >
                                <FaRegMessage className='mr-1' />
                                Contact Me
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
