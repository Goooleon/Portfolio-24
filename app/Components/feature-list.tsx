'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type FeatureListProps = {
  mediaType: 'image' | 'video';
  src: string;
  title: string;
  description: string;
  alt?: string; // Optional alt text for the image
};

const FeatureList: React.FC<FeatureListProps> = ({ mediaType, src, title, description, alt = '' }) => {
  const mediaRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && mediaType === 'video' && mediaRef.current) {
          mediaRef.current.play();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (mediaRef.current) {
      observer.observe(mediaRef.current);
    }

    return () => {
      if (mediaRef.current) {
        observer.unobserve(mediaRef.current);
      }
    };
  }, [mediaType]);

  return (
    <div className="flex flex-col md:flex-row items-start my-8 w-full">
      <div className="w-full md:w-1/2 h-auto rounded-2xl overflow-hidden">
        {mediaType === 'image' ? (
          <Image src={src} alt={alt || 'Media image'} layout="responsive" width={100} height={56} objectFit="cover" />
        ) : (
          <video
            ref={mediaRef}
            src={src}
            muted
            loop
            playsInline
            autoPlay={isVisible}
            style={{ width: '100%', height: 'auto' }}
            className="w-full h-auto"
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
