import Button from '@/Components/Button';
import Text from '@/Components/Input/Text';
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
                <Text
                    value={''}
                    setValue={() => {}}
                    placeholder="Account name, e. g. 'Nextcloud'"
                />
                <Text
                    value={''}
                    setValue={() => {}}
                    placeholder="URL for CalDav-Endpoint, e. g. 'https://next.cloud/remote.php/dav/calendars/Username'"
                />
                <Text value={''} setValue={() => {}} placeholder="Username" />
                <Text value={''} setValue={() => {}} placeholder="Password" />

                <Button action={() => {}}>Save</Button>
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
