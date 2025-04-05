import { Task } from '@/types/Task';

export default function Checkbox({ task }: { task: Task }) {
    return <input type="checkbox" checked={task.completed} />;
}
