import Button from '@/Components/Button';
import TaskInline from '@/Components/TaskInline';
import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Task } from '@/types/Task';

export default function Tasks({
    tasks,
    title,
    csrf,
}: PageProps<{ tasks: Task[]; title: string }>) {
    function sort(one: Task, other: Task) {
        return (
            (one.dueIso &&
                other.dueIso &&
                new Date(one.dueIso).getTime() -
                    new Date(other.dueIso).getTime()) ||
            one.priority - other.priority
        );
    }

    return (
        <App
            title={title}
            nav={[
                <Button action={route('task.create')}>Create New Task</Button>,
            ]}
        >
            <div className="px-20">
                {tasks.sort(sort).map((task, index) => (
                    <TaskInline
                        key={task.id}
                        task={task}
                        border={index !== 0}
                        csrf={csrf}
                    />
                ))}

                {tasks.length === 0 && <b>No Tasks Found</b>}
            </div>
        </App>
    );
}
