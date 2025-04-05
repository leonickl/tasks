import { Remote } from './Remote';
import { Task } from './Task';

export type Calendar = {
    id: number;
    remote_id: number;
    href: string;
    name: string;
    ctag: string;
    color: string;
    default: boolean;
    remote: Remote;
    tasks: Task[];
    full_href: string;
    taskCount: number;
    taskCountOpen: number;
};
