'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type FeatureListProps = {
  mediaType: 'image' | 'video';
  src: string;
  title: string;
  description: string;
  alt?: string;
  swap?: boolean; // Determine the order of media and text
};

const FeatureList: React.FC<FeatureListProps> = ({
  mediaType,
  src,
  title,
  description,
  alt = '',
  swap = false,
}) => {
  const mediaRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting && mediaType === 'video' && mediaRef.current) {
        mediaRef.current.play();
      }
    }, { threshold: 0.5 });

    if (mediaRef.current) {
      observer.observe(mediaRef.current);
    }

    return () => {
      if (mediaRef.current) {
        observer.unobserve(mediaRef.current);
      }
    };
  }, [mediaType]);

  // Adjust the layout based on the `swap` prop
  const layoutClass = swap ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div className={`flex flex-col my-8 w-full md:items-start ${layoutClass}`}>
      <div className="w-full h-80 md:w-1/2 relative rounded-2xl overflow-hidden">
        {/* Media content */}
        {mediaType === 'image' ? (
                      <Image
                      src={src}
                      alt={alt}
                      fill // Use 'fill' to ensure the image fills the padded container
                      objectFit="cover"
                      quality={100}
                      sizes="100vw"
                      loading='lazy'
                  />
        ) : (
          <video
            ref={mediaRef}
            src={src}
            muted
            loop
            playsInline
            autoPlay={isVisible}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </div>
      <div className="w-full md:w-1/2 px-4 md:px-8 py-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureList;
