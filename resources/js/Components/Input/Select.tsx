import { classes } from './Input';

export default function Select({
    options,
    value,
    setValue,
}: {
    options: { value: number; label: string }[];
    value: number;
    setValue: (arg: number) => void;
}) {
    return (
        <select
            className={classes}
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
