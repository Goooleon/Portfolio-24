import React from 'react';
import Link from 'next/link'; 

type MyButtonProps = {
    label: string;
    href: string;
};

const MyButton: React.FC<MyButtonProps> = ({ label, href }) => {
    return (
        <Link href={href} passHref> {/* Use Link component to wrap the button */}
            <button
                className="px-4 py-2 rounded-full font-medium bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
                {label}
            </button>
        </Link>
    );
};

export default MyButton;
