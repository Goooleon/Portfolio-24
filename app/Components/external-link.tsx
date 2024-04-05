import React from "react";
import Image from "next/image";

type ExternalLinkProps = {
    title: string;
    url: string;
    favicon: string;
    alt: string;
};

const ExternalLink: React.FC<ExternalLinkProps> = ({
    title,
    url,
    favicon,
    alt,
}) => {
    return (
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer" className="flex justify-between p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200">
                <div className="flex flex-row gap-4">
                    <Image
                        src={favicon}
                        width={48}
                        height={48}
                        objectFit="cover"
                        alt={alt}
                        className="flex-shrink-0 rounded-md"
                    />
                    <div>
                        <h2 className="text-lg">{title}</h2>
                        <p className="text-sm text-neutral-400">{url}</p>
                    </div>
                </div>
                <Image
                    src="/open-new.svg"
                    width={20}
                    height={20}
                    alt="Open link"
                    className="fill-neutral-400"
                />
            </a>
        </div>
    );
};

export default ExternalLink;
