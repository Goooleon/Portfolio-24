import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

type ResponsiveImageProps = {
    imgSrc: string;
    imgSize: string;
    alt: string;
};

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ 
    imgSrc,
    imgSize,
    alt,
}) => {
    const containerClass = classNames('my-16 w-full relative rounded-2xl overflow-hidden', {
        [`pt-[${imgSize}]`]: imgSize,
      });
    return (
        <div className={containerClass}>
        <Image
            src={imgSrc}
            alt={alt}
            quality={100}
            sizes="100vw"
            fill
            loading='lazy'
            objectFit="cover"
        />
    </div>
    );
};

export default ResponsiveImage;