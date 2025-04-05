import { Clock } from 'react-bootstrap-icons';

export default function Due({
    dueDate,
    setDueDate,
    dueTime,
    setDueTime,
}: {
    dueDate: string;
    setDueDate: React.Dispatch<React.SetStateAction<string>>;
    dueTime: string;
    setDueTime: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <div className="flex flex-row items-center gap-5">
            <Clock />

            <div className="flex flex-row justify-between gap-9">
                <div className="flex flex-row items-center gap-3">
                    <input
                        type="date"
                        name="due-date"
                        className="w-full rounded-md border border-gray-400 bg-gray-800"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                    <div>
                        <button
                            className="h-6 w-6 rounded-2xl border-red-500 bg-red-800 text-center font-extrabold"
                            type="button"
                            onClick={() => {
                                setDueDate('');
                                setDueTime('');
                            }}
                        >
                            &times;
                        </button>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-3">
                    <input
                        type="time"
                        name="due-time"
                        className="w-full rounded-md border border-gray-400 bg-gray-800"
                        value={dueTime}
                        onChange={(e) => setDueTime(e.target.value)}
                    />
                    <div>
                        <button
                            className="h-6 w-6 rounded-2xl border-red-500 bg-red-800 text-center font-extrabold"
                            type="button"
                            onClick={() => setDueTime('')}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
