import { Calendar as C } from '@/types/Calendar';
import { ListCheck } from 'react-bootstrap-icons';

export default function Calendar() {
    const defaultCalendar: C = {};
    const calendars: C[] = [];

    return (
        <div>
            <ListCheck />

            <div>
                <select name="calendar_id">
                    {defaultCalendar && (
                        <option value={defaultCalendar.id}>
                            {defaultCalendar.name}
                        </option>
                    )}

                    {calendars.map((calendar) => (
                        <option value={calendar.id}>{calendar.name}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}
