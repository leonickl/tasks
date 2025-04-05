import { Calendar } from './Calendar';

export type Remote = {
    id: number;
    name: string;
    href: string;
    username: string;
    password: string;
    calendars: Calendar[];
};
