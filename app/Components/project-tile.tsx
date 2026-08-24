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
    tag?: string;
    isLinkActive?: boolean;
    overlayText?: string; // Optional text for the overlay
};

const ProjectTile: React.FC<ProjectTileProps> = ({
    imgSrc,
    imgSize,
    alt,
    link = '#',
    tag = "🔒 Design",
    isLinkActive = true,
    overlayText = "View More", // Default overlay text
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerStyle = {
        aspectRatio: imgSize ? `${100 / Number(imgSize)}` : '1',
    };

    const isPrimaryImage = imgSrc === '/bing-video-evolution-waves-cover.png';
    const imageSizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

    return (
        <div
            ref={ref}
            style={containerStyle}
            className={`relative w-full overflow-hidden transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {isLinkActive ? (
                <Link href={link} className="relative block h-full w-full">
                    <div className="absolute inset-0 z-10 flex px-6 md:px-10 items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <p className="font-alegreya text-white text-2xl font-medium text-center">{overlayText}</p>
                        <div className="z-10 absolute top-2 right-2 rounded-full bg-white bg-opacity-15 border border-solid border-white border-opacity-25">
                            <p className="text-white px-4 py-2 text-sm">{tag}</p>
                        </div>
                    </div>
                    <Image
                        src={imgSrc}
                        alt={alt}
                        fill
                        priority={isPrimaryImage}
                        quality={100}
                        sizes={imageSizes}
                        loading={isPrimaryImage ? 'eager' : 'lazy'}
                        unoptimized={imgSrc.endsWith('.gif')}
                        className="transition duration-300 ease-out object-cover"
                        style={{ objectFit: 'cover' }}
                    />
                </Link>
            ) : (
                <div className="relative h-full w-full">
                    <Image
                        src={imgSrc}
                        alt={alt}
                        fill
                        priority={isPrimaryImage}
                        quality={100}
                        sizes={imageSizes}
                        loading={isPrimaryImage ? 'eager' : 'lazy'}
                        unoptimized={imgSrc.endsWith('.gif')}
                        className="transition duration-300 ease-out object-cover"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            )}
        </div>
    );
};

export default ProjectTile;
