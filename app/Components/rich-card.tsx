import React from 'react';
import Image from 'next/image';

type RichCardProps = {
    tag?: string;
    title: string;
    des: string;
    imgSrc?: string;
    imgAlt?: string;
    titleClassName?: string; // New prop for title class name
    containerClassName?: string;
    tagClassName?: string;
    desClassName?: string;
};

const RichCard: React.FC<RichCardProps> = ({
    title,
    tag,
    des,
    imgSrc,
    imgAlt,
    titleClassName = "font-bold text-lg text-neutral-950 dark:text-white",
    containerClassName = "bg-white dark:bg-neutral-900",
    tagClassName = "bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-200",
    desClassName,
}) => {
    return (
        <div className={`flex flex-col h-full rounded-2xl overflow-hidden ${containerClassName}`}>
            <div className="w-full relative overflow-hidden">
                {imgSrc && (
                    <div className="image-container relative w-full h-72">
                        <Image src={imgSrc} alt={imgAlt || 'Rich Card Image'} fill objectFit="cover" />
                    </div>
                )}
            </div>
            <div className="p-6">
                {tag && <div className={`text-xs font-semibold px-4 py-2 mb-6 rounded-md w-fit ${tagClassName}`}>{tag}</div>}
                <h1 className={`${titleClassName}`}>{title}</h1>
                <p className={`mt-2 ${desClassName}`}>{des}</p>
            </div>
        </div>
    );
};

export default RichCard;