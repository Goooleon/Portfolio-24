'use client'

import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type ResponsiveVideoProps = {
  mediaType: 'image' | 'video';
  src: string;
  moduleClassName?: string;
};

const ResponsiveVideo: React.FC<ResponsiveVideoProps> = ({
  mediaType,
  src,
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

  // Apply transition effects based on inView status
  const animationClass = `transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

  return (
    <div ref={ref} className={`${animationClass} flex w-full md:items-start ${moduleClassName}`}>
      <div
        className="w-full h-full relative rounded-lg md:rounded-2xl overflow-hidden">
          <video
            ref={mediaRef}
            src={src}
            muted
            loop
            playsInline
            autoPlay={inView}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
      </div>
    </div>
  );
};

export default ResponsiveVideo;
