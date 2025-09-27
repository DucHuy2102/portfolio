'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';

export default function NavLink({ href, title }) {
    const pathName = usePathname();
    const isActiveLink = pathName === href;
    const baseClasses = 'text-lg font-medium';

    if (isActiveLink) {
        return (
            <Button asChild variant='default' className={baseClasses}>
                <Link href={href}>{title}</Link>
            </Button>
        );
    } else {
        return (
            <Link href={href} className={baseClasses}>
                {title}
            </Link>
        );
    }
}
