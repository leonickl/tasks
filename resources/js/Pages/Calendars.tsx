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
            {remote.calendars.map((calendar) => (
                <div
                    style={{
                        color:
                            calendar.taskCount === 0
                                ? 'var(--col-light)'
                                : 'var(--col)',
                    }}
                >
                    <a href={route('calendar', calendar.id)}>
                        <b>{calendar.name}:</b>
                    </a>

                    {calendar.default ? (
                        <b>This calendar is currently set as default.</b>
                    ) : (
                        <Link href={route('calendar.default', calendar.id)}>
                            Set as default
                        </Link>
                    )}

                    <em>({calendar.full_href})</em>
                    <span>{calendar.ctag}</span>
                    <span>
                        {`${calendar.taskCount} Tasks | ${calendar.taskCountOpen} Open`}
                    </span>
                </div>
            ))}

            {remote.calendars.length === 0 && <b>No Calendars Found</b>}
        </App>
    );
}
