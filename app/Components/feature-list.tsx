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
    <div className="media-section my-8">
      {mediaType === 'image' ? (
        <Image src={src} alt={alt} layout="responsive" width={100} height={56} objectFit="cover" />
      ) : (
        <video
          ref={mediaRef}
          src={src}
          muted
          loop
          playsInline
          autoPlay={isVisible}
          style={{ width: '100%', height: 'auto' }}
        />
      )}
      <div className="text-section mt-4">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureList;
