import Textarea from '../Input/Textarea';

export default function Summary({
    summary,
    setSummary,
    className,
}: {
    summary: string;
    setSummary: React.Dispatch<React.SetStateAction<string>>;
    className: string;
}) {
    return (
        <Textarea
            value={summary}
            setValue={setSummary}
            placeholder="Summary"
            className={className}
        />
    );
}
