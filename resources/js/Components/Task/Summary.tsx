export default function Summary({
    summary,
    setSummary,
}: {
    summary: string;
    setSummary: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <div className="flex flex-row items-center gap-5">
            <textarea
                name="summary"
                className="w-full rounded-md border border-gray-400 bg-gray-800"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
            />
        </div>
    );
}
