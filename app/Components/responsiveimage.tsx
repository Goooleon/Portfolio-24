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
    const containerClass = classNames({
        [`pt-[${imgSize}]`]: imgSize,
    });
    return (
        <div className="my-16 w-full relative rounded-2xl overflow-hidden">
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
        </div>
    );
};

export default ResponsiveImage;