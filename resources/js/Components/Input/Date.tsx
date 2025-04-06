import Input from './Input';

export default function Date({
    value,
    setValue,
}: {
    value: string;
    setValue: (arg: string) => void;
}) {
    return <Input type="date" value={value} setValue={setValue} />;
}
