import React from 'react';
import Image from 'next/image';

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
    // Construct an inline style object for the container div
    const containerStyle = {
        paddingTop: imgSize ? `${imgSize}%` : '0%', // Dynamically set padding-top based on imgSize
    };

    return (
        <div 
          style={containerStyle} 
          className={`w-full relative rounded-2xl overflow-hidden h-0 ${containerClassName}`}> 
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
