import { TextLeft } from 'react-bootstrap-icons';
import Textarea from '../Input/Textarea';

export default function Description({
    description,
    setDescription,
    className,
}: {
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    className?: string | undefined;
}) {
    return (
        <div className="flex flex-row items-center gap-5 px-5">
            <TextLeft />

            <Textarea
                value={description}
                setValue={setDescription}
                placeholder="Description"
                className={className}
            />
        </div>
    );
}
