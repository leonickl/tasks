import fetcher from '@/fetcher';
import Priority from '@/Priority';
import { Task } from '@/types/Task';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Checkbox({ task, csrf }: { task: Task; csrf: string }) {
    const [completed, setCompleted] = useState(task.completed);
    const props = usePage().props;

    function toggle() {
        setCompleted((old) => !old);

        fetcher({
            url: route('task.complete', task.id),
            body: { completed: !completed },
            csrf,
        })
            .then((data: Task) =>
                data.completed
                    ? toast.success('Completed task ' + data.id)
                    : toast.success('Uncompleted task' + data.id),
            )
            .catch((error) => toast.error(error.message));
    }

    const priority = new Priority(task.priority);

    return (
        <div>
            <label
                htmlFor="custom-checkbox"
                className={`border-accent-dark relative m-[3px] box-content flex h-[15px] w-[15px] cursor-pointer items-center justify-center rounded-[3px] border-2 bg-transparent text-2xl font-extrabold text-gray-500`}
                style={{
                    borderColor: priority.color(),
                    backgroundColor: completed
                        ? priority.color()
                        : 'transparent',
                    color: priority.textColor(),
                }}
                onClick={toggle}
            >
                {completed ? <>&times;</> : <></>}
            </label>
        </div>
    );
}

//  & .checkbox {
//         & input {
//             display: none;
//         }

//         & .wrapper {
//             display: block;
//             width: 15px;
//             height: 15px;
//             border-radius: 3px;
//             margin: 3px;
//             cursor: pointer;
//             font-weight: bold;
//             font-size: larger;
//             background: transparent;
//             color: transparent;
//             border: 2px var(--accent-dark) solid;

//             & span {
//                 background: transparent;
//                 color: transparent;
//                 cursor: pointer;
//                 position: relative;
//                 top: -6px;
//                 left: 2px;
//                 user-select: none;
//             }
//         }

//         & input:checked ~ .wrapper {
//             & span {
//                 color: white;
//                 line-height: 1.4;
//             }
//         }
//     }
