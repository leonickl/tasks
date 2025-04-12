import { Tag as T } from '@/types/Tag';
import { Link } from '@inertiajs/react';

export default function Tag({ tag }: { tag: T }) {
    return (
        <Link
            href={route('tag', tag.id)}
            style={{ backgroundColor: tag.color }}
            className="whitespace-nowrap rounded-md px-3 py-1 text-slate-500"
        >
            {tag.name}
        </Link>
    );
}
