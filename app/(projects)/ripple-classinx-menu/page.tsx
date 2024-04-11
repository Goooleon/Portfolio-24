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

                <div aria-label="problem-section">
                    <TextBlock
                        sectionSubtitle="Pain points"
                        sectionTitle="The menu that obstacles and dissatisfies users"
                        sectionDes="After reviewing and analyzing feedback from both internal and external sources, we identified three main categories of user complaints."
                    />
                    <div className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                tag="Problem 01"
                                title="Inefficient Navigation"
                                des="Users have trouble locating features. Meanwhile, the menu behaves inconsistently, concealing options when activating tools with submenus, such as the Pen tool."
                                containerClassName="bg-red-100 dark:bg-red-950"
                                tagClassName="bg-red-600 dark:bg-red-200 text-white dark:text-red-900"
                                desClassName="dark:text-white dark:opacity-60"
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag="Problem 02"
                                title="Low Discoverability"
                                des="Users struggle to recognize and understand certain icons, like the Pointer, and many are unaware that pressing the LOGO collapses the entire menu."
                                containerClassName="bg-red-100 dark:bg-red-950"
                                tagClassName="bg-red-600 dark:bg-red-200 text-white dark:text-red-900"
                                desClassName="dark:text-white dark:opacity-60"
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag="Problem 03"
                                title="Overloaded Choices"
                                des="Users find the menu cluttered with too many options without clear grouping, making it difficult to efficiently complete primary tasks."
                                containerClassName="bg-red-100 dark:bg-red-950"
                                tagClassName="bg-red-600 dark:bg-red-200 text-white dark:text-red-900"
                                desClassName="dark:text-white dark:opacity-60"
                            />
                        </div>
                    </div>
                </div>

                <div aria-label="research section">
                    <TextBlock
                        sectionSubtitle="User Research"
                        sectionTitle="Immersion with real users"
                        sectionDes="For redesigning inspirations, we carried out user research with 10 participants using a mixed-method approach, including Heuristic Evaluation, Icon Usability Testing, Card Sorting, and Interviews. We complemented this with an analysis of online metrics to derive more robust and persuasive insights."
                    />
                    <div className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
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
                        moduleClassName="mb-12 mt-8 md:mt-16"
                    />
                    <div className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                tag="Primary user goal"
                                title="Smooth Knowledge Sharing"
                                des="Users need to make sure a smooth lecturing experience in accordance to course syllabus."
                                containerClassName="bg-emerald-100 dark:bg-emerald-950"
                                tagClassName="bg-emerald-600 dark:bg-emerald-200 text-white dark:text-emerald-900"
                                desClassName="dark:text-white dark:opacity-60"
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag="Secondary user goal"
                                title="Resourceful & Interactive Class"
                                des="Users want a lecture to have easy access to rich resources and to offer interaction with students."
                                containerClassName="bg-emerald-100 dark:bg-emerald-950"
                                tagClassName="bg-emerald-600 dark:bg-emerald-200 text-white dark:text-emerald-900"
                                desClassName="dark:text-white dark:opacity-60"
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag="Tertiary user goal"
                                title="Easy Material Distribution"
                                des="Users wish ClassIn can offer an easy way to help organise and distribute course materials and assignments."
                                containerClassName="bg-emerald-100 dark:bg-emerald-950"
                                tagClassName="bg-emerald-600 dark:bg-emerald-200 text-white dark:text-emerald-900"
                                desClassName="dark:text-white dark:opacity-60"
                            />
                        </div>
                    </div>
                </div>

                <div aria-label="exploration section">
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
                        moduleClassName="mb-12 mt-8 md:mt-16"
                    />
                    <div className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
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

                <div aria-label="design section">
                    <TextBlock
                        sectionSubtitle="Final design"
                        sectionTitle="The refreshed menu that ripples"
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
                        containerClassName="mt-8 md:mt-16"
                    />
                    <FeatureList
                        mediaType="video"
                        src="/ripple-classinx-menu/ripple-demo.mp4"
                        title="Made for simplicity"
                        description="The Ripple menu for ClassIn X is made for simplicity and focus. The new design aims to assist users to complete key tasks with no distractions."
                        swap={true}
                        moduleClassName="mt-8 md:mt-32"
                    />
                    <FeatureList
                        mediaType="video"
                        src="/ripple-classinx-menu/icon-refresh.mp4"
                        title="Refreshed look for clarity"
                        description="The UI has been updated to better highlight the information hierarchy and enhance the discoverability of features."
                        swap={false}
                        moduleClassName="mt-8 md:mt-32"
                    />
                    <FeatureList
                        mediaType="video"
                        src="/ripple-classinx-menu/tools-demo.mp4"
                        title="Enhanced affordance & interactions"
                        description="The menu dynamically expands and contracts around a central circle, contextually displaying and hiding actions as needed."
                        swap={true}
                        moduleClassName="mt-8 md:mt-32"
                    />
                </div>

                <div aria-label="impact section">
                    <TextBlock
                        sectionSubtitle="Project result"
                        sectionTitle="Redesign gains a positive impact"
                        sectionDes="The result of the menu refresh was remarkable in monitored feedback channels and usability testing with users."
                    />
                    <div className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                title="~20% ↓"
                                titleClassName="py-8 text-3xl font-extrabold text-red-500 dark:text-red-300 text-center"
                                des="Complaint decreased in all monitored feedback channels"
                                desClassName="text-center"
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                title="~10% ↓"
                                titleClassName="py-8 text-3xl font-extrabold text-red-500 dark:text-red-300 text-center"
                                des="Average task time reduced in usability testing"
                                desClassName="text-center"
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                title="~15% ↑"
                                titleClassName="py-8 text-3xl font-extrabold text-emerald-600 dark:text-emerald-300 text-center"
                                des="Task completion rate increased in usability testing"
                                desClassName="text-center"
                            />
                        </div>
                    </div>
                </div>

                <div aria-label="reflection section">
                    <TextBlock
                        sectionTitle="Reflection & Envision"
                        sectionDes="The circular layout, while unique, does not easily accommodate additional features, necessitating customizable options for diverse use cases. Moreover, refining gesture-based interactions with the menu is crucial to enhancing overall efficiency."
                        moduleClassName="mb-0"
                    />
                </div>

                <div aria-label="external links">
                    <ExternalLink
                        title="ClassIn: One Stop Learning Solution"
                        url="https://www.classin.com/hybrid_learning/"
                        favicon="/ripple-classinx-menu/web-thumbnail.png"
                        alt="favicon"
                    />
                </div>

            </div>
        </div>
    );
} 