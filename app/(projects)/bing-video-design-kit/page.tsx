import { Metadata } from "next";
import ProjectCaption from "@/app/Components/project-caption";
import TextBlock from "@/app/Components/text-block";
import RichCard from "@/app/Components/rich-card";
import ResponsiveImage from "@/app/Components/responsive-image";
import FeatureList from "@/app/Components/feature-list";
import ExternalLink from "@/app/Components/external-link";

export const metadata: Metadata = {
    title: "Bing Video Design Kit",
    description: "Bing Video Design Kit is a fun project",
}

export default function Project() {
    return (
        <div>
            <ProjectCaption
                projectTitle={`Bing Video Design Kit`}
                projectDate={`2022 - Present`}
                projectDes={`The Bing Design System, while comprehensive, doesn't fully cater to the specific needs of the multimedia team. To bridge this gap, the Video Design Kit was created within the Bing Design System framework. It serves as a customized resource for video design, offering a centralized hub for Multimedia Designers to synchronize and collaborate effectively.`}
                projectCover="/bing-video-design-kit/cover.png"
                role={`Initiator and Maintenance Lead`}
                platform={`Web (Desktop & Mobile)`}
                highlights={`Assisted our team in standardizing design practices and established a central hub for video-related assets.`}
            />

            <div aria-label="content" className="flex flex-col gap-28 md:gap-56 max-w-screen-2xl bg-neutral-100 dark:bg-neutral-950 rounded-2xl border-t border-b border-neutral-200 dark:border-neutral-900 px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div aria-label="background section">
                    <TextBlock
                        sectionSubtitle={`Background`}
                        sectionTitle={`Bing Design System Limitations`}
                        sectionDes={`For a long time, Bing Design System (BDS) is the only source for crafting new features and refining user experiences. However, the Bing Design System, being a generalized framework, falls short in accommodating the rapid iteration needs specific to video experiences. Moreover, with our team's expansion, the necessity for a centralized repository of video design patterns has become apparent.`}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                        <ResponsiveImage
                            imgSrc="/bing-video-design-kit/background-1.png"
                            alt="solution illustration"
                            imgSize="69.18"
                        />
                        <ResponsiveImage
                            imgSrc="/bing-video-design-kit/background-2.png"
                            alt="solution illustration"
                            imgSize="69.18"
                        />
                    </div>
                    <TextBlock
                        sectionDes={`In Bing, there are four main canvases where video experience is exposed to users: SERP answer (Search Engine Result Page), VRP (Video Result Page), VDP (Video Detail Page), and Bing Copilot (formerly Bing Chat). Before the Video Design kit was born, all designs were stored separately by different design owners.`}
                        moduleClassName="mt-8 md:mt-16 mb-12"
                    />
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                        <ResponsiveImage
                            imgSrc="/bing-video-design-kit/serp-answer.png"
                            alt="example of serp answer"
                            imgSize="72.6"
                        />
                        <ResponsiveImage
                            imgSrc="/bing-video-design-kit/vrp.png"
                            alt="example of vrp"
                            imgSize="72.6"
                        />
                        <ResponsiveImage
                            imgSrc="/bing-video-design-kit/vdp.png"
                            alt="example of vdp"
                            imgSize="72.6"
                        />
                        <ResponsiveImage
                            imgSrc="/bing-video-design-kit/copilot.png"
                            alt="example of video in copilot"
                            imgSize="72.6"
                        />
                    </div>
                </div>

                <div aria-label="file structure section">
                    <TextBlock
                        sectionSubtitle={`File structure`}
                        sectionTitle={`An Independent Figma`}
                        sectionDes={`As the kit is not designed to be a full-fledged design system, its structure is organized around video experience canvases. Each Figma page corresponds to a specific canvas, with contents under each page organized according to atomic design principles.`}
                    />
                    <ResponsiveImage
                        imgSrc="/bing-video-design-kit/file-structure.png"
                        alt="example of vrp"
                        imgSize="63.9"
                    />
                </div>

                <div aria-label="design kit showcase section">
                    <TextBlock
                        sectionSubtitle={`Showcase`}
                        sectionTitle={`The kit made for collaboration`}
                    />
                    <ResponsiveImage
                        imgSrc="/bing-video-design-kit/design-kit-overview.png"
                        alt="an overview of the design kit"
                        imgSize="60"
                    />
                    <FeatureList
                        mediaType="image"
                        src="/bing-video-design-kit/design-kit-ratio.png"
                        alt={`an illustration of locked video thumbnail apsect ratio`}
                        title={`Locked thumbnail ratios`}
                        description={`To preserve the original aspect ratio of video thumbnails, critical for user decision-making, the kit uses the "Ratios" Figma plugin, ensuring responsiveness across different viewport widths.`}
                        swap={true}
                        moduleClassName="mt-8 md:mt-32"
                    />
                    <FeatureList
                        mediaType="image"
                        src="/bing-video-design-kit/design-kit-grouping.png"
                        title={`Standardized grouping`}
                        description={`To enhance the usability of the design kit, we've standardized the grouping of design elements based on two principles: 1) prioritizing Auto Layout and 2) applying semantic naming to all layers.`}
                        swap={false}
                        moduleClassName="mt-8 md:mt-32"
                    />
                    <ResponsiveImage
                        imgSrc="/bing-video-design-kit/pages-kit.png"
                        alt="an overview of the design kit"
                        imgSize="71.6"
                        containerClassName="mt-8 md:mt-32"
                    />
                </div>
            </div>
        </div>
    );

} 