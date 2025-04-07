import Button from '@/Components/Button';
import TaskInline from '@/Components/TaskInline';
import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Task } from '@/types/Task';

export default function Tasks({
    tasks,
    title,
}: PageProps<{ tasks: Task[]; title: string }>) {
    return (
        <App
            title={title}
            nav={[
                <Button action={route('task.create')}>Create New Task</Button>,
            ]}
        >
            <div className="px-20">
                {tasks.map((task, index) => (
                    <TaskInline
                        key={task.id}
                        task={task}
                        border={index !== 0}
                    />
                ))}

                {tasks.length === 0 && <b>No Tasks Found</b>}
            </div>
        </App>
    );
}
