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
                projectTitle={`Improving Search Relevance Feedback through Human Centered Design`}
                projectDate={`Jan - Aug, 2020`}
                projectDes={`The Master Thesis investigates methods to prompt Healthcare Professionals (HCPs) to provide Explicit Relevance Feedback on search outcomes, like Clinical Trials (CT) and Expanded Access Programs (EAP), enhancing system quality and search efficiency. Employing a research-through-design approach, the thesis intends to formulate a guideline for designing explicit feedback collection mechanisms in search systems, suitable for platforms such as myTomorrows and beyond.`}
                projectCover="/ripple-classinx-menu/cover.png"
                role="Lead Interaction Designer"
                platform="Windows-based Touchscreen
            (110 inches)"
                highlights="Shipped in 2021 with an issued design patent"

            />

            <div aria-label="content" className="flex flex-col gap-28 md:gap-56 max-w-screen-2xl bg-neutral-100 dark:bg-neutral-950 rounded-2xl border-t border-b border-neutral-200 dark:border-neutral-900 px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div aria-label="background section">
                    <TextBlock
                        sectionSubtitle="Background"
                        sectionTitle="The initial ClassIn X menu"
                        sectionDes="The initial menu features a two-ring circular design: the inner ring presents a static array of primary functions, while the outer ring serves as a flexible space for secondary features and beyond."
                    />
                    <ResponsiveImage
                        imgSrc="/ripple-classinx-menu/bg-old-design.png"
                        alt="Description of the image"
                        imgSize="34"
                    />
                    <TextBlock
                        sectionDes="The menu by default displays 18 feature icons, arranged clockwise from the inner to the outer ring without an apparent logic to their placement."
                        moduleClassName="mt-8 md:mt-16 mb-12"
                    />
                    <ResponsiveImage
                        imgSrc="/ripple-classinx-menu/bg-old-IA.png"
                        alt="Description of the image"
                        imgSize="43"
                    />
                </div>
            </div>
        </div>
    );
} 