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
    highlights

}) => {
    return (
        <div className="flex flex-col h-full">
            <article className="max-w-screen-2xl">
                <div className="w-full p-4 pb-8 md:px-64 md:pb-28">
                    <div className="w-full md:w-9/12">
                        <h1 className="text-3xl font-bold w-full">{projectTitle}</h1>
                        <p className="mt-2">{projectDate}</p>
                        <p className="mt-12">{projectDes}</p>
                    </div>
                </div>
                <div className="w-full relative pt-[47.5%]">
                    <Image
                        src={projectCover}
                        alt="cover image"
                        quality={100}
                        sizes="100vw"
                        fill
                        objectFit="contain"
                        priority
                    />
                </div>
                <ul className="flex justify-between w-full p-4 py-8 md:px-64 md:py-32" >
                    <li>
                        <h3 className="font-bold text-xl">Role</h3>
                        <p>{role}</p>
                    </li>
                    <li>
                        <h3 className="font-bold text-xl">Platform</h3>
                        <p>{platform}</p>
                    </li>
                    <li>
                        <h3 className="font-bold text-xl">Highlights</h3>
                        <p>{highlights}</p>
                    </li>
                </ul>
            </article>
        </div>
    );
};

export default ProjectCaption;