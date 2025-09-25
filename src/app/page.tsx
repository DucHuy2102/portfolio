'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48'>
                {/* image */}
                <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
                    <Image
                        src='/my-picture.png'
                        alt='Image_Home_Page'
                        fill
                        className='object-contain'
                    />
                </div>

                {/* text */}
                <div
                    className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-8 
                items-center justify-center'
                >
                    {/* title */}
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
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
                    <div className='flex items-center justify-start gap-4'>
                        <button
                            className='bg-black text-white p-4 rounded-lg cursor-pointer 
                        hover:bg-transparent hover:text-black hover:border'
                        >
                            View My Work
                        </button>
                        <button
                            className='bg-transparent text-black p-4 rounded-lg border cursor-pointer
                        hover:bg-black hover:text-white hover:border-black'
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
