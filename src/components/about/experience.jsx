'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollIndicator from './button-scroll';

export default function Experience({ containerRef }) {
    const experienceRef = useRef(null);
    const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

    return (
        <div className='flex flex-col justify-center gap-5 3xl:gap-10 pb-10' ref={experienceRef}>
            <motion.h1
                initial={{ x: '-300px' }}
                animate={isExperienceRefInView ? { x: 0 } : null}
                transition={{ duration: 0.3 }}
                className='font-bold text-3xl'
            >
                Experience &amp; Education
            </motion.h1>
            <motion.div
                initial={{ x: '-300px' }}
                animate={isExperienceRefInView ? { x: 0 } : null}
                className=''
            >
                <div className='flex justify-between h-fit'>
                    <div className='w-1/3'>
                        <h1
                            className='font-semibold bg-blue-500 text-white rounded-lg rounded-tr-none 
                                    p-3'
                        >
                            Freelancer
                        </h1>
                        <div className='p-2 text-sm italic'>
                            Working on various projects for clients worldwide.
                        </div>
                        <div className='p-2 text-sm text-blue-500 font-semibold'>
                            2025 - Present
                        </div>
                        <div className='bg-blue-500 w-fit text-white rounded-sm p-2 text-sm font-semibold'>
                            Self-Employed
                        </div>
                    </div>

                    <div className='w-1/6 flex justify-center'>
                        <div className='w-0.5 h-full bg-blue-500 rounded-full relative'>
                            <div
                                className='absolute -left-[9px] w-5 h-5 rounded-full 
                                        bg-white ring-4 ring-blue-500'
                            />
                        </div>
                    </div>

                    <div className='w-1/3'></div>
                </div>
                {/* 
                <div className='flex justify-between h-fit'>
                    <div className='w-1/3'></div>

                    <div className='w-1/6 flex justify-center'>
                        <div className='w-0.5 h-full bg-orange-500 rounded-full relative'>
                            <div
                                className='absolute -left-[9px] w-5 h-5 rounded-full 
                                        bg-white ring-4 ring-orange-500'
                            />
                        </div>
                    </div>

                    <div className='w-1/3'>
                        <h1
                            className='font-semibold bg-orange-500 text-white rounded-lg rounded-tl-none 
                                    p-2'
                        >
                            Tester
                        </h1>
                        <div className='p-3 text-sm italic'>
                            My current employer is XYZ Corp, where I work on various projects.
                        </div>
                        <div className='p-3 text-sm text-orange-500 font-semibold'>
                            2024 - Present
                        </div>
                        <div className='bg-orange-500 w-fit text-white rounded-sm p-1 text-sm font-semibold'>
                            Apple
                        </div>
                    </div>
                </div> */}

                <div className='flex justify-between h-fit'>
                    <div className='w-1/3'></div>

                    <div className='w-1/6 flex justify-center'>
                        <div className='w-0.5 h-full bg-teal-500 rounded-full relative'>
                            <div
                                className='absolute -left-[9px] w-5 h-5 rounded-full 
                                        bg-white ring-4 ring-teal-500'
                            />
                        </div>
                    </div>

                    <div className='w-1/3'>
                        <h1
                            className='font-semibold bg-teal-500 text-white rounded-lg rounded-tl-none 
                                    p-2'
                        >
                            Bachelor of Engineering in Software Engineering
                        </h1>
                        <div className='p-2 text-sm italic'>
                            Graduated with Good standing, majoring in Software Engineering.
                        </div>
                        <div className='p-2 text-sm text-teal-500 font-semibold'>
                            Sep 2020 - Dec 2024
                        </div>
                        <div
                            className='bg-teal-500 w-fit text-white rounded-sm p-1 
                        text-sm font-semibold cursor-pointer'
                        >
                            <a
                                href='https://hcmute.edu.vn/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Ho Chi Minh City University of Technology and Education
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <ScrollIndicator
                direction='up'
                label='Back to top'
                handleSroll={() => {
                    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
                }}
            />
        </div>
    );
}
