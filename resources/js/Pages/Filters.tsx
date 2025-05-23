import Button from '@/Components/Button';
import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Filter } from '@/types/Filter';
import { router } from '@inertiajs/react';
import React from 'react';

export default function Filters({
    filters,
    predefined,
}: PageProps<{ filters: Filter[]; predefined: object }>) {
    return (
        <App
            title="Filters"
            nav={[
                <Button action={() => router.post(route('filters.store'))}>
                    Create New Filter
                </Button>,
            ]}
        >
            {/* TODO */}
            <div className="grid grid-cols-3 gap-0">
                {Object.entries(predefined).map(([url, name]) => (
                    <React.Fragment key={url}>
                        <b className="flex flex-col items-center justify-center border border-gray-400 px-5 py-2">
                            <div>{name}</div>
                        </b>
                        <div className="border border-gray-400 px-5 py-2"></div>
                        <div className="border border-gray-400 p-5 text-center">
                            <Button small action={route(url)}>
                                Show
                            </Button>
                        </div>
                    </React.Fragment>
                ))}

                {filters.map((filter) => (
                    <React.Fragment key={filter.id}>
                        <b className="flex flex-col items-center justify-center border border-gray-400 px-5 py-2">
                            <div>{filter.name}</div>
                        </b>
                        <div className="border border-gray-400 p-5 text-center">
                            <Button
                                small
                                action={route('filters.show', filter.id)}
                            >
                                Edit
                            </Button>
                        </div>
                        <div className="border border-gray-400 p-5 text-center">
                            <Button
                                small
                                action={route('tasks.filter', filter.id)}
                            >
                                Show
                            </Button>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </App>
    );
}
