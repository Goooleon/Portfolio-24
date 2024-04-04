import React from 'react';

type TextBlockProps = {
    sectionSubtitle?: string;
    sectionTitle?: string;
    sectionDes?: string;
};

const TextBlock: React.FC<TextBlockProps> = ({
    sectionSubtitle,
    sectionTitle,
    sectionDes,
}) => {
    return (
        <div>
            <div className="flex flex-col w-full md:w-9/12">
                {sectionSubtitle && <h3>{sectionSubtitle}</h3>}
                {sectionTitle && <h1 className="text-xl font-bold mt-2">{sectionTitle}</h1>}
                {sectionDes && <p className="mt-8">{sectionDes}</p>}
            </div>
        </div>
    );
};

export default TextBlock;