import { Metadata } from "next";
import ProjectCaption from "@/app/Components/project-caption";
import TextBlock from "@/app/Components/text-block";
import RichCard from "@/app/Components/rich-card";
import ResponsiveImage from "@/app/Components/responsive-image";
import ExternalLink from "@/app/Components/external-link";


export const metadata: Metadata = {
    title: "JOA website revamp",
    description: "The page is about...",
}

export default function Project() {
    return (
        <div>
            <ProjectCaption
                projectTitle={`JOA website revamp`}
                projectDate="Nov-Dec, 2022"
                projectDes={`JOA architecture, a Dutch agency, entrusted me with the task of revamping its official website. I undertook the project by redesigning the site, organizing its media assets, and implementing the refreshed experience on WordPress with Elementor.`}
                projectCover="/joa-arch-web/cover.png"
                role={`Designer & Developer (Individual)`}
                platform={`Website hosted on WordPress`}
                highlights={`Reorganized data and launched in one month`}

            />
            <div aria-label="content" className="flex flex-col gap-28 md:gap-56 max-w-screen-2xl bg-neutral-100 dark:bg-neutral-950 rounded-2xl border-t border-b border-neutral-200 dark:border-neutral-900 px-8 py-12 md:py-40 md:px-56 md:mx-8">
                <div aria-label="external link">
                    <ExternalLink
                        title="JOA - Architecture"
                        url="https://www.justopenarch.com/"
                        favicon="/joa-arch-web/joa-favicon.png"
                        alt="favicon"
                    />
                </div>

                <div aria-label="introduction section">
                    <TextBlock
                        sectionSubtitle={`Project Brief`}
                        sectionTitle={`An overall upgrade`}
                        sectionDes={`The original JOA website, created in 2017 using WordPress, no longer meets the firm's needs due to its expanding business and diverse project portfolio. Recognizing the need for a modernized platform, JOA aims to enhance its online presence with a redesigned website that optimizes visitor experience and engagement.`}
                    />
                    <div className="flex flex-col gap-4 w-full md:flex-row md:items-stretch">
                        <div className="flex-1">
                            <RichCard
                                tag={`Requirement 01`}
                                title={`Scalable Design`}
                                des={`JOA seeks a scalable and cost-effective solution for its website to easily accommodate and manage an increasing number of project showcases and news updates.`}
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag={`Requirement 02`}
                                title={`Responsiveness`}
                                des={`The new website must be fully responsive, ensuring seamless access and optimal viewing across all devices.`}
                            />
                        </div>
                        <div className="flex-1">
                            <RichCard
                                tag={`Requirement 03`}
                                title={`Engagement loop`}
                                des={`JOA aims to establish an engagement loop on its website, developing a strategy to maintain visitor connections and promote repeat visits.`}
                            />
                        </div>
                    </div>
                </div>

                <div aria-label="solution section">
                    <TextBlock
                        sectionSubtitle={`Site structure`}
                        sectionTitle={`Made for easy maintenance`}
                        sectionDes={`The JOA website comprises five main sections and utilizes Elementor on WordPress, enabling straightforward maintenance and updates by JOA staff.`}
                    />
                    <ResponsiveImage
                        imgSrc="/joa-arch-web/site-ia.png"
                        alt="site architecture solution"
                        imgSize="34"
                    />
                </div>

                <div aria-label="showcase section">
                    <TextBlock
                        sectionTitle={`The new JOA website`}
                    />
                    <ResponsiveImage
                        imgSrc="/joa-arch-web/showcase-1.png"
                        alt="home page of joa website"
                        imgSize="68.8"
                    />
                    <ResponsiveImage
                        imgSrc="/joa-arch-web/showcase-2.png"
                        alt="work page of joa website"
                        imgSize="68.8"
                        containerClassName="mt-8 md:mt-16"
                    />
                    <TextBlock
                        sectionDes={`The website is designed to ensure an optimal viewing experience on both tablet and mobile devices, in addition to desktop.`}
                        moduleClassName="mt-8 md:mt-16 mb-12"
                    />
                    <ResponsiveImage
                        imgSrc="/joa-arch-web/showcase-3.png"
                        alt="responsiveness showcase of joa website"
                        imgSize="68.8"
                        containerClassName="mt-8 md:mt-16"
                    />
                    <TextBlock
                        sectionDes={`To complete the engagement loop with JOA visitors, we introduced a dialogue box that prompts users to provide their email address for receiving updates from JOA, thereby encouraging them to revisit the site.`}
                        moduleClassName="mt-8 md:mt-16 mb-12"
                    />
                    <ResponsiveImage
                        imgSrc="/joa-arch-web/showcase-4.png"
                        alt="newsletter subscription prompt"
                        imgSize="68.8"
                        containerClassName="mt-8 md:mt-16"
                    />
                </div>
            </div>
        </div>



    );
} 