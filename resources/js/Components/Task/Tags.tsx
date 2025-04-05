import { Tag } from '@/types/Tag';
import { useState } from 'react';
import { CircleFill } from 'react-bootstrap-icons';

export default function Tags({
    all,
    selected = [],
}: {
    all: Tag[];
    selected?: Tag[];
}) {
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState(selected);

    function newTag() {}

    return (
        <div>
            <div>
                <label>
                    <input
                        size={20}
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                    />
                    <span onClick={newTag}>
                        <CircleFill />
                    </span>
                </label>

                <div>
                    {all.map((tag) => (
                        <label style={{ backgroundColor: tag.color }}>
                            <input
                                id="tag-{{ $tag->id }}"
                                type="checkbox"
                                value="{{ $tag->id }}"
                                name="tags[]"
                            />
                            <i className="bi {{ $tag->icon }}"></i>{' '}
                            {tag.nameWithoutPrefix}
                            <label htmlFor="tag-{{ $tag->id }}">&times;</label>
                        </label>
                    ))}
                </div>

                {/* <script>
        document.querySelector('.tag-input').addEventListener('keyup', () => {
            const search = document.querySelector('.tag-input').value

            let visible = 0

            document.querySelectorAll('.tag-edit').forEach(elem => {
                if (search.trim() !== '' && elem.innerText.includes(search)) {
                    elem.classList.add('hidden')
                } else {
                    elem.classList.remove('hidden')
                    visible++
                }
            })
        })
    </script> */}
            </div>
        </div>
    );
}
