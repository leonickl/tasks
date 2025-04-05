import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Tag } from '@/types/Tag';
import Calendar from '../Components/Task/Calendar';
import Description from '../Components/Task/Description';
import Due from '../Components/Task/Due';
import Priority from '../Components/Task/Priority';
import Summary from '../Components/Task/Summary';
import Tags from '../Components/Task/Tags';

export default function CreateTask({ tags }: PageProps<{ tags: Tag[] }>) {
    return (
        <App title="Create New Task">
            <form action={route('task.store')} method="post">
                <Calendar />
                <Summary />
                <Due />
                <Priority />
                <Tags all={tags} />
                <Description />

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
