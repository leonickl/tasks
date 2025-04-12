import Text from '@/Components/Input/Text';
import Textarea from '@/Components/Input/Textarea';
import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Filter as F } from '@/types/Filter';
import { router } from '@inertiajs/react';
import React, { useState } from 'react';

export default function Filter({ filter }: PageProps<{ filter: F }>) {
    const [name, setName] = useState(filter.name);
    const [content, setContent] = useState(filter.filter);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        router.post(route('filters.update', filter.id), {
            name,
            filter: content,
        });
    }

    return (
        <App title={`Filter ${filter.name || '#' + filter.id}`}>
            <form onSubmit={handleSubmit}>
                <Text value={name} setValue={setName} placeholder="Name" />

                <Textarea
                    value={content}
                    setValue={setContent}
                    placeholder="[]"
                />

                <input type="submit" value="Save" />
            </form>
        </App>
    );
}
