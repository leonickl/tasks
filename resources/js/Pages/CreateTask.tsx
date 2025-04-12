import { PageProps } from '@/types';
import { Calendar as C } from '@/types/Calendar';
import { Tag } from '@/types/Tag';
import { router } from '@inertiajs/react';
import TaskForm from './TaskForm';

export default function CreateTask({
    auth,
    allTags,
    defaultCalendar,
    calendars,
    csrf,
}: PageProps<{ allTags: Tag[]; defaultCalendar: C; calendars: C[] }>) {
    return (
        <TaskForm
            csrf={csrf}
            title="Create New Task"
            auth={auth}
            allTags={allTags}
            defaultCalendar={defaultCalendar}
            calendars={calendars}
            save={(data) => router.post(route('task.store'), { ...data })}
        />
    );
}
