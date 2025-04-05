import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Filter as F } from '@/types/Filter';

export default function Filter({ filter }: PageProps<{ filter: F }>) {
    return (
        <App title={`Filter ${filter.name || '#' + filter.id}`}>
            <form action={route('filters.update', filter.id)} method="post">
                <input name="name" value="{{ $filter->name }}" />
                <textarea name="filter" value={filter.filter} />

                <input type="submit" value="Save" />
            </form>
        </App>
    );
}
