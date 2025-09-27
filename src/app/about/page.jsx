'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='font-gelasio'>
                <h1>About Me</h1>
            </div>
        </motion.div>
    );
}
