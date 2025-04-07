import { PageProps } from '@/types';
import { Calendar as C } from '@/types/Calendar';
import { Tag } from '@/types/Tag';
import { Task } from '@/types/Task';
import { router } from '@inertiajs/react';
import TaskForm from './TaskForm';

export default function EditTask({
    auth,
    allTags,
    defaultCalendar,
    calendars,
    task,
}: PageProps<{
    allTags: Tag[];
    defaultCalendar: C;
    calendars: C[];
    task: Task;
}>) {
    return (
        <TaskForm
            title={`Task #${task.id}`}
            auth={auth}
            allTags={allTags}
            defaultCalendar={defaultCalendar}
            calendars={calendars}
            prefill={task}
            save={(data) =>
                router.post(route('task.update', task.id), { ...data })
            }
        />
    );
}
