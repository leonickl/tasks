import { Task } from '@/types/Task';
import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function Checkbox({ task }: { task: Task }) {
    const [completed, setCompleted] = useState(task.completed);

    function onChange(newStatus: boolean) {
        setCompleted(newStatus);
        router.post(route('task.complete', task.id), { completed: newStatus });
    }

    return (
        <input
            type="checkbox"
            checked={completed}
            onChange={(e) => onChange(e.target.checked)}
        />
    );
}
