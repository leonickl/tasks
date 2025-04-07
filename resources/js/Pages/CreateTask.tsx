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
}: PageProps<{ allTags: Tag[]; defaultCalendar: C; calendars: C[] }>) {
    return (
        <TaskForm
            title="Create New Task"
            auth={auth}
            allTags={allTags}
            defaultCalendar={defaultCalendar}
            calendars={calendars}
            save={(data) => router.post(route('task.update'), { ...data })}
        />
    );
}
