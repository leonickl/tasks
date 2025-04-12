import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';
import AuthenticatedLayout from './AuthenticatedLayout';
import { ToastContainer } from 'react-toastify';

export default function App({
    title,
    children,
    nav = [],
}: {
    title: string;
    children?: ReactNode;
    nav?: ReactNode[];
}) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {title}
                </h2>
            }
        >
            <Head title={title} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="flex flex-col items-center gap-5 p-6 text-gray-900 dark:text-gray-100">
                            {nav && (
                                <nav className="flex flex-row gap-5">{nav}</nav>
                            )}

                            {children}
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </AuthenticatedLayout>
    );
}
