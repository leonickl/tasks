import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Remote } from '@/types/Remote';

export default function Remotes({ remotes }: PageProps<{ remotes: Remote[] }>) {
    return (
        <App title="Accounts">
            <form action={route('remotes.store')} method="post">
                <input
                    type="text"
                    name="name"
                    placeholder="Account name, e. g. 'Nextcloud'"
                />
                <input
                    type="text"
                    name="href"
                    placeholder="URL, e. g. 'https://next.cloud/remote.php/dav/calendars/Username'"
                />
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" />

                <input type="submit" value="Save" />
            </form>

            {remotes.map((remote) => (
                <form
                    action={route('remotes.update', remote.id)}
                    method="post"
                    id="remote-{{ $remote->id }}"
                >
                    <input
                        type="text"
                        name="name"
                        value="{{ $remote->name }}"
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="href"
                        value="{{ $remote->href }}"
                        placeholder="URL"
                    />
                    <input
                        type="text"
                        name="username"
                        value="{{ $remote->username }}"
                        placeholder="User"
                    />
                    <input
                        type="password"
                        name="password"
                        value="{{ $remote->password }}"
                        placeholder="Password"
                    />

                    <div>
                        <input type="submit" value="Save" />
                        <input type="button" value="Check" />{' '}
                        {/* TODO: implement check */}
                        <a href={route('calendars', remote.id)}>Calendars</a>
                    </div>
                </form>
            ))}

            {remotes.length === 0 && <b>No Remote Found</b>}
        </App>
    );
}
