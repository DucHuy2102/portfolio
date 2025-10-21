'use client';
import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';

export default function FormInfo() {
    const [copied, setCopied] = useState(false);
    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText('duchuytv2102@gmail.com');
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
        } catch (_) {
            console.error('Failed to copy email address');
        }
    }, []);
    return (
        <motion.div
            className='relative overflow-hidden rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 p-8 md:p-10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-[0_20px_70px_-30px_rgba(0,0,0,0.35)]'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
        >
            <div className='pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-40 bg-gradient-to-br from-primary/30 to-emerald-400/30 dark:from-primary/20 dark:to-emerald-500/20' />

            <h2 className='text-2xl md:text-3xl font-bold mb-6'>Work With Me</h2>

            <p className='text-base leading-relaxed text-muted-foreground mb-8'>
                Whether it's a new product, a redesign, or performance work, I'm available for
                select collaborations that value quality and impact.
            </p>

            <ul className='space-y-5 mb-10'>
                <li className='flex items-start gap-4'>
                    <svg
                        className='h-6 w-6 mt-0.5 text-primary'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.5'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21.75 7.5v9a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 16.5v-9m19.5 0A2.25 2.25 0 0019.5 5.25h-15A2.25 2.25 0 002.25 7.5m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.5a2.25 2.25 0 01-2.16 0l-7.5-4.5A2.25 2.25 0 012.25 7.743V7.5'
                        />
                    </svg>
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm uppercase tracking-wider text-muted-foreground'>
                            Email
                        </p>
                        <a
                            href='mailto:duchuytv2102@gmail.com'
                            className='text-lg underline-offset-4 hover:underline'
                        >
                            duchuytv2102@gmail.com
                        </a>
                        <div className='flex items-center gap-2'>
                            <button
                                type='button'
                                onClick={handleCopy}
                                className='inline-flex items-center gap-1.5 rounded-full border border-zinc-300/70 dark:border-zinc-700/70 px-3 py-1 text-xs hover:bg-emerald-500 hover:text-white transition-colors'
                                aria-label='Copy email address'
                            >
                                <svg
                                    className='w-4 h-4'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='1.5'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M8 16.5H6.75A2.25 2.25 0 014.5 14.25V6.75A2.25 2.25 0 016.75 4.5h7.5A2.25 2.25 0 0116.5 6.75V8M9.75 19.5h7.5A2.25 2.25 0 0019.5 17.25v-7.5A2.25 2.25 0 0017.25 7.5h-7.5A2.25 2.25 0 007.5 9.75v7.5A2.25 2.25 0 009.75 21h7.5'
                                    />
                                </svg>
                                Copy
                            </button>
                            {copied && (
                                <span className='text-xs text-emerald-600 dark:text-emerald-400'>
                                    Copied!
                                </span>
                            )}
                        </div>
                    </div>
                </li>
                <li className='flex items-start gap-4'>
                    <svg
                        className='h-6 w-6 mt-0.5 text-primary'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.5'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                        />
                    </svg>
                    <div>
                        <p className='text-sm uppercase tracking-wider text-muted-foreground'>
                            Location
                        </p>
                        <p className='text-lg'>Ho Chi Minh City, Vietnam</p>
                    </div>
                </li>
                <li className='flex items-start gap-4'>
                    <svg
                        className='h-6 w-6 mt-0.5 text-primary'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.5'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                    </svg>
                    <div>
                        <p className='text-sm uppercase tracking-wider text-muted-foreground'>
                            Availability
                        </p>
                        <p className='text-lg'>Open to opportunities</p>
                    </div>
                </li>
            </ul>

            <div className='flex flex-wrap items-center justify-start gap-3'>
                <a
                    href='https://github.com/DucHuy2102'
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 rounded-full border border-zinc-300/70 dark:border-zinc-700/70 
            px-4 py-2 text-sm hover:shadow-md transition-all hover:bg-zinc-900 
            hover:text-white hover:scale-110 duration-200'
                >
                    <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                    >
                        <path d='M12 0C5.373 0 0 5.373 0 12a12 12 0 008.207 11.387c.6.111.793-.262.793-.579v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.238 1.839 1.238 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 016.009 0c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.003 12.003 0 0024 12c0-6.627-5.373-12-12-12z' />
                    </svg>
                    GitHub
                </a>
                <a
                    href='https://www.linkedin.com/in/duchuy2102/'
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 rounded-full border border-zinc-300/70 dark:border-zinc-700/70 
            px-4 py-2 text-sm hover:shadow-md transition-all hover:bg-[#0A66C2] 
            hover:text-white hover:scale-110 duration-200'
                >
                    <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                    >
                        <path d='M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8.339 18.667H5.671V9.333h2.668v9.334zM7.005 8.152a1.546 1.546 0 110-3.093 1.546 1.546 0 010 3.093zM20 18.667h-2.667v-4.733c0-1.13-.023-2.583-1.574-2.583-1.575 0-1.816 1.232-1.816 2.505v4.811H11.276V9.333h2.56v1.277h.036c.357-.675 1.228-1.389 2.528-1.389 2.705 0 3.2 1.781 3.2 4.096v5.35z' />
                    </svg>
                    LinkedIn
                </a>
                <a
                    href='https://www.facebook.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 rounded-full border border-zinc-300/70 dark:border-zinc-700/70 
            px-4 py-2 text-sm hover:shadow-md transition-all hover:bg-[#1877F2] 
            hover:text-white hover:scale-110 duration-200'
                >
                    <svg
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        aria-hidden='true'
                    >
                        <path d='M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.464.099 2.797.143v3.245h-1.918c-1.504 0-1.795.715-1.795 1.763v2.314h3.587l-.467 3.626h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z' />
                    </svg>
                    Facebook
                </a>
            </div>
        </motion.div>
    );
}
