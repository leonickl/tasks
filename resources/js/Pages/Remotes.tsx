import Button from '@/Components/Button';
import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Remote } from '@/types/Remote';

export default function Remotes({ remotes }: PageProps<{ remotes: Remote[] }>) {
    return (
        <App title="Accounts">
            <form
                action={route('remotes.store')}
                method="post"
                className="mb-10 flex w-1/2 flex-col items-center gap-5"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Account name, e. g. 'Nextcloud'"
                    className="w-full rounded-md border border-gray-400 bg-gray-800"
                />
                <input
                    type="text"
                    name="href"
                    placeholder="URL for CalDav-Endpoint, e. g. 'https://next.cloud/remote.php/dav/calendars/Username'"
                    className="w-full rounded-md border border-gray-400 bg-gray-800"
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="w-full rounded-md border border-gray-400 bg-gray-800"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full rounded-md border border-gray-400 bg-gray-800"
                />

                <input
                    type="submit"
                    value="Save"
                    className="w-max rounded-md border border-blue-900 bg-blue-700 px-5 py-3"
                />
            </form>

            {remotes.map((remote) => (
                <form
                    action={route('remotes.update', remote.id)}
                    method="post"
                    className="mb-10 flex w-1/2 flex-col items-center gap-5"
                >
                    <input
                        type="text"
                        name="name"
                        value={remote.name}
                        placeholder="Name"
                        className="w-full rounded-md border border-gray-400 bg-gray-800"
                    />
                    <input
                        type="text"
                        name="href"
                        value={remote.href}
                        placeholder="URL"
                        className="w-full rounded-md border border-gray-400 bg-gray-800"
                    />
                    <input
                        type="text"
                        name="username"
                        value={remote.username}
                        placeholder="User"
                        className="w-full rounded-md border border-gray-400 bg-gray-800"
                    />
                    <input
                        type="password"
                        name="password"
                        value={remote.password}
                        placeholder="Password"
                        className="w-full rounded-md border border-gray-400 bg-gray-800"
                    />

                    <div className="flex w-full flex-row justify-evenly gap-5">
                        <input
                            type="submit"
                            value="Save"
                            className="w-max rounded-md border border-blue-900 bg-blue-700 px-5 py-3"
                        />

                        {/* TODO: implement check */}
                        <input
                            type="button"
                            value="Check"
                            className="w-max rounded-md border border-blue-900 bg-blue-700 px-5 py-3"
                        />

                        <Button href={route('calendars', remote.id)}>
                            Calendars
                        </Button>
                    </div>
                </form>
            ))}

            {remotes.length === 0 && <b>No Remote Found</b>}
        </App>
    );
}
