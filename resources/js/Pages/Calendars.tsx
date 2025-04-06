import Button from '@/Components/Button';
import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Remote } from '@/types/Remote';

export default function Calendars({ remote }: PageProps<{ remote: Remote }>) {
    return (
        <App
            title={`Calendars for ${remote.name}`}
            nav={[
                <Button action={route('sync-remote', remote.id)}>Sync</Button>,
                <Button action={route('clear-remote', remote.id)}>
                    Clear
                </Button>,
            ]}
        >
            <div className="mt-5 grid w-full grid-cols-3 gap-10">
                {remote.calendars.map((calendar) => (
                    <div
                        className="flex flex-col justify-between gap-5 rounded-md border border-gray-400 p-5 shadow-md"
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
                            <div className="w-max rounded-md border border-green-900 bg-green-700 px-5 py-3 text-gray-200">
                                Current default
                            </div>
                        ) : (
                            <Button
                                action={route('calendar.default', calendar.id)}
                            >
                                Set as default
                            </Button>
                        )}
                    </div>
                ))}
            </div>

            {remote.calendars.length === 0 && <b>No Calendars Found</b>}
        </App>
    );
}
