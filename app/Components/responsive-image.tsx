import React from 'react';
import Image from 'next/image';

type ResponsiveImageProps = {
    imgSrc: string;
    imgSize: string; // Assuming this is a percentage string like "56.25%"
    alt: string;
};

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
    imgSrc,
    imgSize,
    alt,
}) => {
    // Construct an inline style object for the container div
    const containerStyle = {
        paddingTop: imgSize ? `${imgSize}%` : '0%', // Dynamically set padding-top based on imgSize
    };

    return (
        <div 
          style={containerStyle} 
          className="w-full relative rounded-2xl overflow-hidden h-0"> 
            {/* Apply inline style for dynamic padding-top. Adding h-0 to ensure the container's height is controlled by padding */}
            <Image
                src={imgSrc}
                alt={alt}
                fill // Use 'fill' to ensure the image fills the padded container
                objectFit="cover"
                quality={100}
                sizes="100vw"
                loading='lazy'
            />
        </div>
    );
};

export default ResponsiveImage;
