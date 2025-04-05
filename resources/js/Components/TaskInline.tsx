import Priority from '@/Priority';
import { Task } from '@/types/Task';
import { Link } from '@inertiajs/react';
import Due from './Due';
import Markdown from './Markdown';
import Tag from './Tag';
import Checkbox from './Task/Checkbox';

export default function TaskInline({
    task,
    indent = 0,
}: {
    task: Task;
    indent?: number;
}) {
    function toggleChildren() {}

    const showChildren = true;

    return (
        <div>
            {task.children.length > 0 && (
                <div onClick={toggleChildren}>{showChildren ? '-' : '+'}</div>
            )}

            <div
                className={new Priority(task.priority).color()}
                style={{ marginLeft: `${indent * 40}px` }}
            >
                <Checkbox task={task} />

                <div>
                    <div>
                        <div>
                            <div>{task.summary}</div>

                            {task.tags.map((tag) => (
                                <Tag tag={tag} />
                            ))}

                            {indent === 0 && task.parent && (
                                <>Parent: {task.parent.summary}</>
                            )}
                        </div>
                    </div>

                    {task.description && (
                        <div>
                            <Markdown>{task.description}</Markdown>
                        </div>
                    )}
                </div>

                <Due task={task} />

                <Link href={route('task', task.id)}>#{task.id}</Link>
            </div>

            {showChildren &&
                task.children.map((child) => (
                    <TaskInline auth={auth} task={child} indent={indent + 1} />
                ))}
        </div>
    );
}
