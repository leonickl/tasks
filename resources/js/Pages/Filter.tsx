import Text from '@/Components/Input/Text';
import Textarea from '@/Components/Input/Textarea';
import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Filter as F } from '@/types/Filter';
import { router } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

type Item = {
    type: string;
    value: string;
    bool: 'and' | 'or';
};

export default function Filter({ filter }: PageProps<{ filter: F }>) {
    const [name, setName] = useState(filter.name);
    const [content, setContent] = useState(filter.filter);

    const [parsed, setParsed] = useState<Item[] | undefined>();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        router.post(route('filters.update', filter.id), {
            name,
            filter: content,
        });
    }

    useEffect(() => {
        try {
            setParsed(JSON.parse(content));
        } catch {
            setParsed(undefined);
        }
    }, [content]);

    return (
        <App title={`Filter ${filter.name || '#' + filter.id}`}>
            <form onSubmit={handleSubmit}>
                <Text value={name} setValue={setName} placeholder="Name" />

                <Textarea
                    value={content}
                    setValue={setContent}
                    placeholder="[]"
                />

                <div className='my-5'>
                    {!parsed && 'invalid'}

                    {parsed &&
                        parsed.map((item) => (
                            <p>
                                <em>{item.bool || 'and'} </em>

                                <b>{item.type}: </b>
                                {item.value}
                            </p>
                        ))}
                </div>

                <input type="submit" value="Save" />
            </form>
        </App>
    );
}
