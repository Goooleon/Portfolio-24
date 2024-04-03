import { Metadata } from "next";
import ProjectCaption from "@/app/Components/projectcaption";

export const metadata: Metadata = {
    title: "Rethinking PowerPoint Animation Experience",
    description: "The page is about...",
}

export default function Project() {
    return ( 
    <div>
        <ProjectCaption 
            projectTitle="Rethinking PowerPoint Animation Experience"
            projectDate="May"
            projectDes="this is a test"
            projectCover="/rethink-ppt-animation/cover.png"
            role="UX Designer Intern"
            platform="Web App"
            highlights="Obtained a score of 9 (out of 10) for the thesis"
        />
    </div>
    );
} 