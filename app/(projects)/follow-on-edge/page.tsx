import { Metadata } from "next";
import ProjectCaption from "@/app/Components/project-caption";
import TextBlock from "@/app/Components/text-block";
import ResponsiveImage from "@/app/Components/responsive-image";
import FeatureList from "@/app/Components/feature-list";
import ExternalLink from "@/app/Components/external-link";
import ResponsiveVideo from "@/app/Components/responsive-video";

export const metadata: Metadata = {
    title: "Follow on Edge",
    description: "Follow on Edge is an experimental project aimed at expanding Edge's web services.",
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
                platform={`Edge browser (Windows & MacOS)`}
                highlights={`MVP launched on Microsoft Edge 97 for experimentation`}
                placeholderColor={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNctOrcfwAHKwMb553f6wAAAABJRU5ErkJggg==`}
            />

            <div aria-label="content" className="flex flex-col gap-28 md:gap-56 bg-neutral-100 dark:bg-neutral-950 rounded-2xl border-t border-b border-neutral-200 dark:border-neutral-900 px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div aria-label="introduction section">
                    <TextBlock
                        sectionSubtitle="Background"
                        sectionTitle={`Discontinued Follow Experience`}
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
                        sectionSubtitle={`Project goal`}
                        sectionTitle={`Aggregated Focus`}
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
                        sectionTitle={`Follow through Edge Browser`}
                        sectionDes={`The Edge follow experience begins in the address bar and extends to the ‘Following’ side pane, allowing users to stay updated with content aggregated from across the web, all in one place.`}
                    />
                    <ResponsiveVideo
                        mediaType="video"
                        src="/follow-on-edge/design-demo.mp4"
                    />
                    <FeatureList
                        mediaType="image"
                        src="/follow-on-edge/design-entry.png"
                        alt={`an image of showing the follow entry`}
                        title={`Follow Entry`}
                        description={`When Edge identifies creators from URLs (with user privacy consent as a prerequisite), a button appears in the address bar. This feature entry includes two main elements: the creator's avatar with an add icon and a call-to-action text.`}
                        swap={true}
                        moduleClassName="mt-8 md:mt-32"
                    />
                    <FeatureList
                        mediaType="image"
                        src="/follow-on-edge/design-pane.png"
                        alt={`an image showing the follow confirmation pane`}
                        title={`Follow Confirmation`}
                        description={`Clicking the follow entry button activates the ‘Following’ side pane, which opens to the creator's profile page, signalling that the creator has been successfully followed. For first-time users, this page also serves as an introduction to the follow feature.`}
                        swap={false}
                        moduleClassName="mt-8 md:mt-32"
                    />
                    <FeatureList
                        mediaType="image"
                        src="/follow-on-edge/design-notification.png"
                        alt={`an image of showing notification from Edge Follow`}
                        title={`Re-engage Notification`}
                        description={`Edge sends daily notifications to re-engage users with new content. This aggressive design approach is intentional, but users are provided with control options to manage these notifications.`}
                        swap={true}
                        moduleClassName="mt-8 md:mt-32"
                    />
                    <ResponsiveImage
                        imgSrc="/follow-on-edge/design-pages.png"
                        alt={`an image showing key screens of Edge Follow`}
                        imgSize="57.1"
                        containerClassName="mt-8 md:mt-32"
                    />
                </div>

                <div aria-label="reflection and envision section">
                    <TextBlock
                        sectionSubtitle={`The Challenge ahead`}
                        sectionTitle={`The Problem of Merging and Duplication`}
                        sectionDes={
                            <>
                                {`In the MVP phase, each creator is treated as separate across different social media platforms, meaning the same creator on various sites appears as different creators in Follow on Edge.
                                
                                We plan to evolve the feature to link all channels of a creator together, making it scalable. The challenges ahead include: 1) exploring a method to combine a creator's details into a unified profile, and 2) figuring out a way to cohesively present content from various platforms within a single creator profile.
                                
                                Read media coverage below 👇
                                `}
                            </>
                        }
                    />

                    <ExternalLink
                        title={`Microsoft lets you follow YouTube creators in Edge browser test`}
                        url="https://www.theverge.com/"
                        favicon="/follow-on-edge/edge-follow-favicon.png"
                        alt="favicon"
                    />
                </div>

            </div>
        </div>
    );
} 