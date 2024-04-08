import React from 'react';
import Image from 'next/image';

type ProjectCaptionProps = {
    projectTitle: string;
    projectDate: string;
    projectDes: string;
    projectCover: string;
    role: string;
    platform: string;
    highlights: string;
};

const ProjectCaption: React.FC<ProjectCaptionProps> = ({
    projectTitle,
    projectDate,
    projectDes,
    projectCover,
    role,
    platform,
    highlights,

}) => {
    return (
        <div className="flex flex-col h-full">
            <article className="max-w-screen-2xl">
                <div className="w-full p-8 md:px-64 md:pb-28">
                    <div className="w-full md:w-9/12">
                        <h1 className="text-3xl md:text-4xl font-bold w-full text-neutral-950 dark:text-white">{projectTitle}</h1>
                        <p className="mt-4 opacity-70">{projectDate}</p>
                        <p className="text-lg mt-8 md:mt-12">{projectDes}</p>
                    </div>
                </div>
                <div className="w-full relative pt-[60%] md:pt-[47.5%]">
                    <Image
                        src={projectCover}
                        alt="cover image"
                        quality={100}
                        sizes="100vw"
                        fill
                        objectFit="cover"
                        priority
                    />
                </div>
                <ul className="gap-8 justify-between w-full p-4 py-8 md:px-64 md:py-20 md:flex md:gap-16" >
                    <li className="p-4">
                        <h3 className="font-bold text-lg text-neutral-950 dark:text-white">Role</h3>
                        <p className="mt-1 md:mt-2 text-lg">{role}</p>
                    </li>
                    <li className="p-4">
                        <h3 className="font-bold text-lg text-neutral-950 dark:text-white">Platform</h3>
                        <p className="mt-1 md:mt-2 text-lg">{platform}</p>
                    </li>
                    <li className="p-4">
                        <h3 className="font-bold text-lg text-neutral-950 dark:text-white">Highlights</h3>
                        <p className="mt-1 md:mt-2 text-lg">{highlights}</p>
                    </li>
                </ul>
            </article>
        </div>
    );
};

export default ProjectCaption;