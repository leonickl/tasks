import { TextLeft } from 'react-bootstrap-icons';

export default function Description() {
    return (
        <div className="flex flex-row items-center gap-5">
            <TextLeft />

            <textarea
                name="description"
                className="w-full rounded-md border border-gray-400 bg-gray-800"
            ></textarea>
        </div>
    );
}
