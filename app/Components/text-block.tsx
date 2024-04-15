'use client'

import React from 'react';
import { useInView } from 'react-intersection-observer';

type TextBlockProps = {
    sectionSubtitle?: string;
    sectionTitle?: string;
    sectionDes?: string | JSX.Element;
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
        <section ref={ref} className={`flex flex-col md:w-9/12 w-full ${moduleClassName} transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {sectionSubtitle && <h3 className="uppercase opacity-60 tracking-wider font-medium">{sectionSubtitle}</h3>}
                {sectionTitle && <h2 className="text-2xl font-bold mt-2 title-color">{sectionTitle}</h2>}
                {sectionDes && <p className="text-lg mt-6">{sectionDes}</p>}
        </section>
    );
};

export default TextBlock;
