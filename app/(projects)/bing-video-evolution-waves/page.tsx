import { Metadata } from "next";
import ProjectCaption from "@/app/Components/project-caption";
import TextBlock from "@/app/Components/text-block";
import RichCard from "@/app/Components/rich-card";
import ResponsiveImage from "@/app/Components/responsive-image";
import ExternalLink from "@/app/Components/external-link";
import VisualTextBlock from "@/app/Components/visual-text-block";
import AnimatedWrapper from "@/app/Components/animated-wrapper";

export const metadata: Metadata = {
    title: "Bing Video Evolution Waves",
    description: "A case study on how Bing’s video search experience evolved through major design waves to meet changing user trends in online video discovery.",
}

export default function Project() {
    return (
        <div>
            <ProjectCaption
                projectTitle={`The waves of  video search experience evolution on Bing`}
                projectDate={`2021 - 2024`}
                projectDes={`Video has become a dominant form of online content, making up 82% of internet traffic in 2022 and gaining greater visibility on SERP (search engine result page). This case study highlights a selected collection of opportunity-led projects and design explorations that reveal and reflect how video search experience on Bing has adapted and evolved to catch up with waves of ever-changing trends in the world.`}
                projectCover="/bing-video-evolution-waves/Cover.png"
                role={`Product Designer`}
                platform={`Web (Desktop & Mobile)`}
                highlights={`Delivered various impactful feature launches`}
                placeholderColor={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcfO3HfwAHxwNiegBRawAAAABJRU5ErkJggg==`}
            />

            <div aria-label="content" className="flex flex-col gap-28 md:gap-56 bg-neutral-50 dark:bg-neutral-950 rounded-t-2xl border-t border-neutral-200 dark:border-neutral-900 px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div aria-label="background section">
                    <TextBlock
                        sectionSubtitle={`Background`}
                        sectionTitle={`The role of video in search`}
                        sectionDes={
                            <>
                                {`Users come to search engines with different intents. Regardless of purpose, video is one of many result formats Bing uses to meet their needs, offering a more vivid and easily digestible experience.`}
                            </>
                        }
                    />
                    <ResponsiveImage
                        imgSrc="/bing-video-evolution-waves/Bing-SERP.png"
                        alt="a screenshot of Bing's SERP with video results"
                        imgSize="56.3"
                    />

                    <TextBlock
                        sectionDes={`For each search, Bing decides whether to surface video content and where to place it on the SERP. Often, one or more videos appear as a Video Answer, which can take different layouts depending on relevance to the query. The strength of this relevance—from weak to strong—defines how designers shape the video experience across the spectrum.`}
                        moduleClassName="mb-12 mt-8 md:mt-16"
                    />

                    <ResponsiveImage
                        imgSrc="/bing-video-evolution-waves/Search-Intents.png"
                        alt="an illustrationg showing different levels of video intent in search"
                        imgSize="62.5"
                        containerClassName="mt-8 md:mt-16"
                    />
                </div>

                <div aria-label="design principle section">
                    <TextBlock
                        sectionSubtitle={`Design principle`}
                        sectionTitle={`Make Relevance Visible`}
                        sectionDes={
                            <>
                                {`In video search, relevance isn’t just about what’s retrieved—it’s about how clearly it’s communicated. This philosophy guides to draw our design principle for video experiences.`}
                            </>
                        }
                    />
                    <AnimatedWrapper>
                        <p className="text-2xl md:text-4xl leading-[2.2rem] md:leading-[3rem] px-8 py-4 border-l-4">
                            Design experiences that support users{' '}
                            <span className="font-bold text-blue-600 dark:text-blue-400">Discover</span>{' '}
                            relevant videos that they can instantly{' '}
                            <span className="font-bold text-violet-600 dark:text-violet-400">Recognize</span>{' '}
                            and effortlessly{' '}
                            <span className="font-bold text-lime-600 dark:text-lime-400">Comprehend</span>
                        </p>
                    </AnimatedWrapper>
                </div>
            </div>

            <div aria-label="content" className="relative bg-neutral-50 dark:bg-neutral-950 flex flex-col gap-28 md:gap-56 max-w-screen-2xl px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none bg-gradient-to-b from-blue-200 dark:from-blue-950 to-transparent">
                </div>

                <div aria-label="wave 1 section">
                    <VisualTextBlock
                        textColor="text-blue-700 dark:text-blue-400"
                        sectionSubtitle="Wave 1 - since 2021"
                        sectionTitle={`Elevating videos’ presence`}
                        sectionDes={
                            <>
                                {`As video consumption continued to grow in popularity, in the first wave, the focus was on strengthening the video search experience in scenarios with strong video intent.`}
                            </>
                        }
                    />

                    <TextBlock
                        sectionSubtitle={`Project 01`}
                        sectionTitle={`Video Answer In Pole Position`}
                        sectionDes={
                            <>
                                {`When video intent is high, Bing surfaces videos at the top of the SERP in a new Pole Position layout—an immersive, horizontal design that reduces vertical space while displaying more content for better visibility and efficiency.`}
                            </>
                        }
                    />

                    <ResponsiveImage
                        imgSrc="/bing-video-evolution-waves/pole-position-answer.png"
                        alt="pole-position video answer illustration"
                        imgSize="56.3"
                    />

                    <TextBlock
                        sectionDes={`In cases where a single video demonstrates particularly high relevance, we elevate it further as a hero video — rendered in a more spacious and immersive format to emphasize its prominence.`}
                        moduleClassName="mb-12 mt-8 md:mt-16"
                    />

                    <ResponsiveImage
                        imgSrc="/bing-video-evolution-waves/hero-pole-position-answer.png"
                        alt="pole-position video answer illustration with hero video"
                        imgSize="56.3"
                    />

                    <div className="mt-8 md:mt-16 mb-28 md:mb-56 flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                title="DAU +2.5%"
                                titleClassName="py-8 text-3xl font-extrabold text-emerald-600 dark:text-emerald-300 text-center"
                                des="DAU measures user activity and engagement on a daily basis"
                                desClassName="text-center"
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                title="APSAT +1.17"
                                titleClassName="py-8 text-3xl font-extrabold text-emerald-600 dark:text-emerald-300 text-center"
                                des="APSAT measures overall user satisfaction"
                                desClassName="text-center"
                            />
                        </div>
                    </div>

                    <TextBlock
                        sectionSubtitle={`Project 02`}
                        sectionTitle={`TV Series Answer (Bing China)`}
                        sectionDes={
                            <>
                                {`In China, streaming platforms like Bilibili, iQiyi, and WeTV offer full-length shows for free. Through partnerships with them, Bing China enhanced its video search experience, tailoring it to TV show–related queries.`}
                            </>
                        }
                    />

                    <ResponsiveImage
                        imgSrc="/bing-video-evolution-waves/tv-answer-1.png"
                        alt="TV series answer illustration"
                        imgSize="56.3"
                    />

                    <TextBlock
                        sectionDes={`Though niche, TV series–related queries remain a steady source of video-intent searches. To streamline the path from search to viewing, we introduced a structured answer format that unites a show’s overview, full-episode links, and related videos in one place.`}
                        moduleClassName="mb-12 mt-8 md:mt-16"
                    />

                    <ResponsiveImage
                        imgSrc="/bing-video-evolution-waves/tv-answer-2.png"
                        alt="TV series answer illustration"
                        imgSize="56.3"
                    />

                    <div className="mb-12 mt-8 md:mt-16 flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                title="PCR +1.3%"
                                titleClassName="py-8 text-3xl font-extrabold text-emerald-600 dark:text-emerald-300 text-center"
                                des="Page Clickthrough Rate indicates user engagement levels"
                                desClassName="text-center"
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div aria-label="content" className="relative bg-neutral-50 dark:bg-neutral-950 flex flex-col gap-28 md:gap-56 max-w-screen-2xl px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none bg-gradient-to-b from-violet-200 dark:from-violet-950 to-transparent">
                </div>

                <div aria-label="wave 2 section">
                    <VisualTextBlock
                        textColor="text-violet-700 dark:text-violet-400"
                        sectionSubtitle="Wave 2 - since 2022"
                        sectionTitle={`Expanding video search index`}
                        sectionDes={
                            <>
                                {`As TikTok grew in popularity and reshaped how people discover information, short videos became an increasingly important source. In this second wave, Bing anticipated the shift and expanded its index to include short-form videos—bridging the gap between traditional and social search.`}
                            </>
                        }
                    />

                    <TextBlock
                        sectionSubtitle={`Project 03`}
                        sectionTitle={`Stand-alone Short Video Answer`}
                        sectionDes={
                            <>
                                {`We introduced Short Video Answers as stand-alone modules in portrait 9:16 or 3:4 ratios. Since aspect ratio alone signaled short-form content, we minimized the play icon and emphasized thumbnails to better showcase videos.`}
                            </>
                        }
                    />

                    <ResponsiveImage
                        imgSrc="/bing-video-evolution-waves/shorts-answer-1.png"
                        alt="short video answer illustration"
                        imgSize="56.3"
                    />

                    <div className="mb-28 md:mb-56 mt-8 md:mt-16 flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                title="CCR +0.56%"
                                titleClassName="py-8 text-3xl font-extrabold text-emerald-600 dark:text-emerald-300 text-center"
                                des="Click Conversion Rate measures user engagement and intent fulfillment"
                                desClassName="text-center"
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                title="APSAT +0.37"
                                titleClassName="py-8 text-3xl font-extrabold text-emerald-600 dark:text-emerald-300 text-center"
                                des="APSAT measures overall user satisfaction"
                                desClassName="text-center"
                            />
                        </div>
                    </div>

                    <TextBlock
                        sectionSubtitle={`Project 04`}
                        sectionTitle={`Hybrid Video Answer`}
                        sectionDes={
                            <>
                                {`When short videos appear beside long-form content, they adopt the same tile design for visual consistency. Portrait thumbnails use a 3:4 ratio, with remaining space filled by a dark tone from the image to create a unified layout.`}
                            </>
                        }
                    />

                    <ResponsiveImage
                        imgSrc="/bing-video-evolution-waves/shorts-answer-2.png"
                        alt="hybrid video answer illustration"
                        imgSize="56.3"
                    />
                </div>
            </div>


            <div aria-label="content" className="relative bg-neutral-50 dark:bg-neutral-950 flex flex-col gap-28 md:gap-56 max-w-screen-2xl px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none bg-gradient-to-b from-lime-200 dark:from-lime-950 to-transparent">
                </div>

                <div aria-label="wave 3 section">
                    <VisualTextBlock
                        textColor="text-lime-700 dark:text-lime-400"
                        sectionSubtitle="Wave 3 - since 2023"
                        sectionTitle={`Adapting to the era of GenAI`}
                        sectionDes={
                            <>
                                {`Since the debut of ChatGPT and large language models (LLMs), the world has entered a new era of Generative AI. In this technical wave, Bing evolved into the New Bing—not only by introducing a ChatGPT-like chat experience, but by reimagining the SERP from the inside out.`}
                            </>
                        }
                    />

                    <TextBlock
                        sectionSubtitle={`Project 05`}
                        sectionTitle={`Video Answer Card Framework`}
                        sectionDes={
                            <>
                                {`GenAI uses relevant search results as grounding data for accurate, up-to-date answers. To adapt, Bing developed the Answer Card Framework (ACF)—a system that modularizes all result types so GenAI can assemble cohesive, magazine-style layouts. Within this framework, our team refined video designs and built golden cases flexible enough to support a wide spectrum of relevance.`}
                            </>
                        }
                    />

                    <ResponsiveImage
                        imgSrc="/bing-video-evolution-waves/ACF-1.png"
                        alt="Answer Card Framework illustration-1"
                        imgSize="56.3"
                    />

                    <TextBlock
                        sectionDes={`In scenarios with weaker video intent, videos are displayed as supporting elements within the AI-generated answer.`}
                        moduleClassName="mb-12 mt-8 md:mt-16"
                    />

                    <ResponsiveImage
                        imgSrc="/bing-video-evolution-waves/ACF-2.png"
                        alt="Answer Card Framework illustration-2"
                        imgSize="56.3"
                    />

                    <TextBlock
                        sectionDes={`Whereas in scenarios with stronger video intent, the AI curates an answer composed entirely of videos, offering users more opportunities to explore further.`}
                        moduleClassName="mb-12 mt-8 md:mt-16"
                    />

                    <ResponsiveImage
                        imgSrc="/bing-video-evolution-waves/ACF-3.png"
                        alt="Answer Card Framework illustration-3"
                        imgSize="56.3"
                    />

                    <div className="mb-28 md:mb-56 mt-8 md:mt-16 flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                title="WPSBS +2.06"
                                titleClassName="py-8 text-3xl font-extrabold text-emerald-600 dark:text-emerald-300 text-center"
                                des="WPSBS evaluates page quality and satisfaction versus competitors."
                                desClassName="text-center"
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                title="APSAT +0.46"
                                titleClassName="py-8 text-3xl font-extrabold text-emerald-600 dark:text-emerald-300 text-center"
                                des="APSAT measures overall user satisfaction"
                                desClassName="text-center"
                            />
                        </div>
                    </div>

                    <TextBlock
                        sectionSubtitle={`Project 06`}
                        sectionTitle={`Surfacing insights about videos`}
                        sectionDes={
                            <>
                                {`Powered by LLMs, Bing can extract and summarize key insights from videos, providing new information scents that help users assess relevance faster. However, this still depends on transcript availability and further technological maturity.`}
                            </>
                        }
                    />

                    <ResponsiveImage
                        imgSrc="/bing-video-evolution-waves/video-insight.png"
                        alt="Video insight illustration"
                        imgSize="56.3"
                    />
                </div>
            </div>

            <div aria-label="content" className="flex flex-col gap-28 md:gap-56 max-w-screen-2xl bg-neutral-50 dark:bg-neutral-950 rounded-b-2xl border-b border-neutral-200 dark:border-neutral-900 px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div aria-label="generalized design guideline section">
                    <TextBlock
                        sectionTitle={`Ending Thoughts`}
                        sectionDes={`During my time at Bing, countless internal explorations and small iterations were made to drive innovation and improve key metrics. The three waves above represent the major milestones in evolving video search experience on Bing.

                                    Web products evolve quickly, and with every new technological shift, today’s features may soon be replaced. I don’t know what the future holds for video search experience, but I believe it will continue to align with our core design principle. Perhaps one day, users will be able to search within videos at a much finer granularity, watch a long video condensed into key highlights, or even generate new ones with GenAI. (Check the Suno integration on Bing Chat Below 👇)`}
                    />

                    <div aria-label="reflection and envision section">
                        <ExternalLink
                            title={`Turn your ideas into songs with Suno on Microsoft Copilot`}
                            url="https://www.microsoft.com/en-us/microsoft-copilot/blog/2023/12/19/turn-your-ideas-into-songs-with-suno-on-microsoft-copilot/"
                            favicon="/bing-video-evolution-waves/copilot-favicon.png"
                            alt="favicon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 