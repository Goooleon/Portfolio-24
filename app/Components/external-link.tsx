'use client'

import React from "react";
import Image from "next/image";
import { useInView } from 'react-intersection-observer'; // Import the hook

type ExternalLinkProps = {
    title: string;
    url: string;
    favicon: string;
    alt: string;
};

const ExternalLink: React.FC<ExternalLinkProps> = ({
    title,
    url,
    favicon,
    alt,
}) => {
    // Set up the hook to monitor when the component comes into view
    const { ref, inView } = useInView({
        triggerOnce: true, // The animation will only play once
        threshold: 0.1, // Trigger when 10% of the component is visible
    });

    return (
        <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center w-full gap-4 p-4 md:p-8 rounded-2xl bg-white dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 duration-300 ease-in-out hover:scale-105">
                <div className="flex-none overflow-hidden rounded-md border border-neutral-100 dark:border-neutral-700">
                    <Image
                        src={favicon}
                        width={52}
                        height={52}
                        objectFit="cover"
                        alt={alt}
                    />
                </div>
                <div className="min-w-0 flex-grow">
                    <h2 className="text-neutral-950 dark:text-white text-lg font-bold truncate text-ellipsis">{title}</h2>
                    <p className="text-md opacity-60 truncate text-ellipsis">{url}</p>
                </div>
                <div className="flex-none ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-none fill-neutral-600 dark:fill-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M6.24992 4.5C5.28344 4.5 4.49996 5.2835 4.49996 6.25V17.75C4.49996 18.7165 5.28344 19.5 6.24992 19.5H17.7496C18.7161 19.5 19.4996 18.7165 19.4996 17.75V13.75C19.4996 13.3358 19.8354 13 20.2496 13C20.6638 13 20.9995 13.3358 20.9995 13.75V17.75C20.9995 19.5449 19.5445 21 17.7496 21H6.24992C4.45504 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45504 3 6.24992 3H10.2498C10.664 3 10.9998 3.33579 10.9998 3.75C10.9998 4.16421 10.664 4.5 10.2498 4.5H6.24992ZM12.9998 3.75C12.9998 3.33579 13.3355 3 13.7497 3H20.25C20.6642 3 21 3.33579 21 3.75V10.25C21 10.6642 20.6642 11 20.25 11C19.8358 11 19.5 10.6642 19.5 10.25V5.56074L14.28 10.7804C13.9871 11.0732 13.5123 11.0732 13.2194 10.7803C12.9265 10.4874 12.9265 10.0125 13.2194 9.71964L18.4395 4.5H13.7497C13.3355 4.5 12.9998 4.16421 12.9998 3.75Z" />
                    </svg>
                </div>
            </a>
        </div>
    );
};

export default ExternalLink;