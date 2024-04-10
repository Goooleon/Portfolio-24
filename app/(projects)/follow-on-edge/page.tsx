import { Metadata } from "next";
import ProjectCaption from "@/app/Components/project-caption";
import TextBlock from "@/app/Components/text-block";
import RichCard from "@/app/Components/rich-card";
import ResponsiveImage from "@/app/Components/responsive-image";
import FeatureList from "@/app/Components/feature-list";
import ExternalLink from "@/app/Components/external-link";
import ResponsiveVideo from "@/app/Components/responsive-video";

export const metadata: Metadata = {
    title: "Copilot Multimedia Experience",
    description: "The page is about...",
}

export default function Project() {
    return (
        <div>
            <ProjectCaption
                projectTitle={`Follow on Edge`}
                projectDate={`2023 - 2024`}
                projectDes={`Follow on Edge is an experimental project aimed at expanding Edge's web services by allowing users to follow any content on the web, focusing more effectively on their interests. This project introduces the MVP version of Follow on Edge, supporting the ability to follow creators on YouTube, TikTok, and Pinterest.`}
                projectCover="/follow-on-edge/cover.png"
                role={`Lead Product Designer`}
                platform={`Edge browswer (Windows & MacOS)`}
                highlights={`MVP launched on Microsoft Edge 97 for experimentation`}

            />

            <div aria-label="content" className="flex flex-col gap-28 md:gap-56 max-w-screen-2xl bg-neutral-100 dark:bg-neutral-950 rounded-2xl border-t border-b border-neutral-200 dark:border-neutral-900 px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div aria-label="introduction section">
                    <TextBlock
                        sectionSubtitle="Background"
                        sectionTitle={`Discontinued Follow experience`}
                        sectionDes={
                            <>
                                {`The "Follow" feature, common across social platforms, allows users to keep up with their interests. However, its scattered presence across different sites means there's no unified way to track everything in one place.`}
                                <br /><br />
                                {`"Follow on Edge" aims to help users be more focused on their interests, thereby inspiring and entertaining them with media-rich experiences for their multi-session activities anywhere on the web.`}
                            </>
                        }
                    />
                    <ResponsiveImage
                        imgSrc="/follow-on-edge/background.png"
                        alt="an abstract illustration of the background"
                        imgSize="48"
                    />
                </div>
                <div aria-label="project goal section">
                    <TextBlock
                        sectionSubtitle="Project goal"
                        sectionTitle={`Aggregated focus`}
                        sectionDes={`Microsoft Edge, a gateway to the web, is ideal for surfacing creators and aggregating user-interested content. It allows users to follow creators from websites being visited, creating an engagement loop for receiving updates and consumption. The MVP initially focuses on creators from YouTube, TikTok, and Pinterest.`}
                    />
                    <ResponsiveImage
                        imgSrc="/follow-on-edge/goal.png"
                        alt="an abstract illustration of the background"
                        imgSize="36.2"
                    />
                </div>
                <div aria-label="design showcase section">
                    <TextBlock
                        sectionSubtitle="Design showcase"
                        sectionTitle={`Follow on a browswer`}
                        sectionDes={`The Edge follow experience begins in the address bar and extends to the ‘Following’ side pane, allowing users to stay updated with content aggregated from across the web, all in one place.`}
                    />
                    <ResponsiveVideo 
                        mediaType="video"
                        src="/follow-on-edge/design-demo.mp4"
                    />
                </div>
            </div>
        </div>
    );
} 