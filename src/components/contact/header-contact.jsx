import { motion } from 'framer-motion';

export default function HeaderContact() {
    return (
        <div className='max-w-5xl mx-auto text-center mb-10 md:mb-16'>
            <motion.h1
                className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Let's Connect
            </motion.h1>
            <motion.p
                className='mt-4 text-lg md:text-xl text-muted-foreground'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                I value thoughtful conversations and well-crafted products. Tell me about your idea.
            </motion.p>
        </div>
    );
}
