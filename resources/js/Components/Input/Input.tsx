import { useRef } from 'react';

export const classes =
    'w-full rounded-md border border-gray-800 bg-gray-100 px-2 py-1 text-gray-800 dark:text-white dark:border-gray-500 dark:bg-gray-800';

export default function Input({
    type,
    value,
    setValue,
    placeholder,
    className,
}: {
    type: string;
    value: string;
    setValue: (arg: string) => void;
    placeholder?: string | undefined;
    className?: string | undefined;
}) {
    const textareaRef = useRef(null);

    const handleChange = (e) => {
        setValue(e.target.value);

        if (!textareaRef.current) return;

        // Reset height to auto to shrink first
        textareaRef.current.style.height = 'auto';

        // Then set it to scrollHeight to expand
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    };

    if (textareaRef.current) {
        // Reset height to auto to shrink first
        textareaRef.current.style.height = 'auto';

        // Then set it to scrollHeight to expand
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }

    return type === 'textarea' ? (
        <textarea
            ref={textareaRef}
            rows={1}
            value={value}
            contentEditable={true}
            onChange={handleChange}
            className={className ?? classes}
            placeholder={placeholder}
            style={{
                width: '100%',
                overflow: 'hidden',
                resize: 'none', // prevent manual resizing
                lineHeight: '1.5',
            }}
        />
    ) : (
        <input
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={className ?? classes}
            placeholder={placeholder}
        />
    );
}
