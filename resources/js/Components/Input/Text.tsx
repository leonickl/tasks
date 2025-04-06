import Input from './Input';

export default function Text({
    value,
    setValue,
    placeholder,
}: {
    value: string;
    setValue: (arg: string) => void;
    placeholder: string;
}) {
    return (
        <Input
            type="text"
            value={value}
            setValue={setValue}
            placeholder={placeholder}
        />
    );
}
