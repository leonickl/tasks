import Input from "./Input";

export default function Textarea({
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
            type="textarea"
            value={value}
            setValue={setValue}
            placeholder={placeholder}
        />
    );
}
