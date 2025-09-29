'use client';
import ScrollIndicator from './button-scroll';

export default function Biography() {
    return (
        <div className='flex flex-col justify-center gap-5 3xl:gap-10'>
            <h1 className='font-bold text-3xl'>Biography</h1>
            <p className='text-lg leading-8'>
                From the first time I wrote my “Hello World”, I realized that programming is more
                than just solving problems—it is about <strong>creating experiences</strong> that
                connect people with technology. Throughout my journey, from university projects to
                real-world applications, I have always pursued the idea of writing
                <em>clean, maintainable, and impactful code</em>.
            </p>
            <p className='text-lg leading-8'>
                My background as a Software Engineering graduate gave me strong foundations in both{' '}
                <strong>frontend and backend</strong> development. I enjoy turning abstract ideas
                into products, whether it&apos;s an e-commerce platform, a personal blog, or an
                authentication system. Leading teams and collaborating on projects taught me the
                importance of <span className='text-blue-600 font-bold'>clarity</span>,{' '}
                <span className='text-amber-600 font-bold'>teamwork</span>, and{' '}
                <span className='text-rose-600 font-bold'>continuous growth</span>.
            </p>
            <span className='italic text-lg font-semibold'>
                Outside of coding, I stay inspired by running, playing football, and keeping up with
                technology trends—because creativity often comes from beyond the screen.
            </span>
            <ScrollIndicator direction='down' label='Scroll down' />
        </div>
    );
}
