import { Metadata } from "next";
import ProjectCaption from "@/app/Components/project-caption";
import TextBlock from "@/app/Components/text-block";
import RichCard from "@/app/Components/rich-card";
import ResponsiveImage from "@/app/Components/responsive-image";
import FeatureList from "@/app/Components/feature-list";
import ExternalLink from "@/app/Components/external-link";
import VisualTextBlock from "@/app/Components/visual-text-block";

export const metadata: Metadata = {
    title: "Master Thesis",
    description: "The Master Thesis investigates methods to prompt healthcare professionals to provide Explicit Relevance Feedback on search outcomes to enhance search quality and efficiency.",
}

export default function Project() {
    return (
        <div>
            <ProjectCaption
                projectTitle={`Improving Search Relevance Feedback through Human Centered Design`}
                projectDate={`Jan - Aug, 2020`}
                projectDes={`The Master Thesis investigates methods to prompt healthcare professionals to provide Explicit Relevance Feedback on search outcomes to enhance search quality and efficiency. Employing a research-through-design approach, the project intends to formulate a guideline for designing explicit feedback collection in search systems, suitable for platforms such as myTomorrows and beyond.`}
                projectCover="/grad-thesis-myt-search/cover.png"
                role={`Graduate Intern (Research & Design)`}
                platform={`Web`}
                highlights={`Obtained a 9/10 for the thesis and influenced myTomorrows Search's product decisions`}
                placeholderColor={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcfnrZfwAHkgMpU5FQdQAAAABJRU5ErkJggg==`}
            />

            <div aria-label="content" className="flex flex-col gap-28 md:gap-56 bg-neutral-50 dark:bg-neutral-950 rounded-t-2xl border-t border-neutral-100 dark:border-neutral-900 px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div aria-label="video demo section">
                    <div className="pt-[56.25%] relative w-full h-full rounded-lg md:rounded-2xl drop-shadow-2xl bg-neutral-100 dark:bg-neutral-900">
                        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">{`Your access to Vimeo is restricted :(`}</h1>
                        <iframe
                            src="https://player.vimeo.com/video/462139328?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            title="myTomorrows Search Concept"
                            className="absolute w-full h-full top-0 left-0 rounded-lg md:rounded-2xl z-10"
                        ></iframe>
                    </div>
                </div>

                <div aria-label="background section">
                    <TextBlock
                        sectionSubtitle={`Background`}
                        sectionTitle={`The Bridge Between Patients and New Treatments`}
                        sectionDes={
                            <>
                                {`myTomorrows is a PharmaTech company that aims to help patients discover and access treatments under development (i.e., Clinical trials and Expanded Access Programs), addressing a significant hurdle for patients with unmet medical needs.`}
                                <br />
                                <br />
                                {`To advance the pace of matching, myTomorrows developed a specialized search engine for healthcare professionals to find new treatments all around the world.`}
                            </>
                        }
                    />
                    <ResponsiveImage
                        imgSrc="/grad-thesis-myt-search/background-industry.png"
                        alt="an illustration of how patients with unmet medical needs access CT and EAP"
                        imgSize="50"
                    />
                    <ResponsiveImage
                        imgSrc="/grad-thesis-myt-search/background-search.png"
                        alt="screenshot of myTomorrow's original search"
                        imgSize="62.5"
                        containerClassName="mt-8 md:mt-16"
                    />
                </div>

                <div aria-label="problem section">
                    <TextBlock
                        sectionSubtitle={`The need`}
                        sectionTitle={`The Lack of Relevance Feedback`}
                        sectionDes={
                            <>
                                {`myTomorrows Search is capable of indexing through all recognized clinical trial registries such as clinicaltrials.gov. However, due to the limited scale of myTomorrows Search users, analyzing user behaviors (implicit relevance feedback) fails to help improve the search system. `}
                                <br />
                                <br />
                                {`Therefore, myTomorrows Search alternates to involve users in providing explicit relevance feedback to improve search quality and efficiency.`}
                            </>
                        }
                    />
                    <ResponsiveImage
                        imgSrc="/grad-thesis-myt-search/the-problem.png"
                        alt="an illustration showing how explicit feedback can contribute"
                        imgSize="40"
                    />
                </div>

                <div aria-label="user research section">
                    <TextBlock
                        sectionSubtitle={`User research`}
                        sectionTitle={`Understanding Healthcare Professionals`}
                        sectionDes={
                            <>
                                {`Literature reviews, expert interviews, and role-playing sessions were conducted to gather healthcare professionals'`} <span className="font-semibold text-neutral-950 dark:text-white">expectations</span> {`for myTomorrows Search, their`} <span className="font-semibold text-neutral-950 dark:text-white">attitude</span> {`towards providing feedback, and identify`} <span className="font-semibold text-neutral-950 dark:text-white">key factors</span> {`influencing their relevance feedback.`}
                            </>
                        }
                    />
                    <div className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                imgSrc="/grad-thesis-myt-search/expert-interview.png"
                                imgAlt="a zoom interview with an expert"
                                title={`Expert Interview`}
                                des={`Semi-structured interviews with 9 HCPs, including Medical Ethicists, Physician-Scientists, and Clinicians from the Netherlands, China, and Brazil.`}
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                imgSrc="/grad-thesis-myt-search/role-playing.png"
                                imgAlt="an image of a role playing session"
                                title={`Role-playing session`}
                                des={`Conducted with 5 internal and external HCPs by observing their search behaviors and ask for ‘relevance feedback’ as they examines search results.`}
                            />
                        </div>
                    </div>
                    <TextBlock
                        sectionDes={`Not all healthcare professionals are familiar with Clinical Trials (CT) and Expanded Access Programs (EAPs) as treatment options for patients. Those who are aware approach them cautiously yet show openness to information aggregators like myTomorrows Search. To appeal to healthcare professionals, two key expectations they hold are outlined below.`}
                        moduleClassName="mb-12 mt-8 md:mt-16"
                    />
                    <div className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                tag={`Expectation 01`}
                                title={`A Trustful, Unbiased, and Transparent Platform`}
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag={`Expectation 02`}
                                title={`Having Complete CT/EAP database`}
                            />
                        </div>
                    </div>
                    <TextBlock
                        sectionDes={
                            <>
                                {`Healthcare professionals typically`} <span className="font-semibold text-neutral-950 dark:text-white">do not anticipate</span> {`giving relevance feedback. Their feedback tends to occur in response to extreme situations, like notably unprofessional clinical trial registrations.`}
                                <br /><br />
                                {`Their`} <span className="font-semibold text-neutral-950 dark:text-white">feedback for the same result may differ</span> {`depending on patient conditions or as their knowledge expands. A table below outlines the main factors influencing their relevance judgments.`}
                            </>
                        }
                        moduleClassName="mb-12 mt-8 md:mt-16"
                    />
                    <ResponsiveImage
                        imgSrc="/grad-thesis-myt-search/relevance-feedback-factors.png"
                        alt="a table of relevance feebdack factors"
                        imgSize="69"
                    />
                </div>

                <div aria-label="ideation section">
                    <TextBlock
                        sectionSubtitle={`Ideation`}
                        sectionTitle={`Exploring Interactions to Collect Feedback`}
                        sectionDes={
                            <>
                                {`In the generalized search flow, it was determined that relevance feedback can be provided on SERP (the search results page) by assessing the interventions under study, with assessments unlikely to change after viewing the full study record.`}
                                <br />
                                <br />
                                {`Integrating this with the foundational feedback collection flow, various design approaches for soliciting relevance feedback were explored.`}
                            </>
                        }
                    />
                    <div className="flex gap-2 md:gap-4">
                        <ResponsiveImage
                            imgSrc="/grad-thesis-myt-search/search-flow.png"
                            alt="solution illustration"
                            imgSize="58.1"
                        />
                        <ResponsiveImage
                            imgSrc="/grad-thesis-myt-search/feedback-collection-flow.png"
                            alt="solution illustration"
                            imgSize="58.1"
                        />
                    </div>
                    <TextBlock
                        sectionDes={`After multiple exploration rounds and speed dating sessions with target users, the explorations were narrowed to three distinct designs as below.`}
                        moduleClassName="mb-12 mt-8 md:mt-16"
                    />
                    <div className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                imgSrc="/grad-thesis-myt-search/explore-screener.png"
                                imgAlt="an illustration demonstrating the idea of pre-screener"
                                title={`Pre-screener`}
                                des={`By tagging search results to either receive recommendations or hide irrelevant ones.`}
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                imgSrc="/grad-thesis-myt-search/explore-reminder.png"
                                imgAlt="an illustration demonstrating the idea of reminder"
                                title={`Reminder`}
                                des={`By replacing the 'back' button with a feedback collection prompt.`}
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                imgSrc="/grad-thesis-myt-search/explore-hearty.png"
                                imgAlt="an illustration demonstrating the idea of hearty"
                                title={`Hearty`}
                                des={`By introducing a gamified avatar that requests feedback at the bottom of the page.`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div aria-label="content" className="relative bg-neutral-50 dark:bg-neutral-950 flex flex-col gap-28 md:gap-56 max-w-screen-2xl px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none bg-gradient-to-b from-sky-200 dark:from-sky-950 to-transparent">
                </div>
                <div aria-label="design showcase section">
                    <VisualTextBlock
                        textColor="text-sky-700 dark:text-sky-400"
                        sectionSubtitle="The Design Concept"
                        sectionTitle={`A Search that Evolves with Users`}
                        sectionDes={
                            <>
                                {`User testing revealed that the 'pre-screener' was particularly more effective, transforming personal utility into actionable relevance feedback to improve myTomorrows Search.

                                    The prescreening tool enables healthcare professionals to swiftly indicate their initial choices on SERP, as typically done in medical literature reviews. Additionally, the relevance buckets provide extra functionality to make their search more manageable and efficient.
                                `}
                            </>
                        }
                    />

                    <ResponsiveImage
                        imgSrc="/grad-thesis-myt-search/concept-overview.png"
                        alt="solution illustration"
                        imgSize="62.1"
                    />
                    <FeatureList
                        mediaType="image"
                        src="/grad-thesis-myt-search/concept-bucket-1.png"
                        title={`Get similar recommendations`}
                        description={`The 'Interested' bucket displays potentially high-relevance results for different queries. As more items are added to this bucket, increasingly better and more similar studies are recommended, expanding the search scope for users.`}
                        swap={true}
                        moduleClassName="mt-8 md:mt-32"
                    />
                    <FeatureList
                        mediaType="image"
                        src="/grad-thesis-myt-search/concept-bucket-2.png"
                        title={`Hide irrelevant one with tags`}
                        description={`The 'Not Interested' bucket holds results that don't directly meet users' informational needs. Users can add tags to specify reasons and opt to hide these results from their search outcomes.`}
                        swap={false}
                        moduleClassName="mt-8 md:mt-32"
                    />
                </div>
            </div>

            <div aria-label="content" className="relative bg-neutral-50 dark:bg-neutral-950 flex flex-col gap-28 md:gap-56 max-w-screen-2xl px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div className="absolute top-0 left-0 w-full h-[800px] pointer-events-none bg-gradient-to-b from-emerald-200 dark:from-emerald-950 to-transparent">
                </div>

                <div aria-label="generalized design guideline section">
                    <VisualTextBlock
                        textColor="text-emerald-700 dark:text-emerald-400"
                        sectionSubtitle="The Generalized Guide"
                        sectionTitle={`A Guide to Designing Explicit Feedback Collection`}
                        sectionDes={
                            <>
                                {`After synthesizing research insights and reflecting on the project's progression, a design guide was formulated. This guide details approaches for crafting feedback collection experiences within search systems and extends to broader applications.
                                `}
                            </>
                        }
                    />


                    <div className="flex flex-col gap-4">
                        <ResponsiveImage
                            imgSrc="/grad-thesis-myt-search/step-1.png"
                            alt="the first step"
                            imgSize="29.1"
                        />
                        <ResponsiveImage
                            imgSrc="/grad-thesis-myt-search/step-2.png"
                            alt="the second step"
                            imgSize="29.1"
                        />
                        <ResponsiveImage
                            imgSrc="/grad-thesis-myt-search/step-3.png"
                            alt="the third step"
                            imgSize="29.1"
                        />
                        <ResponsiveImage
                            imgSrc="/grad-thesis-myt-search/step-4.png"
                            alt="the fourth step"
                            imgSize="29.1"
                        />
                    </div>
                    <TextBlock
                        sectionDes={`Ten recommendations on designing feedback collection experience based on three behavioral change pillars of Motivation, Ability, and Prompt.`}
                        moduleClassName="mb-12 mt-8 md:mt-16"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <ResponsiveImage
                                imgSrc="/grad-thesis-myt-search/cards-0.png"
                                alt="design recommendation card 1"
                                imgSize="40.2"
                            />
                        </div>
                        <div>
                            <ResponsiveImage
                                imgSrc="/grad-thesis-myt-search/cards-1.png"
                                alt="design recommendation card 2"
                                imgSize="40.2"
                            />
                        </div>
                        <div>
                            <ResponsiveImage
                                imgSrc="/grad-thesis-myt-search/cards-2.png"
                                alt="design recommendation card 3"
                                imgSize="40.2"
                            />
                        </div>
                        <div>
                            <ResponsiveImage
                                imgSrc="/grad-thesis-myt-search/cards-3.png"
                                alt="design recommendation card 4"
                                imgSize="40.2"
                            />
                        </div>
                        <div>
                            <ResponsiveImage
                                imgSrc="/grad-thesis-myt-search/cards-4.png"
                                alt="design recommendation card 5"
                                imgSize="40.2"
                            />
                        </div>
                        <div>
                            <ResponsiveImage
                                imgSrc="/grad-thesis-myt-search/cards-5.png"
                                alt="design recommendation card 6"
                                imgSize="40.2"
                            />
                        </div>
                        <div>
                            <ResponsiveImage
                                imgSrc="/grad-thesis-myt-search/cards-6.png"
                                alt="design recommendation card 7"
                                imgSize="40.2"
                            />
                        </div>
                        <div>
                            <ResponsiveImage
                                imgSrc="/grad-thesis-myt-search/cards-7.png"
                                alt="design recommendation card 8"
                                imgSize="40.2"
                            />
                        </div>
                        <div>
                            <ResponsiveImage
                                imgSrc="/grad-thesis-myt-search/cards-8.png"
                                alt="design recommendation card 9"
                                imgSize="40.2"
                            />
                        </div>
                        <div>
                            <ResponsiveImage
                                imgSrc="/grad-thesis-myt-search/cards-9.png"
                                alt="design recommendation card 10"
                                imgSize="40.2"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div aria-label="content" className="flex flex-col gap-28 md:gap-56 max-w-screen-2xl bg-neutral-50 dark:bg-neutral-950 rounded-b-2xl border-b border-neutral-200 dark:border-neutral-900 px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div aria-label="reflection and envision section">
                    <TextBlock
                        sectionTitle={`Retrospect`}
                        sectionDes={`Reflecting on the design guide, its usefulness and effectiveness are yet to be determined. The guide's development was influenced by both empirical findings and research outcomes, the true value of the guide can only be unlocked through broader application in real-world contexts.
                            
                            See more details about the research from below links 👇`}
                    />

                    <div aria-label="external link-1" className="mb-4">
                        <ExternalLink
                            title={`Improving Search Relevance Feedback through Human Centered Design`}
                            url="https://repository.tudelft.nl/record/uuid:fad805a9-136b-49a7-a2e8-228b37ba597f"
                            favicon="/grad-thesis-myt-search/tud-favicon.png"
                            alt="favicon"
                        />
                    </div>

                    <div aria-label="external link-1">
                        <ExternalLink
                            title={`myTomorrows Search`}
                            url="https://platform.mytomorrows.com/home"
                            favicon="/grad-thesis-myt-search/myt-favicon.png"
                            alt="favicon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 