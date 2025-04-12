import { Clock } from 'react-bootstrap-icons';
import Date from '../Input/Date';
import Time from '../Input/Time';

export default function Due({
    dueDate,
    setDueDate,
    dueTime,
    setDueTime,
    className,
}: {
    dueDate: string;
    setDueDate: React.Dispatch<React.SetStateAction<string>>;
    dueTime: string;
    setDueTime: React.Dispatch<React.SetStateAction<string>>;
    className?: string | undefined;
}) {
    return (
        <div className="flex flex-row items-center gap-5 px-5">
            <Clock />

            <div className="flex flex-row justify-between gap-9">
                <div className="flex flex-row items-center gap-3">
                    <Date
                        value={dueDate}
                        setValue={setDueDate}
                        className={className}
                    />

                    <div>
                        <button
                            className="h-4 w-4 rounded-xl border-red-800 bg-red-500 text-center font-extrabold leading-3 text-white dark:border-red-500 dark:bg-red-800 dark:text-black"
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
                    <Time
                        value={dueTime}
                        setValue={setDueTime}
                        className={className}
                    />

                    <div>
                        <button
                            className="h-4 w-4 rounded-xl border-red-800 bg-red-500 text-center font-extrabold leading-3 text-white dark:border-red-500 dark:bg-red-800 dark:text-black"
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
