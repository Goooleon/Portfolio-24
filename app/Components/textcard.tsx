import React from 'react';

type TextCardProps = {
    tag: string;
    title: string;
    des: string;
};

const TextCard: React.FC<TextCardProps> = ({ title, tag, des }) => {
    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col h-full p-8 bg-red-950 rounded-2xl">
                <h3 className="px-4 py-2 bg-red-900 rounded-md w-fit">{tag}</h3>
                <h1 className="mt-2 font-bold text-xl">{title}</h1>
                <p className="mt-6">{des}</p>
            </div>
        </div>
    );
};

export default TextCard;