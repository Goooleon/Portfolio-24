import React from "react";
import { Metadata } from "next";
import ProjectCaption from "@/app/Components/project-caption";
import TextBlock from "@/app/Components/text-block";
import RichCard from "@/app/Components/rich-card";
import ResponsiveImage from "@/app/Components/responsive-image";
import FeatureList from "@/app/Components/feature-list";

export const metadata: Metadata = {
    title: "PowerPoint Animation",
    description: "The page is about...",
}

export default function Project() {
    return (
        <div>
            <ProjectCaption
                projectTitle={`Rethinking PowerPoint Animation Experience`}
                projectDate={`May - Jul, 2018`}
                projectDes={`PowerPoint Online is shifting from the traditional Office ribbon to a sleeker single-line ribbon. This project aims to explore interactions within the narrower ribbon space to optimize the animation experience and beyond.`}
                projectCover="/rethink-ppt-animation/cover.png"
                role={`UX Designer Intern`}
                platform={`Web Application`}
                highlights={`Inspired the team's product plannning`}
            />

            <div aria-label="content" className="flex flex-col gap-28 md:gap-56 max-w-screen-2xl bg-neutral-100 dark:bg-neutral-950 rounded-2xl border-t border-b border-neutral-200 dark:border-neutral-900 px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div aria-label="video demo section">
                    <div className="pt-[57.36%] relative w-full h-full rounded-lg md:rounded-2xl overflow-hidden drop-shadow-2xl">
                        <iframe
                            src="https://player.vimeo.com/video/319206482?badge=0&autopause=0&player_id=0&app_id=58479"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title="PPT Online Modern Animation Concept"
                            className="absolute w-full h-full top-0 left-0"
                        ></iframe>
                    </div>
                </div>

                <div aria-label="background section">
                    <TextBlock
                        sectionSubtitle={`Background`}
                        sectionTitle={`The move to the single-line Ribbon`}
                        sectionDes={`As PowerPoint Online evolves with a shift towards a single-line ribbon interface, the challenge is to fit animation features into a smaller space, modernize the animation experience, and incorporate more desktop app (animation) features.`}
                    />
                    <ResponsiveImage
                        imgSrc="/rethink-ppt-animation/ppt-online.png"
                        alt="example of powerpoint online ribbon (sing & legacy)"
                        imgSize="22.3"
                    />
                    <ResponsiveImage
                        imgSrc="/rethink-ppt-animation/ppt-mac.png"
                        alt="example of powerpoint mac ribbon"
                        imgSize="14.9"
                        containerClassName="mt-8 md:mt-16"
                    />
                </div>

                <div aria-label="user objectives section">
                    <TextBlock
                        sectionSubtitle={`User objectives`}
                        sectionTitle={`Diversified needs from PowerPoint users`}
                        sectionDes={`After analyzing hundreds of real-world animated slides created by PowerPoint users of various skill levels and for diverse purposes, we identified three main user objectives reflecting different skills, goals, and expectations.`}
                    />
                    <div className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                tag={`Objective 01 - Basic`}
                                title={`Animate for Fun`}
                                des={`Using animation in PowerPoint should be an enjoyable experience, allowing users to easily experiment with a variety of pre-made animation options.`}
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag={`Objective 02 - Intermediate`}
                                title={`Tell a Story`}
                                des={`Animations should facilitate content presentation and narrative construction, effectively capturing the audience's attention with key information.`}
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag={`Objective 03 - Advanced`}
                                title={`Master Animations`}
                                des={`Animations should offer high customization options, enabling the creation of sophisticated yet practical visual cues to captivate the audience.`}
                            />
                        </div>
                    </div>
                </div>

                <div aria-label="design section">
                    <TextBlock
                        sectionSubtitle={`Design showcase`}
                        sectionTitle={`A Progressive Approach to Animating`}
                        sectionDes={`The Progressive Approach strategically places features within the ribbon, contextual menu, and side pane, adapting to the escalating complexity of users' animation requirements. This method tries to ensures a seamless transition for users as they advance from basic to more sophisticated animation tasks.`}
                    />
                    <div className="flex gap-2 md:gap-4">
                        <ResponsiveImage
                            imgSrc="/rethink-ppt-animation/solution-illustration-1.png"
                            alt="solution illustration"
                            imgSize="30"
                        />
                        <ResponsiveImage
                            imgSrc="/rethink-ppt-animation/solution-illustration-2.png"
                            alt="solution illustration"
                            imgSize="30"
                        />
                    </div>
                    <ResponsiveImage
                        imgSrc="/rethink-ppt-animation/solution-ia.png"
                        alt="solution information architecture"
                        imgSize="52.6"
                        containerClassName="mt-8 md:mt-16"
                    />
                    <FeatureList
                        mediaType="image"
                        src="/rethink-ppt-animation/contextual-menu.png"
                        title={`Contextual Menu`}
                        description={`The contextual animation menu enables users to swiftly customize pre-set animations for immediate adjustments.`}
                        swap={true}
                        moduleClassName="mt-8 md:mt-32"
                    />
                    <FeatureList
                        mediaType="image"
                        src="/rethink-ppt-animation/side-pane.png"
                        title={`Side Pane`}
                        description={`The side pane offers advanced animation options for crafting more complex animations, including the construction of animation structures, group editing, and beyond.`}
                        swap={false}
                        moduleClassName="mt-8 md:mt-32"
                    />
                </div>

                <div aria-label="reflection section">
                    <TextBlock
                        sectionTitle={`Retrospect`}
                        sectionDes={
                            <>
                                {`Looking back at 2024, I'm thrilled to see that PowerPoint Online has embraced the idea of preset animation adjustments right on the single-line ribbon, and even introduced the Animation Pane. While the outcome varies from our concept, I'm convinced that the strategy of visualizing animation sequences and groups is a positive step for future iterations.`}
                                <br />
                                <br />
                                {`Back in 2018, we toyed with the idea of using Machine Learning (ML) for animation suggestions based on slide content. Now, in 2024, with the rise of Generative AI, the future of smarter animation recommendations seems brighter than ever. It's inspiring to see our early ideas paving the way for this innovative future.`}
                            </>
                        }
                        moduleClassName="mb-0"
                    />
                </div>
            </div>

        </div>
    );
} 