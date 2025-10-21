'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import CardProject from './card-project';
import { useRef } from 'react';

const PROJECT_LIST = [
    {
        id: 1,
        title: 'Watches Store',
        description:
            'Built a comprehensive e-commerce platform with separate customer and admin interfaces, featuring advanced UI components and real-time data visualization.',
        img: '/watches-store.jpg',
        linkGithub: 'https://github.com/DucHuy2102/Watches_Store',
        backgroundColor: '#2F80ED',
        textColor: '#FFFFFF',
    },
    {
        id: 2,
        title: 'Blog Application',
        description:
            'Built a web blog application with user authentication and admin management features using modern web technologies.',
        img: '/blog.png',
        linkGithub: 'https://github.com/DucHuy2102/mern-blog-app',
        backgroundColor: '#ffc500',
        textColor: '#000000',
    },
    {
        id: 3,
        title: 'User Authentication System',
        description:
            'Built a complete authentication system with email/password login, Google login, and password recovery features.',
        img: '/auth.jpg',
        linkGithub: 'https://github.com/DucHuy2102/mern-auth',
        backgroundColor: '#0f9b0f',
        textColor: '#FFFFFF',
    },
    {
        id: 4,
        title: 'Pinterest Clone',
        description:
            'Built a complete Pinterest clone with user authentication, image uploads, and a dynamic feed.',
        img: '/pinterest.jpg',
        linkGithub: 'https://github.com/DucHuy2102/full-pinterest',
        backgroundColor: '#fd1d1d',
        textColor: '#FFFFFF',
    },
];

export default function Projects() {
    const projectRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: projectRef,
        offset: ['start start', 'end end'],
    });

    const slideCount = PROJECT_LIST.length;
    const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(slideCount - 1) * 100}vw`], {
        clamp: true,
    });
    const scrollHeightPerProject = 100;
    const totalScrollHeight = `${(slideCount - 1) * scrollHeightPerProject + 100}vh`;

    return (
        <section ref={projectRef} style={{ height: totalScrollHeight }} className='relative w-fit'>
            <div className='sticky top-0 left-0 right-0 h-screen flex items-center justify-center'>
                <motion.div className='flex h-full' style={{ x, width: `${slideCount * 100}vw` }}>
                    {PROJECT_LIST.map((project) => (
                        <CardProject key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
