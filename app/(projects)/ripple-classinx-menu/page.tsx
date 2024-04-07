import { Metadata } from "next";
import ProjectCaption from "@/app/Components/project-caption";
import TextBlock from "@/app/Components/text-block";
import RichCard from "@/app/Components/rich-card";
import ResponsiveImage from "@/app/Components/responsive-image";
import FeatureList from "@/app/Components/feature-list";
import ExternalLink from "@/app/Components/external-link";

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

            <div className="max-w-screen-2xl bg-neutral-100 dark:bg-neutral-950 rounded-2xl border-t border-b border-neutral-200 dark:border-neutral-800 p-8 md:px-56 md:py-32 md:mx-8">
                <div aria-label="introduction section" className="mt-4">
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

                <div aria-label="problem-section" className="mt-4 md:mt-56">
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

                <div aria-label="research section" className="mt-4 md:mt-56">
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

                <div aria-label="exploration section" className="mt-4 md:mt-56">
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

                <div aria-label="design section" className="mt-4 md:mt-56">
                    <TextBlock
                        sectionSubtitle="Final design"
                        sectionTitle="The refreshed menu that works like ripple"
                    />
                    <ResponsiveImage
                        imgSrc="/ripple-classinx-menu/design-showcase.png"
                        alt="Description of the image"
                        imgSize="68"
                    />
                    <ResponsiveImage
                        imgSrc="/ripple-classinx-menu/design-comparison.png"
                        alt="Description of the image"
                        imgSize="38"
                    />
                    <FeatureList
                        mediaType="video"
                        src="/ripple-classinx-menu/ripple-demo.mp4"
                        title="Made for simplicity"
                        description="The Ripple menu for ClassIn X is made for simplicity and focus. The new design aims to assist users to complete key tasks with no distractions."
                        swap={true}
                    />
                    <FeatureList
                        mediaType="video"
                        src="/ripple-classinx-menu/icon-refresh.mp4"
                        title="Refreshed look for clarity"
                        description="The UI has been updated to better highlight the information hierarchy and enhance the discoverability of features."
                        swap={false}
                    />
                    <FeatureList
                        mediaType="video"
                        src="/ripple-classinx-menu/tools-demo.mp4"
                        title="Enhanced affordance & interactions"
                        description="The menu dynamically expands and contracts around a central circle, contextually displaying and hiding actions as needed."
                        swap={true}
                    />

                    <div aria-label="impact section" className="mt-4 md:mt-56">
                        <TextBlock
                            sectionSubtitle="Project result"
                            sectionTitle="Redesign gains a positive impact"
                            sectionDes="The result of the menu refresh was remarkable in monitored feedback channels and usability testing with users."
                        />
                        <div className="flex flex-col gap-4 my-16 w-full md:flex-row md:items-stretch">
                            <div className="flex-1">
                                <RichCard
                                    title="~20% ↓"
                                    titleClassName='text-red-600 text-center'
                                    des="Complaint decreased in all monitored feedback channels"
                                />
                            </div>
                            <div className="flex-1">
                                <RichCard
                                    title="~10% ↓"
                                    titleClassName='text-red-600 text-center'
                                    des="Average task time reduced in usability testing"
                                />
                            </div>
                            <div className="flex-1">
                                <RichCard
                                    title="~15% ↑ and test"
                                    titleClassName='text-green-700 text-center'
                                    des="Task completion rate increased in usability testing"
                                />
                            </div>
                        </div>
                    </div>

                    <div aria-label="reflection section" className="mt-4 md:mt-56">
                    <TextBlock
                            sectionTitle="Reflection & Envision"
                            sectionDes="The circular layout, while unique, does not easily accommodate additional features, necessitating customizable options for diverse use cases. Moreover, refining gesture-based interactions with the menu is crucial to enhancing overall efficiency."
                        />
                    </div>

                    <div aria-label="external links" className="mt-4 md:mt-56">
                        <ExternalLink 
                            title="ClassIn: One Stop Learning Solution"
                            url="https://www.classin.com/hybrid_learning/"
                            favicon="/ripple-classinx-menu/web-thumbnail.png"
                            alt="favicon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 