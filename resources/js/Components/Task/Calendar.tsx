import { Calendar as C } from '@/types/Calendar';
import { ListCheck } from 'react-bootstrap-icons';

export default function Calendar({
    calendars,
    calendar,
    setCalendar,
}: {
    calendars: C[];
    calendar: number;
    setCalendar: React.Dispatch<React.SetStateAction<number>>;
}) {
    return (
        <div className="flex flex-row items-center gap-5">
            <ListCheck />

            <div>
                <select
                    name="calendar_id"
                    className="w-full rounded-md border border-gray-400 bg-gray-800"
                    value={calendar}
                    onChange={(e) => setCalendar(parseInt(e.target.value))}
                >
                    {calendars.map((calendar) => (
                        <option value={calendar.id}>{calendar.name}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}
