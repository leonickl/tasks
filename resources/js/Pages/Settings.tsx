import Button from '@/Components/Button';
import App from '@/Layouts/App';

export default function Settings() {
    return (
        <App
            title="Settings"
            nav={[
                <Button href={route('remotes')}>Accounts</Button>,
                <Button href={route('logs')}>Show Logs</Button>,
                <Button href={route('app-directory')}>Open App Folder</Button>,
            ]}
        />
    );
}
