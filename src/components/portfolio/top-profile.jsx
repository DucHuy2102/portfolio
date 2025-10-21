'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TypingText, Shape } from './index';
import ScrollIndicator from '../about/button-scroll';

export default function TopProfile() {
    return (
        <div
            className='w-full h-[calc(100vh-6rem)] overflow-hidden
                flex justify-center items-center font-gelasio'
        >
            <div className='h-full flex flex-1 flex-col justify-center items-center relative'>
                <h1 className='text-6xl sm:text-7xl md:text-8xl font-bold'>My Projects</h1>
                <div className='p-6'>
                    <TypingText
                        texts={[
                            'Hello, Duc Huy here.',
                            'Software Engineer.',
                            'I love clean code and fast performance.',
                        ]}
                        speed={80}
                        pause={1500}
                    />
                </div>
                <div className='absolute bottom-10'>
                    <ScrollIndicator direction='down' label='Scroll down to see more' />
                </div>
            </div>

            <div className='relative w-1/3 h-full hidden md:flex justify-center items-start'>
                <div className='absolute w-[500px] h-[500px]'>
                    <Shape />
                </div>

                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 80, opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className='relative w-full h-full'
                >
                    <Image
                        src='/portfolio.png'
                        alt='Image_Home_Page_Dark'
                        fill
                        className='object-contain'
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                </motion.div>
            </div>
        </div>
    );
}
