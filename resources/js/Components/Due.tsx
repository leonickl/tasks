import { Task } from '@/types/Task';

export default function Due({ task }: { task: Task }) {
    return <>{task.due}</>;
}
