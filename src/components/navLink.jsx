'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, title }) {
    const pathName = usePathname();
    const isActiveLink = pathName === href;

    return (
        <Link
            href={href}
            className={isActiveLink ? 'bg-black text-white rounded-md py-[5px] px-2' : null}
        >
            {title}
        </Link>
    );
}
