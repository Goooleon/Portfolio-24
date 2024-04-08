'use client'

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

type FeatureListProps = {
  mediaType: 'image' | 'video';
  src: string;
  title: string;
  description: string;
  alt?: string;
  swap?: boolean; // Determine the order of media and text
  moduleClassName?: string;
};

const FeatureList: React.FC<FeatureListProps> = ({
  mediaType,
  src,
  title,
  description,
  alt = '',
  swap = false,
  moduleClassName,
}) => {
  const mediaRef = useRef<HTMLVideoElement | null>(null);

  // Use useInView hook to detect when the component is visible
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  useEffect(() => {
    // Play video if it's in view and the media type is video
    if (inView && mediaType === 'video' && mediaRef.current) {
      mediaRef.current.play();
    }
  }, [inView, mediaType]);

  const layoutClass = swap ? 'md:flex-row-reverse' : 'md:flex-row';

  // Apply transition effects based on inView status
  const animationClass = `transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <div ref={ref} className={`${animationClass} flex flex-col gap-2 md:gap-8 w-full md:items-start ${layoutClass} ${moduleClassName}`}>
      <div className="w-full h-80 md:w-1/2 relative rounded-2xl overflow-hidden">
        {mediaType === 'image' ? (
          <Image
            src={src}
            alt={alt}
            fill
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
            autoPlay={inView}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </div>
      <div className="w-full md:w-1/2 py-4 px-2">
        <h2 className="text-lg font-bold text-neutral-950 dark:text-white">{title}</h2>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureList;
