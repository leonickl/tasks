import App from '@/Layouts/App';

export default function Settings() {
    return (
        <App title="Settings">
            <div>
                <a href={route('remotes')}>Accounts</a>
                <a href={route('open-logs')}>Show Logs</a>
                <a href={route('open-folder')}>Open App Folder</a>
            </div>
        </App>
    );
}
