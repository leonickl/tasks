import { TextLeft } from 'react-bootstrap-icons';
import Textarea from '../Input/Textarea';

export default function Description({
    description,
    setDescription,
}: {
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <div className="flex flex-row items-center gap-5">
            <TextLeft />

            <Textarea
                value={description}
                setValue={setDescription}
                placeholder="Description"
            />
        </div>
    );
}
