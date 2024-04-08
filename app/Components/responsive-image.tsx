'use client'

import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer'; // Import the hook

type ResponsiveImageProps = {
    imgSrc: string;
    imgSize: string;
    alt: string;
    containerClassName?: string;
};

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
    imgSrc,
    imgSize,
    alt,
    containerClassName,
}) => {
    // Set up the hook to monitor when the component comes into view
    const { ref, inView } = useInView({
        triggerOnce: true, // The animation will only play once
        threshold: 0.1, // Trigger when 10% of the component is visible
    });

    // Construct an inline style object for the container div
    const containerStyle = {
        paddingTop: imgSize ? `${imgSize}%` : '0%', // Dynamically set padding-top based on imgSize
    };

    return (
        <div 
          ref={ref} 
          style={containerStyle} 
          className={`w-full relative rounded-2xl overflow-hidden h-0 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${containerClassName}`}>
            {/* Apply inline style for dynamic padding-top. Adding h-0 to ensure the container's height is controlled by padding */}
            <Image
                src={imgSrc}
                alt={alt}
                fill
                objectFit="cover"
                quality={100}
                sizes="100vw"
                loading='lazy'
            />
        </div>
    );
};

export default ResponsiveImage;
