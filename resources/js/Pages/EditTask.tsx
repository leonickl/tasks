import Priority from '@/Components/Task/Priority';
import TagList from '@/Components/Task/Tags';
import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Tag } from '@/types/Tag';
import { Task } from '@/types/Task';
import { Clock, Flag, Tags, TextLeft } from 'react-bootstrap-icons';

export default function EditTask({
    task,
    tags,
}: PageProps<{ task: Task; tags: Tag[] }>) {
    return (
        <App title={`Task #${task.id}`}>
            <form action={route('task.update', task.id)} method="post">
                <div>
                    <textarea name="summary">{task.summary}</textarea>
                </div>

                <div>
                    <Clock />

                    <div>
                        <div>
                            <input
                                type="date"
                                name="due-date"
                                value={task.dueDate ?? ''}
                            />
                            <div>&times;</div>
                        </div>

                        <div>
                            <input
                                type="time"
                                name="due-time"
                                value={task.dueTime ?? ''}
                            />
                            <div>&times;</div>
                        </div>
                    </div>
                </div>

                <div>
                    <Flag />

                    <Priority />
                </div>

                <div>
                    <Tags />

                    <TagList all={tags} selected={task.tags} />
                </div>

                <div>
                    <TextLeft />

                    <div>
                        <textarea name="description">
                            {task.description}
                        </textarea>
                    </div>
                </div>

                <input type="submit" value="Save" />
            </form>

            {/* <script>
        function setVariableInputLength() {
            document.querySelectorAll('.variable-input-length').forEach(elem => {
                const action = () => {
                    elem.size = Math.max(elem.value.length, 5)
                }

                elem.addEventListener('blur', action)
                elem.addEventListener('change', action)
                elem.addEventListener('keyup', action)
                action()
            })
        }

        document.querySelectorAll('.grow-wrap').forEach(grower => {
            const textarea = grower.querySelector('textarea')

            textarea.addEventListener('input', () => {
                grower.dataset.replicatedValue = textarea.value
            })

            grower.dataset.replicatedValue = textarea.value
        })

        document.querySelector('[name="due-date"] ~ .remove-btn').addEventListener('click', () => {
            document.querySelector('[name="due-date"]').value = undefined
            document.querySelector('[name="due-time"]').value = undefined
        })

        document.querySelector('[name="due-time"] ~ .remove-btn').addEventListener('click', () => {
            document.querySelector('[name="due-time"]').value = undefined
        })

        setVariableInputLength()
    </script> */}
        </App>
    );
}
