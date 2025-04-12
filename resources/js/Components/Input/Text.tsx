import Input from './Input';

export default function Text({
    value,
    setValue,
    placeholder,
    className,
}: {
    value: string;
    setValue: (arg: string) => void;
    placeholder: string;
    className?: string | undefined;
}) {
    return (
        <Input
            type="text"
            value={value}
            setValue={setValue}
            placeholder={placeholder}
            className={className}
        />
    );
}
