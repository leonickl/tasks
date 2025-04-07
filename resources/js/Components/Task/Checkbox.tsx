import { Task } from '@/types/Task';
import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Checkbox({ task }: { task: Task }) {
    const [completed, setCompleted] = useState(task.completed);

    useEffect(() => {
        router.post(route('task.complete', task.id), { completed });
    }, [completed]);

    return (
        <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
        />
    );
}
