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
    return type === 'textarea' ? (
        <div
            contentEditable={true}
            onChange={(e) => setValue(e.target.textContent)}
            className={className ?? classes}
            // placeholder={placeholder}
        >
            {value}
        </div>
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
