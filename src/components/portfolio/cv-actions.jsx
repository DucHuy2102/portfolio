'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { FaEye, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';

export default function CVActions() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-wrap justify-center items-center gap-4 mt-2 z-10">
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1cnB5OuqqNMhg6xgDKN8bzm8sZONSB8v0/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shadow-sm text-sm font-medium"
            >
                <FaExternalLinkAlt />
                <span>View My CV</span>
            </motion.a>

            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/cv.pdf"
                download="NguyenDucHuy_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm text-sm font-medium"
            >
                <FaDownload />
                <span>Download CV</span>
            </motion.a>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-4xl w-[95vw] h-[80vh] flex flex-col p-0 overflow-hidden bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 rounded-2xl sm:rounded-2xl">
                    <DialogHeader className="p-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
                        <DialogTitle className="text-xl font-gelasio">Curriculum Vitae</DialogTitle>
                        <DialogDescription className="sr-only">Viewing CV PDF</DialogDescription>
                    </DialogHeader>
                    <div className="flex-1 w-full relative bg-zinc-100 dark:bg-zinc-900">
                        <iframe
                            src="/cv.pdf"
                            className="w-full h-full border-none"
                            title="CV PDF Viewer"
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
