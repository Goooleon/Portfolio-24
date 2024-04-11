'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

type ProjectTileProps = {
    imgSrc: string;
    imgSize: string;
    alt: string;
    link?: string; // Make 'link' optional
    isLinkActive?: boolean; // New prop to control if the link should be active or not
};

const ProjectTile: React.FC<ProjectTileProps> = ({
    imgSrc,
    imgSize,
    alt,
    link = '#', // Provide a default value for link
    isLinkActive = true, // By default, the link is active
}) => {
    // Set up the hook to monitor when the component comes into view
    const { ref, inView } = useInView({
        triggerOnce: true, // The animation will only play once
        threshold: 0.1, // Trigger when 10% of the component is visible
    });

    const containerStyle = {
        paddingTop: imgSize ? `${imgSize}%` : '0%', // Dynamically set padding-top based on imgSize
    };

    // Conditionally render the Link component based on isLinkActive
    const content = isLinkActive ? (
        <Link href={link}>
                <Image
                    src={imgSrc}
                    alt={alt}
                    fill
                    objectFit="cover"
                    quality={100}
                    sizes="100vw"
                    loading='lazy'
                />
        </Link>
    ) : (
        <Image
            src={imgSrc}
            alt={alt}
            fill
            objectFit="cover"
            quality={100}
            sizes="100vw"
            loading='lazy'
        />
    );

    return (
        <div
            ref={ref}
            style={containerStyle}
            className={`w-full overflow-hidden pt-[49%] h-0 relative transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} `}>
            {content}
        </div>
    );
};

export default ProjectTile;
