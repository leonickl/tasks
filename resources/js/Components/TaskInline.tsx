import Priority from '@/Priority';
import { Task } from '@/types/Task';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { ArrowsCollapse, ArrowsExpand } from 'react-bootstrap-icons';
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
    const [showChildren, setShowChildren] = useState(true);

    function toggleChildren() {
        setShowChildren((old) => !old);
    }

    return (
        <div>
            <div
                className={`grid w-full grid-cols-[5rem_auto_10rem_5rem] ${new Priority(task.priority).color()} ${border && 'border-t'} py-5`}
                style={{ marginLeft: `${indent * 40}px` }}
            >
                <div className="relative">
                    {task.children.length > 0 && (
                        <div
                            onClick={toggleChildren}
                            className="cursor-pointer absolute -left-14 h-9 top-1/2 grid -translate-y-1/2 items-center justify-center bg-blue-100 text-blue-700 border border-blue-700 p-2 rounded-xl aspect-square"
                        >
                            {showChildren ? (
                                <ArrowsCollapse height={20} />
                            ) : (
                                <ArrowsExpand height={20} />
                            )}
                        </div>
                    )}

                    <Checkbox task={task} />
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div>{task.summary}</div>

                        {task.tags.map((tag) => (
                            <Tag key={tag.id} tag={tag} />
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
                        key={child.id}
                        border={false}
                        task={child}
                        indent={indent + 1}
                    />
                ))}
        </div>
    );
}
