import Button from '@/Components/Button';
import App from '@/Layouts/App';

export default function Settings() {
    return (
        <App
            title="Settings"
            nav={[
                <Button action={route('remotes')}>Accounts</Button>,
                <Button action={route('logs')}>Show Logs</Button>,
                <Button action={route('app-directory')}>Open App Folder</Button>,
            ]}
        />
    );
}
