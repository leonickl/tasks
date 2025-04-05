import Button from '@/Components/Button';
import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Remote } from '@/types/Remote';
import { Link } from '@inertiajs/react';

export default function Calendars({ remote }: PageProps<{ remote: Remote }>) {
    return (
        <App
            title={`Calendars for ${remote.name}`}
            nav={[
                <Button href={route('sync-remote', remote.id)}>Sync</Button>,
                <Button href={route('clear-remote', remote.id)}>Clear</Button>,
            ]}
        >
            <div className="mt-5 grid w-full grid-cols-3 gap-10">
                {remote.calendars.map((calendar) => (
                    <div
                        className="flex flex-col gap-5 rounded-md border border-gray-400 p-5 shadow-md justify-between"
                        style={{
                            color:
                                calendar.taskCount === 0
                                    ? 'var(--col-light)'
                                    : 'var(--col)',
                        }}
                    >
                        <a
                            href={route('calendar', calendar.id)}
                            className="font-bold underline"
                        >
                            {calendar.name}:
                        </a>

                        <span>
                            <b>CTAG: </b>
                            {calendar.ctag}
                        </span>
                        <span>
                            {`${calendar.taskCount} Tasks | ${calendar.taskCountOpen} Open`}
                        </span>

                        <em className="text-gray-400">{calendar.fullHref}</em>

                        {calendar.default ? (
                            <div className="w-max rounded-md border border-green-950 bg-green-800 px-3 py-2">
                                Current default
                            </div>
                        ) : (
                            <Link
                                href={route('calendar.default', calendar.id)}
                                className="w-max rounded-md border border-blue-950 bg-blue-800 px-3 py-2"
                            >
                                Set as default
                            </Link>
                        )}
                    </div>
                ))}
            </div>

            {remote.calendars.length === 0 && <b>No Calendars Found</b>}
        </App>
    );
}
