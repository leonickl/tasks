import Priority from '@/Priority';
import { Task } from '@/types/Task';
import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function Checkbox({ task }: { task: Task }) {
    const [completed, setCompleted] = useState(task.completed);

    function onChange(newStatus: boolean) {
        setCompleted(newStatus);
        router.post(route('task.complete', task.id), { completed: newStatus });
    }

    const priority = new Priority(task.priority);

    return (
        <div className="relative">
            <input
                type="checkbox"
                id="custom-checkbox"
                checked={completed}
                onChange={(e) => onChange(e.target.checked)}
                className="peer hidden"
            />

            <label
                htmlFor="custom-checkbox"
                className="border-accent-dark m-[3px] flex h-[15px] w-[15px] cursor-pointer items-center justify-center rounded-[3px] border-2 bg-transparent text-lg font-bold text-transparent peer-checked:leading-[1.4] peer-checked:text-white"
                style={{ borderColor: priority.color() }}
            >
                <span className="pointer-events-none relative -top-[6px] left-[2px] select-none">
                    &times;
                </span>
            </label>
        </div>
    );
}
