'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Biography, Skill, Experience, Brain } from '../../components/about';

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ container: containerRef });

    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='h-full w-full overflow-y-scroll lg:flex' ref={containerRef}>
                {/* text */}
                <div
                    className='px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 font-gelasio
                flex flex-col gap-32 lg:w-2/3 xl:w-1/2 py-5 xl:py-10'
                >
                    {/* biography */}
                    <Biography />

                    {/* skill */}
                    <Skill />

                    {/* experience */}
                    <Experience containerRef={containerRef} />
                </div>

                {/* image */}
                <div className='hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-20'>
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    );
}
