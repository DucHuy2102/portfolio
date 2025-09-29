'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollIndicator from './button-scroll';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import {
    SiTypescript,
    SiMysql,
    SiMongodb,
    SiPostgresql,
    SiTailwindcss,
    SiExpress,
    SiPostman,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiServer } from 'react-icons/bi';
import { DiMsqlServer } from 'react-icons/di';

const SKILLS = [
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Microsoft SQL Server', icon: DiMsqlServer },
    { name: 'MySQL', icon: SiMysql },
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: TbBrandNextjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'Git', icon: FaGitAlt },
    { name: 'RESTful APIs', icon: BiServer },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'VS Code', icon: VscVscode },
    { name: 'Postman', icon: SiPostman },
];

// const SKILLS = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'TypeScript',
//     'Microsoft SQL Server',
//     'MySQL',
//     'React',
//     'Next.js',
//     'Tailwind CSS',
//     'Node.js',
//     'Express.js',
//     'RESTful APIs',
//     'MongoDB',
//     'PostgreSQL',
//     'Git',
//     'VS Code',
//     'Postman',
// ];

export default function Skill() {
    const skillRef = useRef(null);
    const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

    return (
        <div className='flex flex-col justify-center gap-5 3xl:gap-10' ref={skillRef}>
            <motion.h1
                initial={{ x: '-300px' }}
                animate={isSkillRefInView ? { x: 0 } : null}
                transition={{ duration: 0.3 }}
                className='font-bold text-3xl'
            >
                Skills
            </motion.h1>
            <motion.div
                className='flex flex-wrap gap-4'
                initial={{ x: '-300px' }}
                animate={isSkillRefInView ? { x: 0 } : null}
            >
                {SKILLS.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        className='flex items-center justify-center px-4 py-3 cursor-pointer
                    font-medium shadow-md border border-black rounded-xl 
                    bg-black text-white dark:bg-white dark:text-black'
                    >
                        <skill.icon className='mr-2 text-xl text-blue-500 dark:text-blue-600' />
                        {skill.name}
                    </motion.div>
                ))}
            </motion.div>
            <ScrollIndicator direction='down' label='Keep exploring' />
        </div>
    );
}
