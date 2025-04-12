import React from 'react';
import { Flag } from 'react-bootstrap-icons';

const PRIORITY_LEVELS = [
    { value: 0, color: 'gray' },
    { value: 9, color: 'blue' },
    { value: 5, color: '#f8a100' },
    { value: 1, color: '#cb0000' },
];

export default function Priority({
    priority,
    setPriority,
}: {
    priority: number;
    setPriority: React.Dispatch<React.SetStateAction<number>>;
}) {
    return (
        <div className="flex flex-row items-center gap-5 px-5 py-3">
            <Flag />

            <div className="flex flex-1 justify-center gap-6">
                {PRIORITY_LEVELS.map(({ value, color }) => (
                    <button
                        type="button"
                        key={value}
                        onClick={() => setPriority(value)}
                        className="h-6 w-6 rounded-full border-4"
                        style={{
                            borderColor: color,
                            backgroundColor:
                                priority === value ? color : 'transparent',
                        }}
                        aria-label={`Set priority ${value}`}
                    />
                ))}
            </div>
        </div>
    );
}
