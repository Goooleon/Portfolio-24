import { Metadata } from "next";
import ProjectCaption from "@/app/Components/project-caption";
import TextBlock from "@/app/Components/text-block";
import RichCard from "@/app/Components/rich-card";
import ResponsiveImage from "@/app/Components/responsive-image";
import FeatureList from "@/app/Components/feature-list";
import ExternalLink from "@/app/Components/external-link";

export const metadata: Metadata = {
    title: "Saeco Xelsis Experience Redesign",
    description: "The page is about...",
}

export default function Project() {
    return (
        <div>
            <ProjectCaption
                projectTitle={`Saeco Xelsis Experience Redesign`}
                projectDate={`Mar - Jul, 2019`}
                projectDes={`During the 'Usability Testing and User Experience Assessment in Design (UXAD)' course, we partnered with Philips to optimize the Saeco Xelsis coffee machine experience. This project involved exploring and evaluating numerous design concepts to find a path to an improved user experience.`}
                projectCover="/uxad-saeco-redesign/cover3.png"
                role={`Lead of interaction design and prototype (group of 5)`}
                platform={`Touchscreen & IoT`}
                highlights={`Inspired Philips' Saeco team for future improvements`}
            />

            <div aria-label="content" className="flex flex-col gap-28 md:gap-56 max-w-screen-2xl bg-neutral-100 dark:bg-neutral-950 rounded-2xl border-t border-b border-neutral-200 dark:border-neutral-900 px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div aria-label="video demo section">
                    <div className="pt-[57.36%] relative w-full h-full rounded-lg md:rounded-2xl overflow-hidden drop-shadow-2xl">
                        <iframe
                            src="https://player.vimeo.com/video/379281966?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title="PPT Online Modern Animation Concept"
                            className="absolute w-full h-full top-0 left-0"
                        ></iframe>
                    </div>
                </div>

                <div aria-label="background section">
                    <TextBlock
                        sectionSubtitle={`Background`}
                        sectionTitle={`Philips Saeco Xelsis`}
                        sectionDes={`The Philips Saeco Xelsis is a fully automatic espresso machine that provides a broad selection of coffee options. Key interactions occur through the control panel, which features an LCD display and physical buttons.`}
                    />
                    <ResponsiveImage
                        imgSrc="/uxad-saeco-redesign/background.png"
                        alt="an illustration of the coffee machine's control panel"
                        imgSize="50"
                    />
                </div>

                <div aria-label="problem section">
                    <TextBlock
                        sectionSubtitle={`The problems`}
                        sectionTitle={`A Significant Potential for enhancement`}
                        sectionDes={`Through empirical research involving our team and invited testers, we analyzed all identified issues and highlighted three problems with potential for improvement through a redesign.`}
                    />
                    <FeatureList
                        mediaType="video"
                        src="/uxad-saeco-redesign/problem-1.mp4"
                        title={`Complex Coffee Brewing Process`}
                        description={`Brewing coffee requires navigating through several mandatory steps. Despite offering 4 to 5 customization options, users are obliged to complete 6 to 7 steps to brew their coffee with all desired customizations.`}
                        swap={false}
                        moduleClassName="mt-8 md:mt-16"
                    />
                    <FeatureList
                        mediaType="video"
                        src="/uxad-saeco-redesign/problem-2.mp4"
                        title={`Low Acceptance of Profile Feature`}
                        description={`The machine features a profile function designed to streamline coffee preparation to just 3 steps. However, because this function is isolated from the main customization process, it confuses users. As a result, they are reluctant to utilize the profile feature.`}
                        swap={true}
                        moduleClassName="mt-8 md:mt-16"
                    />
                    <FeatureList
                        mediaType="video"
                        src="/uxad-saeco-redesign/problem-3.mp4"
                        title={`Unexpected Maintenance Alerts`}
                        description={`Maintenance prompts, such as adding water, can occur unexpectedly, even after the machine has begun grinding the beans. This disrupts the user experience and contradicts their expectations for coffee preparation.`}
                        swap={false}
                        moduleClassName="mt-8 md:mt-16"
                    />
                </div>

                <div aria-label="project goal section">
                    <TextBlock
                        sectionTitle={`Design Goal`}
                        sectionDes={`The design goal is to enhance user experience by simplifying the coffee customization process and making maintenance tasks more manageable.`}
                    />
                    <div className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                tag={`Coffee Brewing`}
                                title={`Simplify customization`}
                                des={`Aim to decrease the number of steps in the customization process and enhance the connection with the profile feature.`}
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag={`machine maintenance`}
                                title={`Proactive Maintenance Alerts`}
                                des={`Offer comprehensive maintenance information upfront to prevent disruptions during coffee brewing.`}
                            />
                        </div>
                    </div>
                </div>

                <div aria-label="design explore section">
                    <TextBlock
                        sectionSubtitle={`Design exploration`}
                        sectionTitle={`The path towards a converged concept`}
                        sectionDes={`With our design objective as a guide, we investigated three design paths to address these challenges and discover elements that enhance the overall product experience.`}
                    />
                    <div className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                imgSrc="/uxad-saeco-redesign/explore-1.png"
                                imgAlt="an illustration demonstrating concept 1"
                                title={`Concept 1 - Mobile Profiles`}
                                des={`Features a minimalist touchscreen for brewing, with extra functions like profile setup accessible via a mobile app, ensuring a fast and simple coffee-making process.`}
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                imgSrc="/uxad-saeco-redesign/explore-2.png"
                                imgAlt="an illustration demonstrating concept 2"
                                title={`Concept 2 - Full touch screen`}
                                des={`BIntegrates all features into a full touchscreen, showing drink options, customization, and maintenance status, for a fully informed and streamlined coffee-making experience.`}
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                imgSrc="/uxad-saeco-redesign/explore-3.png"
                                imgAlt="an illustration demonstrating concept 3"
                                title={`Concept 3 - Turning Knob`}
                                des={`Combines a tactile rotary knob for core functions with two displays: one on the knob for basic info and another for detailed insights, enhancing user interaction.`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 