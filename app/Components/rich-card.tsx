'use client'

import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

type RichCardProps = {
    tag?: string;
    title: string;
    des?: string | JSX.Element;
    imgSrc?: string;
    imgAlt?: string;
    titleClassName?: string;
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
    const { ref, inView } = useInView({
        triggerOnce: true, // The component will fade in and move up once when it first comes into view
        threshold: 0.1, // Trigger when 10% of the component is visible
    });

    return (
        <div 
          ref={ref}
          className={`flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${containerClassName}`}
        >
            <div className="w-full relative overflow-hidden">
                {imgSrc && (
                    <div className="image-container relative w-full h-72">
                        <Image src={imgSrc} alt={imgAlt || 'Rich Card Image'} fill objectFit="cover" />
                    </div>
                )}
            </div>
            <div className="p-6">
                {tag && <div className={`text-xs font-semibold px-4 py-2 mb-6 rounded-md w-fit ${tagClassName}`}>{tag}</div>}
                <h1 className={titleClassName}>{title}</h1>
                <p className={`mt-2 ${desClassName}`}>{des}</p>
            </div>
        </div>
    );
};

export default RichCard;
