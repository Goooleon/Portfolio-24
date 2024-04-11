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
                projectTitle={`Saeco Xelsis Experience Redesign`}
                projectDate={`Mar - Jul, 2019`}
                projectDes={`During the 'Usability Testing and User Experience Assessment in Design (UXAD)' course, we partnered with Philips to optimize the Saeco Xelsis coffee machine experience. This project involved exploring and evaluating numerous design concepts to find a path to an improved user experience.`}
                projectCover="/uxad-saeco-redesign/cover.png"
                role={`Lead of interaction design and prototype (group of 5)`}
                platform={`Touchscreen & IoT`}
                highlights={`Inspired Philips' Saeco team for future improvements`}
            />

            <div aria-label="content" className="flex flex-col gap-28 md:gap-56 max-w-screen-2xl bg-neutral-100 dark:bg-neutral-950 rounded-t-2xl border-t border-neutral-200 dark:border-neutral-900 px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div aria-label="video demo section">
                    <div className="pt-[57.36%] relative w-full h-full rounded-lg md:rounded-2xl overflow-hidden drop-shadow-2xl">
                        <iframe
                            src="https://player.vimeo.com/video/379281966?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title="PPT Online Modern Animation Concept"
                            className="absolute w-full h-full top-0 left-0"
                        ></iframe>
                    </div>
                </div>

                <div aria-label="background section">
                    <TextBlock
                        sectionSubtitle={`Background`}
                        sectionTitle={`Philips Saeco Xelsis`}
                        sectionDes={`The Philips Saeco Xelsis is a fully automatic espresso machine that provides a broad selection of coffee options. Key interactions occur through the control panel, which features an LCD display and physical buttons.`}
                    />
                    <ResponsiveImage
                        imgSrc="/uxad-saeco-redesign/background-saeco.png"
                        alt="an illustration of the coffee machine's control panel"
                        imgSize="50"
                    />
                </div>

                <div aria-label="problem section">
                    <TextBlock
                        sectionSubtitle={`The problems`}
                        sectionTitle={`A Significant Potential for enhancement`}
                        sectionDes={`Through empirical research involving our team and invited testers, we analyzed all identified issues and highlighted three problems with potential for improvement through a redesign.`}
                    />
                    <FeatureList
                        mediaType="video"
                        src="/uxad-saeco-redesign/problem-1.mp4"
                        title={`Complex Coffee Brewing Process`}
                        description={`Brewing coffee requires navigating through several mandatory steps. Despite offering 4 to 5 customization options, users are obliged to complete 6 to 7 steps to brew their coffee with all desired customizations.`}
                        swap={false}
                        moduleClassName="mt-8 md:mt-28"
                    />
                    <FeatureList
                        mediaType="video"
                        src="/uxad-saeco-redesign/problem-2.mp4"
                        title={`Low Acceptance of Profile Feature`}
                        description={`The machine features a profile function designed to streamline coffee preparation to just 3 steps. However, because this function is isolated from the main customization process, it confuses users. As a result, they are reluctant to utilize the profile feature.`}
                        swap={true}
                        moduleClassName="mt-8 md:mt-28"
                    />
                    <FeatureList
                        mediaType="video"
                        src="/uxad-saeco-redesign/problem-3.mp4"
                        title={`Unexpected Maintenance Alerts`}
                        description={`Maintenance prompts, such as adding water, can occur unexpectedly, even after the machine has begun grinding the beans. This disrupts the user experience and contradicts their expectations for coffee preparation.`}
                        swap={false}
                        moduleClassName="mt-8 md:mt-28"
                    />
                </div>

                <div aria-label="project goal section">
                    <TextBlock
                        sectionTitle={`Design Goal`}
                        sectionDes={`The design goal is to enhance user experience by simplifying the coffee customization process and making maintenance tasks more manageable.`}
                    />
                    <div className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                tag={`Coffee Brewing`}
                                title={`Simplify customization`}
                                des={`Aim to decrease the number of steps in the customization process and enhance the connection with the profile feature.`}
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag={`machine maintenance`}
                                title={`Proactive Maintenance Alerts`}
                                des={`Offer comprehensive maintenance information upfront to prevent disruptions during coffee brewing.`}
                            />
                        </div>
                    </div>
                </div>

                <div aria-label="design explore section">
                    <TextBlock
                        sectionSubtitle={`Design exploration`}
                        sectionTitle={`The path towards a converged concept`}
                        sectionDes={`With our design objective as a guide, we investigated three design paths to address these challenges and discover elements that enhance the overall product experience.`}
                    />
                    <div className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                imgSrc="/uxad-saeco-redesign/explore-1.png"
                                imgAlt="an illustration demonstrating concept 1"
                                title={`Concept 1 - Mobile Profiles`}
                                des={`Features a minimalist touchscreen for brewing, with extra functions like profile setup accessible via a mobile app, ensuring a fast and simple coffee-making process.`}
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                imgSrc="/uxad-saeco-redesign/explore-2.png"
                                imgAlt="an illustration demonstrating concept 2"
                                title={`Concept 2 - Full touch screen`}
                                des={`BIntegrates all features into a full touchscreen, showing drink options, customization, and maintenance status, for a fully informed and streamlined coffee-making experience.`}
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                imgSrc="/uxad-saeco-redesign/explore-3.png"
                                imgAlt="an illustration demonstrating concept 3"
                                title={`Concept 3 - Turning Knob`}
                                des={`Combines a tactile rotary knob for core functions with two displays: one on the knob for basic info and another for detailed insights, enhancing user interaction.`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div aria-label="content" className="flex flex-col gap-28 md:gap-56 max-w-screen-2xl opposite-theme px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div aria-label="design concept section">
                    <TextBlock
                        sectionSubtitle={`The final concept`}
                        sectionTitle={`Blending Precision with Prediction`}
                        sectionDes={`Following the exploration of three concepts and peer testing, we merged key features from each into a new concept. This unified design combines a full-color touchscreen with embedded LEDs in maintenance parts, addressing most of our design objectives.`}
                    />
                    <ResponsiveImage
                        imgSrc="/uxad-saeco-redesign/concept-overview.png"
                        alt="an overview of the redesigned concept"
                        imgSize="51.8"
                    />
                    <ResponsiveImage
                        imgSrc="/uxad-saeco-redesign/concept-interface.png"
                        alt="an image showcasing the redesigned interface"
                        imgSize="70.7"
                        containerClassName="mt-8 md:mt-16"
                    />
                </div>

                <div aria-label="feature one section">
                    <TextBlock
                        sectionSubtitle={`Feature 01`}
                        sectionTitle={`Coffee ID`}
                        sectionDes={
                            <>
                                {`Coffee ID offers swift access to drink profiles on a unified screen, with easy-to-navigate, linked profile and customization options. Designed for convenience, it simplifies choosing and customizing drinks, ideal for users seeking quick, personalized coffee experiences. `}
                                <a
                                    href="https://vimeo.com/379624572?share=copy"
                                    target="_blank" rel="noopener noreferrer"
                                    className="uppercase font-bold text-sm text-sky-300 dark:text-sky-500 hover:text-sky-400 dark:hover:text-sky-600">
                                    {`See video ↗️`}
                                </a>
                            </>
                        } />
                    <ResponsiveImage
                        imgSrc="/uxad-saeco-redesign/coffee-id.png"
                        alt="an illustration of how coffee id works"
                        imgSize="62"
                    />
                </div>

                <div aria-label="feature two section">
                    <TextBlock
                        sectionSubtitle={`Feature 02`}
                        sectionTitle={`Maintenance Prediction`}
                        sectionDes={
                            <>
                                {`The maintenance forecast, with its indicator bar and info page, simplifies tasks like refilling and emptying. It activates when only 3 cups of coffee (one bar represents the maximum ingredients needed to make one Americano) can be made, streamlining upkeep and enhancing user control. `}
                                <a
                                    href="https://vimeo.com/388352043?share=copy"
                                    target="_blank" rel="noopener noreferrer"
                                    className="uppercase font-bold text-sm text-sky-300 dark:text-sky-500 hover:text-sky-400 dark:hover:text-sky-600">
                                    {`See video ↗️`}
                                </a>
                            </>
                        }
                    />
                    <ResponsiveImage
                        imgSrc="/uxad-saeco-redesign/prediction.png"
                        alt="an illustration of how maintenance prediction works"
                        imgSize="62"
                    />
                </div>
            </div>

            <div aria-label="content" className="flex flex-col gap-28 md:gap-56 max-w-screen-2xl bg-neutral-100 dark:bg-neutral-950 rounded-b-2xl border-b border-neutral-200 dark:border-neutral-900 px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div aria-label="user testing section">
                    <TextBlock
                        sectionSubtitle={`Concept evaluation`}
                        sectionTitle={`Simulated Environment User Testing`}
                        sectionDes={`For this concept, we created a simulated environment to assess the design with an interactive prototype. Our test plan aimed to uncover user experience issues in the redesign, including unexpected problems, to refine the final design.`}
                    />
                    <div className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                tag={`Evaluation goal 01`}
                                title={`Test new features`}
                                des={
                                    <>
                                        {`• Assess if users can more easily and fluidly make their customized coffee.`} <br /><br />
                                        {`• Evaluate whether ‘maintenance forecast’ enhances the pleasantness of maintenance notifications.`}<br /><br />
                                        {`• Determine the effectiveness of lighting icons in assisting users during maintenance.`}
                                    </>
                                }
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag={`Evaluation goal 02`}
                                title={`Evaluate usability`}
                                des={
                                    <>
                                        {`• Assess user comprehension of the machine's information, icons, and interactions.`} <br /><br />
                                        {`• Evaluate whether the machine's aesthetic style aligns with its high-end market positioning.`}<br /><br />
                                    </>
                                }
                            />
                        </div>
                    </div>
                    <ResponsiveImage
                        imgSrc="/uxad-saeco-redesign/testing-setup.png"
                        alt="user testing setup"
                        imgSize="28.7"
                        containerClassName="mt-8 md:mt-16"
                    />
                    <ResponsiveImage
                        imgSrc="/uxad-saeco-redesign/testing-prototype.png"
                        alt="an illustration of the prototype being tested"
                        imgSize="65.9"
                        containerClassName="mt-8 md:mt-16"
                    />
                </div>
                <div aria-label="concept modification section">
                    <TextBlock
                        sectionSubtitle={`Concept modification`}
                        sectionTitle={`Iteration based on user feedback`}
                        sectionDes={`The evaluation yielded positive feedback, with test participants favoring the usability and new features of the concept. However, several areas were highlighted for further refinement, as detailed below.`}
                    />
                    <ResponsiveImage
                        imgSrc="/uxad-saeco-redesign/iteration-1.png"
                        alt="design iteration 1"
                        imgSize="48"
                    />
                    <ResponsiveImage
                        imgSrc="/uxad-saeco-redesign/iteration-2.png"
                        alt="design iteration 2"
                        imgSize="48"
                        containerClassName="mt-8 md:mt-16"
                    />
                    <ResponsiveImage
                        imgSrc="/uxad-saeco-redesign/iteration-3.png"
                        alt="design iteration 3"
                        imgSize="55.7"
                        containerClassName="mt-8 md:mt-16"
                    />
                </div>
                <div aria-label="reflection section">
                    <TextBlock
                        sectionTitle={`Reflection & Envision`}
                        sectionDes={
                            <>
                                {`This project involved multiple cycles of design, testing, and refinement. Through this process, I gained significant insights into planning and conducting user experience evaluations and integrating varied feedback into design concepts.`}
                                <br /><br />
                                {`Reflecting on the journey and the design concept, I believe there's room to further explore Machine Learning and innovative interaction methods. For example, Machine Learning could make 'maintenance prediction' more intuitive for users. Additionally, employing NFC technology on mobile phones to establish a Coffee ID, enabling users to simply tap their phone on the machine to brew their coffee, presents an exciting avenue for enhancing the user experience.`}
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    );
} 