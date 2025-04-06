import Textarea from '../Input/Textarea';

export default function Summary({
    summary,
    setSummary,
}: {
    summary: string;
    setSummary: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <div className="flex flex-row items-center gap-5">
            <Textarea
                value={summary}
                setValue={setSummary}
                placeholder="Summary"
            />
        </div>
    );
}
