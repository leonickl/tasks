import Button from '@/Components/Button';
import Text from '@/Components/Input/Text';
import App from '@/Layouts/App';
import { PageProps } from '@/types';
import { Remote } from '@/types/Remote';
import { router } from '@inertiajs/react';
import { useState } from 'react';

export default function Remotes({ remotes }: PageProps<{ remotes: Remote[] }>) {
    const [name, setName] = useState('');
    const [href, setHref] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function save() {
        router.post(route('remotes.store'), { name, href, username, password });
    }

    return (
        <App title="Accounts">
            <form
                action={route('remotes.store')}
                method="post"
                className="mb-10 flex w-1/2 flex-col items-center gap-5"
            >
                <Text
                    value={name}
                    setValue={setName}
                    placeholder="Account name, e. g. 'Nextcloud'"
                />
                <Text
                    value={href}
                    setValue={setHref}
                    placeholder="URL for CalDav-Endpoint, e. g. 'https://next.cloud/remote.php/dav/calendars/Username'"
                />
                <Text
                    value={username}
                    setValue={setUsername}
                    placeholder="Username"
                />
                <Text
                    value={password}
                    setValue={setPassword}
                    placeholder="Password"
                />

                <Button action={save}>Save</Button>
            </form>

            {remotes.map((remote) => (
                <form
                    key={remote.id}
                    action={route('remotes.update', remote.id)}
                    method="post"
                    className="mb-10 flex w-1/2 flex-col items-center gap-5"
                >
                    <Text
                        value={remote.name}
                        setValue={() => {}}
                        placeholder="Name"
                    />
                    <Text
                        value={remote.href}
                        setValue={() => {}}
                        placeholder="URL"
                    />
                    <Text
                        value={remote.username}
                        setValue={() => {}}
                        placeholder="User"
                    />
                    <Text
                        value={remote.password}
                        setValue={() => {}}
                        placeholder="Password"
                    />

                    <div className="flex w-full flex-row justify-evenly gap-5">
                        <Button action={() => {}}>Save</Button>

                        <Button action={() => {}}>Check</Button>

                        <Button action={route('calendars', remote.id)}>
                            Calendars
                        </Button>
                    </div>
                </form>
            ))}

            {remotes.length === 0 && <b>No Remote Found</b>}
        </App>
    );
}
