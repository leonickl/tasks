import Priority from '@/Priority';
import { Task } from '@/types/Task';
import { Link } from '@inertiajs/react';
import Markdown from './Markdown';
import Tag from './Tag';
import Checkbox from './Task/Checkbox';

export default function TaskInline({
    task,
    border,
    indent = 0,
}: {
    task: Task;
    border: boolean;
    indent?: number;
}) {
    function toggleChildren() {}

    const showChildren = true;

    console.log(task);

    return (
        <div>
            {task.children.length > 0 && (
                <div onClick={toggleChildren}>{showChildren ? '-' : '+'}</div>
            )}

            <div
                className={`grid w-full grid-cols-[5rem_30rem_10rem_5rem] ${new Priority(task.priority).color()} ${border && 'border-t'} py-5`}
                style={{ marginLeft: `${indent * 40}px` }}
            >
                <div>
                    <Checkbox task={task} />
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div>{task.summary}</div>

                        {task.tags.map((tag) => (
                            <Tag tag={tag} />
                        ))}

                        {indent === 0 && task.parent && (
                            <>Parent: {task.parent.summary}</>
                        )}
                    </div>
                </div>

                <div>{task.dueFormatted}</div>

                <Link href={route('task', task.id)}>#{task.id}</Link>

                {task.description && (
                    <>
                        <div></div>
                        <div className="col-span-3 mt-5 text-gray-500">
                            <Markdown>{task.description}</Markdown>
                        </div>
                    </>
                )}
            </div>

            {showChildren &&
                task.children.map((child) => (
                    <TaskInline
                        border={false}
                        task={child}
                        indent={indent + 1}
                    />
                ))}
        </div>
    );
}
