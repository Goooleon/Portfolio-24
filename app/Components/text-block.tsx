'use client'

import React from 'react';
import { useInView } from 'react-intersection-observer';

type TextBlockProps = {
    sectionSubtitle?: string;
    sectionTitle?: string;
    sectionDes?: string;
    moduleClassName?: string;
};

const TextBlock: React.FC<TextBlockProps> = ({
    sectionSubtitle,
    sectionTitle,
    sectionDes,
    moduleClassName = "mb-12",
}) => {
    // Set up the hook to monitor when the component comes into view
    const { ref, inView } = useInView({
        triggerOnce: true, // The animation will only play once
        threshold: 0.1, // Trigger when 10% of the component is visible
    });

    return (
        <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`flex flex-col md:w-9/12 w-full ${moduleClassName}`}>
                {sectionSubtitle && <h3 className="uppercase opacity-50 tracking-wider font-medium">{sectionSubtitle}</h3>}
                {sectionTitle && <h1 className="text-2xl font-bold mt-2 text-neutral-950 dark:text-white">{sectionTitle}</h1>}
                {sectionDes && <p className="text-lg mt-6">{sectionDes}</p>}
            </div>
        </div>
    );
};

export default TextBlock;
