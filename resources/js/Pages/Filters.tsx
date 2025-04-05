import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Filter } from '@/types/Filter';

export default function Filters({
    filters,
    predefined,
}: PageProps<{ filters: Filter[]; predefined: object }>) {
    return (
        <App title="Filters">
            <form action={route('filters.store')} method="post">
                <input type="submit" value="Create New Filter" />
            </form>

            <div>
                {Object.entries(predefined).map(([url, name]) => (
                    <div>
                        <b>{name}</b>
                        <a href={route(url)}>Show</a>
                    </div>
                ))}

                {filters.map((filter) => (
                    <div>
                        <b>{filter.name}</b>
                        <a href={route('filters.show', filter.id)}>Edit</a>
                        <a href={route('tasks.filter', filter.id)}>Show</a>
                    </div>
                ))}
            </div>
        </App>
    );
}
