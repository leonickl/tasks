import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Filter } from '@/types/Filter';
import { router } from '@inertiajs/react';

export default function Filters({
    filters,
    predefined,
}: PageProps<{ filters: Filter[]; predefined: object }>) {
    return (
        <App
            title="Filters"
            nav={[
                <button
                    onClick={() => router.post(route('filters.store'))}
                    className="w-max rounded-md border border-blue-900 bg-blue-700 px-5 py-3"
                >
                    Create New Filter
                </button>,
            ]}
        >
            <div className="grid grid-cols-3 gap-0">
                {Object.entries(predefined).map(([url, name]) => (
                    <>
                        <b className="border border-gray-400 px-5 py-2 flex flex-col justify-center items-center">
                            <div>{name}</div>
                        </b>
                        <div className="border border-gray-400 px-5 py-2"></div>
                        <div className="border border-gray-400 p-5 text-center">
                            <a
                                className="w-max rounded-md border border-blue-950 bg-blue-800 px-3 py-2"
                                href={route(url)}
                            >
                                Show
                            </a>
                        </div>
                    </>
                ))}

                {filters.map((filter) => (
                    <>
                        <b className="border border-gray-400 px-5 py-2 flex flex-col justify-center items-center">
                            <div>{filter.name}</div>
                        </b>
                        <div className="border border-gray-400 p-5 text-center">
                            <a
                                className="w-max rounded-md border border-blue-950 bg-blue-800 px-3 py-2"
                                href={route('filters.show', filter.id)}
                            >
                                Edit
                            </a>
                        </div>
                        <div className="border border-gray-400 p-5 text-center">
                            <a
                                className="w-max rounded-md border border-blue-950 bg-blue-800 px-3 py-2"
                                href={route('tasks.filter', filter.id)}
                            >
                                Show
                            </a>
                        </div>
                    </>
                ))}
            </div>
        </App>
    );
}
