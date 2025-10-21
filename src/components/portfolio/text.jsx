'use client';
import { useState, useEffect } from 'react';

export default function TypingText({ texts, speed = 100, pause = 1500 }) {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];

        let typingTimeout;
        if (!isDeleting && charIndex < currentText.length) {
            typingTimeout = setTimeout(() => {
                setDisplayText((prev) => prev + currentText.charAt(charIndex));
                setCharIndex((prev) => prev + 1);
            }, speed);
        } else if (isDeleting && charIndex > 0) {
            typingTimeout = setTimeout(() => {
                setDisplayText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            }, speed / 2);
        } else if (!isDeleting && charIndex === currentText.length) {
            typingTimeout = setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

    return (
        <span className='font-bold text-3xl text-teal-500 dark:text-yellow-400'>
            {displayText}
            <span className='animate-pulse'>|</span>
        </span>
    );
}
