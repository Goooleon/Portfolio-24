import { Metadata } from "next";
import ProjectCaption from "@/app/Components/project-caption";
import TextBlock from "@/app/Components/text-block";
import RichCard from "@/app/Components/rich-card";
import ResponsiveImage from "@/app/Components/responsive-image";
import FeatureList from "@/app/Components/feature-list";
import ExternalLink from "@/app/Components/external-link";

export const metadata: Metadata = {
    title: "Copilot Multimedia Experience",
    description: "The page is about...",
}

export default function Project() {
    return (
        <div>
            <ProjectCaption
                projectTitle={`Improving Search Relevance Feedback through Human Centered Design`}
                projectDate={`Jan - Aug, 2020`}
                projectDes={`The Master Thesis investigates methods to prompt healthcare professionals to provide Explicit Relevance Feedback on search outcomes, like Clinical Trials and Expanded Access Programs, enhancing search quality and efficiency. Employing a research-through-design approach, the thesis intends to formulate a guideline for designing explicit feedback collection in search systems, suitable for platforms such as myTomorrows and beyond.`}
                projectCover="/grad-thesis-myt-search/cover.png"
                role={`Graduate Intern (Research & Design)`}
                platform={`Web`}
                highlights={`Obtained a 9/10 for the thesis and influenced myTomorrows Search's product decisions`}

            />
        </div>
    );
} 