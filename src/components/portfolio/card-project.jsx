'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import ScrollIndicator from '../about/button-scroll';

export default function CardProject({ project }) {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);
    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, []);
    const buttonStyle = isHovered
        ? {
              backgroundColor: project.backgroundColor,
              color: project.textColor,
              border: `1px solid ${project.backgroundColor}`,
          }
        : {
              backgroundColor: 'white',
              color: 'black',
              border: '1px solid black',
          };

    return (
        <div
            key={project.id}
            className='w-screen h-screen flex flex-col items-center justify-center gap-8 p-8'
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden border border-zinc-200
                dark:bg-zinc-900 dark:border-zinc-800'
            >
                <div className='px-8 py-5'>
                    <h1
                        className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'
                        style={{ color: project.backgroundColor }}
                    >
                        {project.title}
                    </h1>
                    <div className='mt-2 flex items-center'>
                        <span
                            className='px-3 py-1 rounded-2xl text-xs md:text-sm font-semibold'
                            style={{
                                background: project.backgroundColor,
                                color: project.textColor,
                            }}
                        >
                            Project #{project.id}
                        </span>
                    </div>
                </div>

                <div className='relative overflow-hidden group cursor-zoom-in'>
                    <Image
                        src={project.img}
                        alt={project.title}
                        width={800}
                        height={500}
                        className='w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover 
                        transition-transform duration-500 group-hover:scale-110'
                    />
                    <div
                        className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                    />
                </div>

                <div className='px-8 my-3'>
                    <p
                        className='text-base md:text-lg lg:text-xl 
                    text-gray-700 dark:text-gray-300 leading-relaxed font-gelasio'
                    >
                        {project.description}
                    </p>

                    <div className='flex justify-end mb-5'>
                        <a
                            href={project.linkGithub}
                            target='_blank'
                            rel='noopener noreferrer'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={buttonStyle}
                            className='flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold 
                           shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200
                           text-sm md:text-base lg:text-lg'
                        >
                            <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                            </svg>
                            View on GitHub
                        </a>
                    </div>
                </div>
                <div className='absolute bottom-10 right-20'>
                    <ScrollIndicator direction='down' label='Contact Me 👇' />
                </div>
            </motion.div>
        </div>
    );
}
