import React from 'react';

type TextBlockProps = {
    sectionSubtitle?: string;
    sectionTitle?: string;
    sectionDes?: string;
    mouduleClassName?: string;
};

const TextBlock: React.FC<TextBlockProps> = ({
    sectionSubtitle,
    sectionTitle,
    sectionDes,
    mouduleClassName = "mb-12",
}) => {
    return (
        <div>
            <div className={`flex flex-col md:w-9/12 w-full ${mouduleClassName}`}>
                {sectionSubtitle && <h3 className="uppercase opacity-50 tracking-wider font-medium">{sectionSubtitle}</h3>}
                {sectionTitle && <h1 className="text-2xl font-bold mt-2 text-neutral-950 dark:text-white">{sectionTitle}</h1>}
                {sectionDes && <p className="text-lg mt-6">{sectionDes}</p>}
            </div>
        </div>
    );
};

export default TextBlock;