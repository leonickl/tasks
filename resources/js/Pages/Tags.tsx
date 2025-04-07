import Tag from '@/Components/Tag';
import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Tag as T } from '@/types/Tag';

export default function Tags({
    title,
    tags,
}: PageProps<{ title: string; tags: T[] }>) {
    return (
        <App title={title}>
            <div className="flex flex-row flex-wrap justify-evenly gap-5">
                {tags.map((tag) => (
                    <Tag key={tag.id} tag={tag} />
                ))}
            </div>
        </App>
    );
}
