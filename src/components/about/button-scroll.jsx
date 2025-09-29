'use client';

import { motion } from 'framer-motion';
import { LuChevronsDown, LuChevronsUp } from 'react-icons/lu';

export default function ScrollIndicator({ direction = 'down', label, handleSroll }) {
    const Icon = direction === 'down' ? LuChevronsDown : LuChevronsUp;

    return (
        <motion.div
            className='flex justify-end cursor-pointer'
            animate={{ y: [0, direction === 'down' ? 8 : -8, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={handleSroll}
        >
            <div className='flex flex-col items-center justify-center'>
                <Icon className='text-black dark:text-white text-2xl' />
                {label && <span className='text-sm text-black dark:text-white mt-1'>{label}</span>}
            </div>
        </motion.div>
    );
}
