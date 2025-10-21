'use client';

import { motion } from 'framer-motion';
import { TopProfile, Projects, HireButton } from '../../components/portfolio/index';

export default function PortfolioPage() {
    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='relative'>
                <TopProfile />
                <Projects />
            </div>

            <HireButton />
        </motion.div>
    );
}
