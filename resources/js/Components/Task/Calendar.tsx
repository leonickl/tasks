import { Calendar as C } from '@/types/Calendar';
import { ListCheck } from 'react-bootstrap-icons';
import Select from '../Input/Select';

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
                <Select
                    options={calendars.map((cal) => ({
                        value: cal.id,
                        label: cal.name,
                    }))}
                    value={calendar}
                    setValue={setCalendar}
                />
            </div>
        </div>
    );
}
