import { Metadata } from "next";
import Image from "next/image";
import ProjectCaption from "@/app/Components/projectcaption";
import TextBlock from "@/app/Components/textBlock";
import RichCard from "@/app/Components/richcard";
import ResponsiveImage from "@/app/Components/responsiveimage";

export const metadata: Metadata = {
    title: "Ripple",
    description: "The page is about...",
}

export default function Project() {
    return (
        <div>
            <ProjectCaption
                projectTitle="Ripple - a refreshed ClassIn X menu"
                projectDate="May-Jul, 2021"
                projectDes="Ripple revitalizes ClassIn X's digital whiteboard by overhauling its menu to boost usability and modernize the interface. This enhancement aims to streamline presentations and interactions, providing a smoother, more intuitive experience for instructors and students alike."
                projectCover="/ripple-classinx-menu/cover.png"
                role="Lead Interaction Designer"
                platform="Windows-based Touchscreen
                (110 inches)"
                highlights="Shipped in 2021 with an issued design patent"

            />

            <div className="max-w-screen-2xl w-full rounded-2xl border-t border-zinc-800 p-4 py-12 md:px-64 md:py-24">
                <div aria-label="introduction section" className="mb-4 md:mb-56">
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
                    />
                    <ResponsiveImage
                        imgSrc="/ripple-classinx-menu/bg-old-IA.png"
                        alt="Description of the image"
                        imgSize="43"
                    />
                </div>

                <div aria-label="problem-section" className="mb-4 md:mb-24">
                    <TextBlock
                        sectionSubtitle="Experience pain points"
                        sectionTitle="Key experience problems"
                        sectionDes="After reviewing and analyzing feedback from both internal and external sources, we identified three main categories of user complaints."
                    />
                    <div className="flex flex-col gap-4 my-16 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                tag="Problem 01"
                                title="Inefficient navigation"
                                des="Users have trouble locating features. Meanwhile, the menu behaves inconsistently, concealing options when activating tools with submenus, such as the Pen tool."
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag="Problem 02"
                                title="Low discoverability"
                                des="Users struggle to recognize and understand certain icons, like the Pointer, and many are unaware that pressing the LOGO collapses the entire menu."
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag="Problem 03"
                                title="Overloaded choices"
                                des="Users find the menu cluttered with too many options without clear grouping, making it difficult to efficiently complete primary tasks."
                            />
                        </div>
                    </div>
                </div>

                <div aria-label="research section" className="mb-4 md:mb-24">
                    <TextBlock
                        sectionSubtitle="User Research"
                        sectionTitle="Immersion with real users"
                        sectionDes="For redesigning inspirations, we carried out user research with 10 participants using a mixed-method approach, including Heuristic Evaluation, Icon Usability Testing, Card Sorting, and Interviews. We complemented this with an analysis of online metrics to derive more robust and persuasive insights."
                    />
                    <div className="flex flex-col gap-4 my-16 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                imgSrc="/ripple-classinx-menu/icon-usability.png"
                                imgAlt="example of icon usability testing"
                                title="Icon Usability Testing"
                                des="Participants were asked to match the icons with text labels."
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                imgSrc="/ripple-classinx-menu/card-sorting.png"
                                imgAlt="example of card sorting"
                                title="Card Sorting"
                                des="Participants were asked to choose 10 out of 16 and put them into 2/3 groups by importance."
                            />
                        </div>
                    </div>
                    <TextBlock
                        sectionDes="By synthesizing the research findings, we discovered that user goals fall into three categories, closely mirroring the stages of a traditional lecture process."
                    />
                    <div className="flex flex-col gap-4 my-16 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                tag="Primary user goal"
                                title="Smooth Knowledge Sharing"
                                des="Users need to make sure a smooth lecturing experience in accordance to course syllabus."
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag="Secondary user goal"
                                title="Resourceful & Interactive Class"
                                des="Users want a lecture to have easy access to rich resources and to offer interaction with students."
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag="Tertiary user goal"
                                title="Easy Material Distribution"
                                des="Users wish ClassIn can offer an easy way to help organise and distribute course materials and assignments."
                            />
                        </div>
                    </div>
                </div>

                <div aria-label="exploration section" className="mb-4 md:mb-56">
                    <TextBlock
                        sectionSubtitle="Design explore"
                        sectionTitle="Exploring interactions"
                        sectionDes="To align with users' goals and address issues in the initial ClassIn menu, we explored various restructuring options for the information architecture (IA), ultimately finalizing the version as below."
                    />
                    <ResponsiveImage
                        imgSrc="/ripple-classinx-menu/explore-IA.png"
                        alt="Description of the image"
                        imgSize="42"
                    />
                    <TextBlock
                        sectionDes="The menu by default displays 18 feature icons, arranged clockwise from the inner to the outer ring without an apparent logic to their placement."
                    />
                    <div className="flex flex-col gap-4 my-16 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                imgSrc="/ripple-classinx-menu/ripple.gif"
                                imgAlt="A gif showcasing the concept of ripple"
                                title="Direction 1 - Ripple"
                                des="Ripple retains the circular design of the original menu but introduces more flexibility."
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                imgSrc="/ripple-classinx-menu/toast.gif"
                                imgAlt="A gif showcasing the concept of toast bar"
                                title="Direction 2 - Toast bar"
                                des="The Toast Bar adopts a grid layout, offering a scalable solution."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 