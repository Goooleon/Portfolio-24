'use client'

import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

type TextBlockProps = {
    textColor?: string; // new prop — Tailwind class or custom hex
    sectionSubtitle?: string;
    sectionTitle?: string;
    sectionDes?: string | JSX.Element;
    moduleClassName?: string;
};

const VisualTextBlock: React.FC<TextBlockProps> = ({
    textColor = "title-color", // default
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
        <section
            ref={ref}
            className={`flex flex-col mb-28 md:mb-56 md:w-9/12 w-full ${moduleClassName} transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
        >
            {sectionSubtitle && (
                <h3 className={`font-alegreya text-2xl font-bold mt-2 ${textColor}`}>{sectionSubtitle}</h3>
            )}
            {sectionTitle && (
                <h1 className={`font-alegreya text-4xl md:text-5xl font-bold mt-2 ${textColor}`}>
                    {sectionTitle}
                </h1>
            )}
            <div className="flex-none overflow-hidden mt-8">
                <div className={`flex-none overflow-hidden ${textColor}`}>
                    <div
                        className="w-[200px] h-[60px]"
                        style={{
                            // use the SVG as a mask
                            WebkitMaskImage: 'url(/curve-highlight.svg)',
                            maskImage: 'url(/curve-highlight.svg)',
                            WebkitMaskRepeat: 'no-repeat',
                            maskRepeat: 'no-repeat',
                            WebkitMaskSize: 'contain',
                            maskSize: 'contain',
                            WebkitMaskPosition: 'center',
                            maskPosition: 'center',
                            // paint the mask with the current text color
                            backgroundColor: 'currentColor',
                        }}
                        aria-hidden
                    />
                </div>
            </div>
            {sectionDes && <p className={`text-lg mt-6`}>{sectionDes}</p>}
        </section>
    );



};

export default VisualTextBlock;
