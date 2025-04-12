import Input from './Input';

export default function Time({
    value,
    setValue,
    className,
}: {
    value: string;
    setValue: (arg: string) => void;
    className?: string | undefined;
}) {
    return (
        <Input
            type="time"
            value={value}
            setValue={setValue}
            className={className}
        />
    );
}
