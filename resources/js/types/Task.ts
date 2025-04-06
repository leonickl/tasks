import { Calendar } from './Calendar';
import { Tag } from './Tag';

export type Task = {
    id: number;
    calendar_id: number;
    href: string;
    etag: string;
    ical: string;

    completed: boolean;
    summary: string;
    uid: string;
    description: string;
    due: string;
    dueDate: string | null;
    dueTime: string | null;
    dueFormatted: string;
    priority: number;
    tags: Tag[];
    parent_uid: string | null | undefined;

    calendar: Calendar;
    parent: Task | null | undefined;
    children: Task[];

    full_href: string;
};
