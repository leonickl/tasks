import Input from './Input';

export default function Time({
    value,
    setValue,
}: {
    value: string;
    setValue: (arg: string) => void;
}) {
    return (
        <Input
            type="time"
            value={value}
            setValue={setValue}
        />
    );
}
