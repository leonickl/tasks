import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';

export default function Button({
    action,
    children,
    small = false,
}: {
    action: string | (() => void);
    children: ReactNode;
    small?: boolean;
}) {
    const classes = `w-max rounded-md border border-blue-900 bg-blue-700 ${small ? 'px-3 py-1' : 'px-5 py-3'} text-gray-200`;

    return typeof action === 'string' ? (
        <Link href={action} className={classes}>
            {children}
        </Link>
    ) : (
        <button type="button" onClick={action} className={classes}>
            {children}
        </button>
    );
}
