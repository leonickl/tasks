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
    const [parsed, setParsed] = useState<Item[]>([]);

    useEffect(() => {
        try {
            const parsedJson = JSON.parse(content);
            if (Array.isArray(parsedJson)) {
                setParsed(parsedJson);
            } else {
                setParsed([]);
            }
        } catch {
            setParsed([]);
        }
    }, [content]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        // Ensure content matches parsed
        const jsonString = JSON.stringify(parsed);
        setContent(jsonString);

        router.post(route('filters.update', filter.id), {
            name,
            filter: jsonString,
        });
    }

    function updateItem(index: number, updated: Partial<Item>) {
        const newItems = [...parsed];
        newItems[index] = { ...newItems[index], ...updated };
        setParsed(newItems);
    }

    function removeItem(index: number) {
        const newItems = parsed.filter((_, i) => i !== index);
        setParsed(newItems);
    }

    function addItem() {
        setParsed([...parsed, { type: '', value: '', bool: 'and' }]);
    }

    return (
        <App title={`Filter ${filter.name || '#' + filter.id}`}>
            <form onSubmit={handleSubmit}>
                <Text value={name} setValue={setName} placeholder="Name" />

                <div className="my-5 space-y-4">
                    {parsed.length === 0 && (
                        <p className="text-red-500">No valid filter items</p>
                    )}

                    {parsed.map((item, index) => (
                        <div
                            key={index}
                            className="space-y-2 rounded border bg-gray-50 p-4"
                        >
                            <div className="flex gap-2">
                                <select
                                    value={item.bool}
                                    onChange={(e) =>
                                        updateItem(index, {
                                            bool: e.target.value as
                                                | 'and'
                                                | 'or',
                                        })
                                    }
                                    className="rounded border p-1"
                                >
                                    <option value="and">and</option>
                                    <option value="or">or</option>
                                </select>

                                <select
                                    value={item.type}
                                    onChange={(e) =>
                                        updateItem(index, {
                                            type: e.target.value,
                                        })
                                    }
                                    className="rounded border p-1"
                                >
                                    <option value="">Type</option>
                                    <option value="completed">completed</option>
                                    <option value="tag">tag</option>
                                    <option value="person">person</option>
                                    <option value="calendar">calendar</option>
                                </select>

                                <input
                                    type="text"
                                    value={item.value}
                                    onChange={(e) =>
                                        updateItem(index, {
                                            value: e.target.value,
                                        })
                                    }
                                    placeholder="Value"
                                    className="flex-1 rounded border p-1"
                                />

                                <button
                                    type="button"
                                    onClick={() => removeItem(index)}
                                    className="text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={addItem}
                        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    >
                        Add Filter Item
                    </button>
                </div>

                <Textarea
                    value={JSON.stringify(parsed, null, 2)}
                    setValue={(v) => {
                        setContent(v);
                        try {
                            const temp = JSON.parse(v);
                            setParsed(Array.isArray(temp) ? temp : []);
                        } catch {
                            // ignore
                        }
                    }}
                    placeholder="[]"
                />

                <input
                    type="submit"
                    value="Save"
                    className="mt-4 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                />
            </form>
        </App>
    );
}
