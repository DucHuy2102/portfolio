'use client';
import { motion } from 'framer-motion';
import { HeaderContact, FormInfo, FormContact } from '../../components/contact';

export default function ContactPage() {
    return (
        <motion.div
            className='h-full'
            initial={{ y: '-200vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <section className='min-h-[calc(100vh-6rem)] w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 md:py-16 font-gelasio'>
                <HeaderContact />

                <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-10'>
                    <FormInfo />
                    <FormContact />
                </div>
            </section>
        </motion.div>
    );
}
