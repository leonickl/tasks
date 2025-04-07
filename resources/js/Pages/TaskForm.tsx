import Button from '@/Components/Button';
import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Calendar as C } from '@/types/Calendar';
import { Tag } from '@/types/Tag';
import { Task } from '@/types/Task';
import { useState } from 'react';
import Calendar from '../Components/Task/Calendar';
import Description from '../Components/Task/Description';
import Due from '../Components/Task/Due';
import Priority from '../Components/Task/Priority';
import Summary from '../Components/Task/Summary';
import Tags from '../Components/Task/Tags';

export default function TaskForm({
    title,
    allTags,
    defaultCalendar,
    calendars,
    save,
    prefill = undefined,
}: PageProps<{
    title: string;
    allTags: Tag[];
    defaultCalendar: C;
    calendars: C[];
    save: (arg: object) => void;
    prefill?: Task;
}>) {
    const [priority, setPriority] = useState<number>(prefill?.priority ?? 0);
    const [calendar, setCalendar] = useState<number>(
        prefill?.calendar_id ?? defaultCalendar.id,
    );
    const [summary, setSummary] = useState<string>(prefill?.summary ?? '');
    const [dueDate, setDueDate] = useState<string>(
        prefill?.dueDate ?? new Date().toISOString().split('T')[0],
    );
    const [dueTime, setDueTime] = useState<string>(prefill?.dueTime ?? '');
    const [tags, setTags] = useState<Tag[]>(prefill?.tags ?? []);
    const [description, setDescription] = useState<string>(
        prefill?.description ?? '',
    );

    return (
        <App title={title}>
            <div className="flex flex-col gap-5">
                {prefill === undefined && (
                    <Calendar
                        calendars={calendars}
                        calendar={calendar}
                        setCalendar={setCalendar}
                    />
                )}

                <Summary summary={summary} setSummary={setSummary} />

                <Due
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    dueTime={dueTime}
                    setDueTime={setDueTime}
                />

                <Priority priority={priority} setPriority={setPriority} />

                <Tags tags={tags} setTags={setTags} all={allTags} />

                <Description
                    description={description}
                    setDescription={setDescription}
                />

                <Button
                    action={() =>
                        save({
                            calendar,
                            summary,
                            description,
                            dueDate,
                            dueTime,
                            priority,
                        })
                    }
                >
                    Save
                </Button>
            </div>
        </App>
    );
}
