'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

type ProjectTileProps = {
    imgSrc: string;
    imgSize: string;
    alt: string;
    link?: string;
    isLinkActive?: boolean;
    overlayText?: string; // Optional text for the overlay
};

const ProjectTile: React.FC<ProjectTileProps> = ({
    imgSrc,
    imgSize,
    alt,
    link = '#',
    isLinkActive = true,
    overlayText = "View More", // Default overlay text
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerStyle = {
        paddingTop: imgSize ? `${imgSize}%` : '0%',
    };

    return (
        <div
            ref={ref}
            style={containerStyle}
            className={`relative w-full overflow-hidden pt-[49%] h-0 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {isLinkActive ? (
                <Link href={link} className="block">
                    <div className="absolute inset-0 z-10 flex px-6 md:px-10 items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <p className="font-alegreya text-white text-2xl font-medium text-center">{overlayText}</p>
                    </div>
                    <Image
                        src={imgSrc}
                        alt={alt}
                        fill
                        objectFit="cover"
                        quality={100}
                        sizes="100vw"
                        loading='lazy'
                        className="transition duration-300 ease-out"
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
                    className="transition duration-300 ease-out"
                />
            )}
        </div>
    );
};

export default ProjectTile;
