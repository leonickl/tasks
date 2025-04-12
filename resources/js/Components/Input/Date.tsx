import Input from './Input';

export default function Date({
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
            type="date"
            value={value}
            setValue={setValue}
            className={className}
        />
    );
}
