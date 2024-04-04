import React from 'react';
import Image from 'next/image';

type RichCardProps = {
    tag?: string;
    title: string;
    des: string;
    imgSrc?: string;
    imgAlt?: string;
    titleClassName?: string; // New prop for title class name
};

const RichCard: React.FC<RichCardProps> = ({
    title,
    tag,
    des,
    imgSrc,
    imgAlt,
    titleClassName,
}) => {
    return (
        <div className="flex flex-col h-full bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden">
            <div className="w-full relative overflow-hidden">
                {imgSrc && (
                    <div className="image-container relative w-full h-72">
                        <Image src={imgSrc} alt={imgAlt || 'Rich Card Image'} fill objectFit="cover" />
                    </div>
                )}
            </div>
            <div className="p-6">
                {tag && <div className="px-2 py-1 mb-6 bg-neutral-300 dark:bg-neutral-700 rounded-md w-fit">{tag}</div>}
                <h1 className={`font-bold text-xl ${titleClassName}`}>{title}</h1>
                <p className="mt-2">{des}</p>
            </div>
        </div>
    );
};

export default RichCard;