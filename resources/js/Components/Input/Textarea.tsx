import Input from './Input';

export default function Textarea({
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
            type="textarea"
            value={value}
            setValue={setValue}
            placeholder={placeholder}
            className={className}
        />
    );
}
