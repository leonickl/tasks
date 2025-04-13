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
    const [tags, setTags] = useState<string[]>(
        prefill?.tags.map((tag) => tag.name) ?? [],
    );
    const [description, setDescription] = useState<string>(
        prefill?.description ?? '',
    );

    function HR() {
        return <hr className="border-gray-600" />;
    }

    const classes =
        'border-none resize-none w-full px-2 text-gray-800 dark:bg-gray-800 dark:text-white dark:focus:bg-gray-700 focus:bg-gray-100 focus:outline-none focus:ring-0 px-5 py-3';

    return (
        <App title={title}>
            <div className="flex flex-col border border-gray-600">
                {prefill === undefined && (
                    <>
                        <Calendar
                            calendars={calendars}
                            calendar={calendar}
                            setCalendar={setCalendar}
                            className={classes}
                        />

                        <HR />
                    </>
                )}

                <Summary
                    summary={summary}
                    setSummary={setSummary}
                    className={classes}
                />

                <HR />

                <Due
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    dueTime={dueTime}
                    setDueTime={setDueTime}
                    className={classes}
                />

                <HR />

                <Priority priority={priority} setPriority={setPriority} />

                <HR />

                <Tags
                    tags={tags}
                    setTags={setTags}
                    all={allTags}
                    className={classes}
                />

                <HR />

                <Description
                    description={description}
                    setDescription={setDescription}
                    className={classes}
                />

                <HR />

                <div className='flex justify-center py-3'>
                    <Button
                        action={() =>
                            save({
                                calendar,
                                summary,
                                description,
                                dueDate,
                                dueTime,
                                priority,
                                tags,
                            })
                        }
                        small
                    >
                        Save
                    </Button>
                </div>
            </div>
        </App>
    );
}
