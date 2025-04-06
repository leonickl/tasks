export const classes =
    'w-full rounded-md border border-gray-800 bg-gray-100 px-2 py-1 text-gray-800 dark:text-white dark:border-gray-400 dark:bg-gray-800';

export default function Input({
    type,
    value,
    setValue,
    placeholder,
}: {
    type: string;
    value: string;
    setValue: (arg: string) => void;
    placeholder?: string | undefined;
}) {
    return type === 'textarea' ? (
        <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={classes}
            placeholder={placeholder}
        />
    ) : (
        <input
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={classes}
            placeholder={placeholder}
        />
    );
}
