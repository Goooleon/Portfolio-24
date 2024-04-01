import React from 'react';

type MyButtonProps = {
    label: string;
};

const MyButton: React.FC<MyButtonProps> = ({ label }) => {
    return (
        <div>
            <button
                className="px-4 py-2 bg-red-500 rounded-full font-bold hover:bg-sky-700"
            >
                {label}
            </button>
        </div>
    );
};

export default MyButton;