import { Metadata } from "next";
import ProjectCaption from "@/app/Components/project-caption";
import TextBlock from "@/app/Components/text-block";

export const metadata: Metadata = {
    title: "Rethinking PowerPoint Animation Experience",
    description: "The page is about...",
}

export default function Project() {
    return (
        <div>
            <ProjectCaption
                projectTitle="Rethinking PowerPoint Animation Experience"
                projectDate="May - Jul, 2018"
                projectDes="PowerPoint Online is shifting from the traditional Office ribbon to a sleeker single-line ribbon. This project aims to explore interactions within the narrower ribbon space to optimize the animation experience and beyond."
                projectCover="/rethink-ppt-animation/cover.png"
                role="UX Designer Intern"
                platform="Web Application"
                highlights="Inspired team to develop further in animation recommendations"
            />

            <div>
                <TextBlock
                    sectionSubtitle="test"
                    sectionTitle="test title"
                    sectionDes="for testing"
                />
            </div>

        </div>
    );
} 