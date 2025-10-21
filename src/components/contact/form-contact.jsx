'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function FormContact() {
    const [isLoading, setIsLoading] = useState(false);
    const [sentSuccess, setSentSuccess] = useState(false);
    const [sentError, setSentError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const { name, email, subject, message } = data;

        setIsLoading(true);
        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                {
                    name,
                    email,
                    subject,
                    message,
                },
                {
                    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                }
            )
            .then(() => {
                setIsLoading(false);
                setSentSuccess(true);
                setSentError(false);
                e.target.reset();
            })
            .catch((error) => {
                console.log('Sent email failed!', error);
                setIsLoading(false);
                setSentSuccess(false);
                setSentError(true);
                e.target.reset();
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className='rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 p-6 sm:p-8 md:p-10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-[0_20px_70px_-30px_rgba(0,0,0,0.35)]'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            aria-labelledby='contact-form-title'
        >
            <h2 id='contact-form-title' className='text-2xl md:text-3xl font-bold mb-6'>
                Send a Message
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='space-y-2'>
                    <label htmlFor='name' className='text-sm font-medium'>
                        Full Name
                    </label>
                    <input
                        id='name'
                        name='name'
                        type='text'
                        placeholder='John Doe'
                        className='w-full rounded-xl border border-zinc-300 dark:border-zinc-700 
                        bg-white/60 dark:bg-zinc-900/60 px-4 py-3 outline-none ring-0 focus:border-primary'
                        required
                    />
                </div>
                <div className='space-y-2'>
                    <label htmlFor='email' className='text-sm font-medium'>
                        Email
                    </label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='you@example.com'
                        className='w-full rounded-xl border border-zinc-300 dark:border-zinc-700 
                        bg-white/60 dark:bg-zinc-900/60 px-4 py-3 outline-none ring-0 focus:border-primary'
                        required
                    />
                </div>
                <div className='md:col-span-2 space-y-2'>
                    <label htmlFor='subject' className='text-sm font-medium'>
                        Subject
                    </label>
                    <input
                        id='subject'
                        name='subject'
                        type='text'
                        placeholder='How can I help?'
                        className='w-full rounded-xl border border-zinc-300 dark:border-zinc-700 
                        bg-white/60 dark:bg-zinc-900/60 px-4 py-3 outline-none ring-0 focus:border-primary'
                    />
                </div>
                <div className='md:col-span-2 space-y-2'>
                    <label htmlFor='message' className='text-sm font-medium'>
                        Message
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        rows={6}
                        placeholder='Share a bit about your project, timelines and goals.'
                        className='w-full rounded-xl border border-zinc-300 dark:border-zinc-700 
                        bg-white/60 dark:bg-zinc-900/60 px-4 py-3 outline-none ring-0 focus:border-primary resize-none'
                        required
                    />
                </div>
            </div>

            <div className='flex items-center justify-center mt-5'>
                <p
                    className={`text-sm italic
                    ${
                        sentSuccess
                            ? 'text-green-600 font-bold'
                            : sentError
                            ? 'text-red-600 font-bold'
                            : 'text-zinc-600 dark:text-zinc-300 font-medium'
                    }`}
                >
                    {sentSuccess
                        ? 'Your message has been sent successfully!'
                        : sentError
                        ? 'There was an error sending your message. Please try again.'
                        : "Your information stays private — it's only used to reply to your message."}
                </p>
            </div>

            <div className='mt-5 flex items-center gap-3'>
                <button
                    type='submit'
                    disabled={isLoading}
                    className={`inline-flex items-center justify-center rounded-xl
                    px-6 py-3 font-semibold border border-zinc-900 dark:border-zinc-100 
                    bg-foreground text-background 
                    ${
                        isLoading
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:opacity-90 cursor-pointer'
                    } transition-opacity`}
                >
                    {isLoading ? 'Sending...' : 'Send Message'}
                </button>
                <span className='text-sm text-muted-foreground'>
                    ~ I usually reply within 24 hours
                </span>
            </div>
        </motion.form>
    );
}
