import Priority from '@/Priority';
import { Task } from '@/types/Task';
import { useState } from 'react';

export default function Checkbox({ task }: { task: Task }) {
    const [completed, setCompleted] = useState(task.completed);

    function toggle() {
        setCompleted((old) => !old);
    }

    function onChange(newStatus: boolean) {
        setCompleted(newStatus);

        alert(task.summary);

        // router.post(
        //     route('task.complete', task.id),
        //     { completed: newStatus },
        //     {
        //         preserveState: true, // Optional: This keeps the current page state while processing the request.
        //         onSuccess: () => {
        //             console.log(
        //                 'POST request was successful, no redirect occurred',
        //             );
        //         },
        //         onError: (errors) => {
        //             console.error('There was an error:', errors);
        //         },
        //     },
        // );
    }

    const priority = new Priority(task.priority);

    return (
        <div>
            <label
                htmlFor="custom-checkbox"
                className={`border-accent-dark relative m-[3px] flex h-[15px] w-[15px] cursor-pointer items-center justify-center rounded-[3px] border-2 bg-transparent text-lg text-gray-500`}
                style={{
                    borderColor: priority.color(),
                    backgroundColor: completed
                        ? priority.color()
                        : 'transparent',
                    fontWeight: 'bold',
                }}
                onClick={toggle}
            >
                {completed ? <>&times;</> : <></>}
            </label>
        </div>
    );
}
