import { Tag } from '@/types/Tag';
import { useMemo, useState } from 'react';
import { CircleFill } from 'react-bootstrap-icons';
import Text from '../Input/Text';

export default function Tags({
    all,
    tags,
    setTags,
}: {
    all: Tag[];
    tags: Tag[];
    setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}) {
    const [tagInput, setTagInput] = useState('');

    function toggleTag(tag: Tag) {
        if (tags.some((t) => t.id === tag.id)) {
            setTags(tags.filter((t) => t.id !== tag.id));
        } else {
            setTags([...tags, tag]);
        }
    }

    function newTag() {
        if (tagInput.trim() === '') return;
        // Dummy tag creation logic (replace with actual logic or callback if needed)
        const newId = Math.max(...all.map((t) => t.id), 0) + 1;
        const newTag: Tag = {
            id: newId,
            name: tagInput,
            color: '#777',
            icon: 'tag',
            nameWithoutPrefix: tagInput,
        };
        setTags((tags) => [...tags, newTag]);
        setTagInput('');
    }

    const filteredTags = useMemo(() => {
        return all.filter(
            (tag) =>
                tagInput.trim() === '' ||
                tag.name.toLowerCase().includes(tagInput.toLowerCase()),
        );
    }, [all, tagInput]);

    return (
        <div className="flex flex-col gap-4">
            <label className="flex items-center gap-2">
                <Text
                    value={tagInput}
                    setValue={setTagInput}
                    placeholder="Search or create tag"
                />

                <button
                    type="button"
                    onClick={newTag}
                    className="text-white hover:text-green-400"
                    title="Create new tag"
                >
                    <CircleFill />
                </button>
            </label>

            <div className="flex flex-wrap gap-2">
                {filteredTags.map((tag) => {
                    const isSelected = tags.some((t) => t.id === tag.id);

                    return (
                        <div
                            key={tag.id}
                            className={`flex cursor-pointer items-center gap-1 rounded px-2 py-1 text-sm text-white`}
                            style={{ backgroundColor: tag.color }}
                            onClick={() => toggleTag(tag)}
                        >
                            <i className={`bi ${tag.icon}`} />
                            {tag.nameWithoutPrefix}
                            {isSelected && (
                                <span className="ml-1 text-lg text-white/80 hover:text-white">
                                    &times;
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
