import React from 'react';

type MyButtonProps = {
    label: string;
};

const MyButton: React.FC<MyButtonProps> = ({ label }) => {
    return (
        <div>
            <button
                className="px-4 py-2 rounded-full font-medium bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
                {label}
            </button>
        </div>
    );
};

export default MyButton;