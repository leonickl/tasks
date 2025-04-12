import { classes } from './Input';

export default function Select({
    options,
    value,
    setValue,
    className,
}: {
    options: { value: number; label: string }[];
    value: number;
    setValue: (arg: number) => void;
    className?: string | undefined;
}) {
    return (
        <select
            className={className ?? classes}
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
