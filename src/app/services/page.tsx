'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData, Service } from '@/data/services';
import { FaCheck, FaCopy, FaTimes, FaQrcode } from 'react-icons/fa';

const EMAIL_ADDRESS = 'duchuytv2102@gmail.com'

export default function ServicesPage() {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(EMAIL_ADDRESS);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            className='h-full overflow-y-auto px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-12 pb-32'
            initial={{ y: '-200vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="flex flex-col gap-12 max-w-[90rem] mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                        My Services
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans">
                        High quality services for personal and business needs. Explore my offerings below and let&apos;s build something amazing together.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col p-8 rounded-xl bg-gray-50 dark:bg-gray-900/30 border border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-500 mb-2 block font-mono">
                                        {service.type}
                                    </span>
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{service.title}</h3>
                                </div>
                                <span className="text-lg font-medium text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800/50 px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700">
                                    {service.price}
                                </span>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow font-sans text-sm leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <FaCheck className="text-cyan-500 mt-1 flex-shrink-0" size={14} />
                                        <span className="text-sm text-gray-700 dark:text-gray-300 font-sans">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => setSelectedService(service)}
                                className="w-full py-3 px-4 rounded-lg font-medium border border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:text-white transition-colors duration-300"
                            >
                                Buy Now / Order
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-zinc-200 dark:border-zinc-800"
                        >
                            <div className="relative p-6 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-900/50">
                                <h3 className="text-xl font-bold">Order: {selectedService.title}</h3>
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            <div className="p-6 flex flex-col items-center gap-6">
                                {/* QR Code Placeholder */}
                                <div className="w-48 h-48 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-zinc-300 dark:border-zinc-700">
                                    <FaQrcode size={48} className="text-zinc-400 mb-2" />
                                    <span className="text-sm text-zinc-500 font-medium">Bank QR Code</span>
                                </div>

                                <div className="w-full space-y-4">
                                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-xl flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-zinc-500 mb-1">Zalo Contact & Phone</p>
                                            <p className="font-semibold text-lg">0123 456 789</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleCopyEmail}
                                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors font-medium"
                                    >
                                        {copied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                                        {copied ? 'Email Copied!' : 'Copy Email Address'}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
