import { Tag } from '@/types/Tag';
import React, { useMemo, useState } from 'react';
import Text from '../Input/Text';

export default function Tags({
    all,
    tags,
    setTags,
    className,
}: {
    all: Tag[];
    tags: string[];
    setTags: React.Dispatch<React.SetStateAction<string[]>>;
    className?: string | undefined;
}) {
    const [tagInput, setTagInput] = useState('');

    function toggleTag(tag: string) {
        if (tags.some((t) => t === tag)) {
            setTags((old) => old.filter((t) => t !== tag));
        } else {
            setTags((old) => [...old, tag]);
        }
    }

    function newTag() {
        if (tagInput.trim() === '') return;

        setTags((old) => [...old, tagInput]);

        setTagInput('');
    }

    const filteredTags = useMemo(() => {
        return all.filter(
            (tag) =>
                tagInput.trim() === '' ||
                tag.name.toLowerCase().includes(tagInput.toLowerCase()),
        );
    }, [all, tagInput]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
    }

    return (
        <div className="flex flex-col gap-3">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <Text
                    value={tagInput}
                    setValue={setTagInput}
                    placeholder="Search or create tag"
                    className={className}
                />

                <button
                    type="submit"
                    onClick={newTag}
                    className="h-6 w-6 rounded-md bg-gray-500 font-extrabold text-white hover:bg-green-600"
                    title="Create new tag"
                >
                    +
                </button>
            </form>

            <div className="flex flex-wrap justify-evenly gap-2 px-5 py-3">
                {tags.map((tag) => {
                    const found = all.find((t) => t.name === tag);

                    return (
                        <div
                            key={tag}
                            className="flex cursor-pointer items-center gap-1 rounded px-2 py-1 text-sm text-slate-900"
                            onClick={() => toggleTag(tag)}
                            style={{
                                backgroundColor: found
                                    ? found.color
                                    : 'rgb(71 85 105)',
                            }}
                        >
                            {found && <i className={`bi ${found.icon}`} />}

                            {tag}

                            <span className="ml-1 text-lg text-slate-900">
                                &times;
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
