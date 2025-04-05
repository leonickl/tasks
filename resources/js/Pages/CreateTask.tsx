import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Calendar as C } from '@/types/Calendar';
import { Tag } from '@/types/Tag';
import { useState } from 'react';
import Calendar from '../Components/Task/Calendar';
import Description from '../Components/Task/Description';
import Due from '../Components/Task/Due';
import Priority from '../Components/Task/Priority';
import Summary from '../Components/Task/Summary';
import Tags from '../Components/Task/Tags';

export default function CreateTask({
    allTags,
    defaultCalendar,
    calendars,
}: PageProps<{ allTags: Tag[]; defaultCalendar: C; calendars: C[] }>) {
    const [priority, setPriority] = useState<number>(0);
    const [calendar, setCalendar] = useState<number>(defaultCalendar.id);
    const [summary, setSummary] = useState<string>('');
    const [dueDate, setDueDate] = useState<string>(
        new Date().toISOString().split('T')[0],
    );
    const [dueTime, setDueTime] = useState<string>('');
    const [tags, setTags] = useState<Tag[]>([]);

    return (
        <App title="Create New Task">
            <form action={route('task.store')} method="post" className='flex flex-col gap-5'>
                <Calendar
                    calendars={calendars}
                    calendar={calendar}
                    setCalendar={setCalendar}
                />
                <Summary summary={summary} setSummary={setSummary} />
                <Due
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    dueTime={dueTime}
                    setDueTime={setDueTime}
                />
                <Priority priority={priority} setPriority={setPriority} />
                <Tags tags={tags} setTags={setTags} all={allTags} />
                <Description />

                <input
                    type="submit"
                    value="Save"
                    className="w-max rounded-md border border-blue-900 bg-blue-700 px-5 py-3"
                />
            </form>
        </App>
    );
}
