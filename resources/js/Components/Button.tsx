import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

export default function Button({
    href,
    children,
}: {
    href: string;
    children: ReactNode;
}) {
    return (
        <Link
            href={href}
            className="rounded-md border border-blue-900 bg-blue-700 px-5 py-3 w-max"
        >
            {children}
        </Link>
    );
}
