import type { Metadata } from "next";
import ProjectTile from './Components/project-tile';

export const metadata: Metadata = {
  title: "Shengfeng Gu · Designer",
  description: "Discover the portfolio of Shengfeng Gu (a.k.a. Gü), a Product Designer dedicated to crafting meaningful digital experiences. Explore a curated selection of works that showcase his unique approach and personality.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:max-w-screen-2xl mx-auto">
      <article aria-label="Introduction" className="p-8 md:px-64 md:py-32 w-full">
        <h1 className="font-alegreya text-4xl md:text-5xl font-bold mt-8 md:mt-0 mb-8 md:mb-16 text-neutral-950 dark:text-white w-full md:w-9/12">
          <span role="img" aria-label="Waving Hand" className="mr-4">👋🏽</span>
          {`Hey, I am Gü`}
        </h1>
        <p className="mb-6 text-2xl font-regular md:w-9/12">
          Ex-<span aria-label="Microsoft">Microsoft</span> <span className="font-semibold text-neutral-950 dark:text-white">Product Designer</span> based in <span aria-label="Location">🇨🇦 Vancouver,</span>
        </p>
        <p className="mb-6 text-2xl font-regular md:w-9/12">
          a creative mind that blends <span className="font-semibold text-neutral-950 dark:text-white">Human Centered Design</span> with <span className="font-semibold text-neutral-950 dark:text-white">Random Intuition</span>,
        </p>
        <p className="mb-6 text-2xl font-regular md:w-9/12">
          a free soul who enjoys <span aria-label="skiing">🎿</span> <span aria-label="frisbee">🥏</span> <span aria-label="cycling">🚴🏽</span> <span aria-label="surfing">🏄🏼</span> <span aria-label="mountains">🗻</span>
        </p>
      </article>

      <div aria-label="projects" className="grid grid-rows-3 grid-cols-2 md:grid-cols-6 gap-2 px-4 my-4 md:my-0 md:mb-8 w-full max-w-full">
        <div aria-label="item-1" className="row-span-2 col-span-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/bing-video-evolution-waves"
            imgSrc="/bing-video-evolution-waves-cover.png"
            imgSize="100"
            alt="The waves of video search experience evolution on Bing cover image"
            overlayText={`The waves of  video search experience evolution on Bing`}
            tag="🌎 Web Experience"
          />
        </div>

        <div aria-label="item-2" className="row-span-1 col-span-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/follow-on-edge"
            imgSrc="/follow-on-edge-cover.png"
            imgSize="49.1"
            alt="follow on edge cover image"
            overlayText={`Follow on Edge`}
            tag="🌎 Web Innovation"
          />
        </div>

        <div aria-label="item-3" className="row-span-1 col-span-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/bing-video-design-kit"
            imgSrc="/bing-design-kit-cover.png"
            imgSize="100"
            alt="Bing video design kit cover image"
            overlayText={`Bing Video Design Kit`}
            tag="🗂️ DesignOps"
          />
        </div>

        <div aria-label="item-4" className="row-span-1 col-span-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/"
            imgSrc="/animation-cover.gif"
            imgSize="100"
            alt="an animation"
            isLinkActive={false} // Set this to false to disable the link
          />
        </div>

        <div aria-label="item-5" className="row-span-1 col-span-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="https://vimeo.com/482577130?share=copy"
            imgSrc="/50s-cover.png"
            imgSize="100"
            alt="one day in the 50s movie cover image"
            overlayText={`One day in my 50's ↗️`}
            tag="🎬 Movie"
          />
        </div>
        <div aria-label="item-6" className="row-span-1 col-span-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/joa-arch-web"
            imgSrc="/joa-redesign-cover.png"
            imgSize="100"
            alt="JOA architecture website redesign cover image"
            overlayText={`JOA Website Revamp`}
            tag="🌎 Web"
          />
        </div>
        <div aria-label="item-7" className="row-span-1 col-span-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/ripple-classinx-menu"
            imgSrc="/ripple-classinx-cover.png"
            imgSize="49.1"
            alt="ripple classinx menu cover image"
            overlayText={`Ripple - a refreshed ClassIn X menu`}
            tag="🖐🏽 Touch Screen"
          />
        </div>
        <div aria-label="item-8" className="row-span-1 col-span-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/grad-thesis-myt-search"
            imgSrc="/grad-myt-search-cover.png"
            imgSize="49.1"
            alt="master graduation thesis cover image"
            overlayText={`Master Thesis - myTomorrows Search`}
            tag="🎓 Research"
          />
        </div>
        <div aria-label="item-9" className="row-span-1 col-span-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/uxad-saeco-redesign"
            imgSrc="/uxad-redesign-cover.png"
            imgSize="100"
            alt="uxad saeco redesign cover image"
            overlayText={`Saeco Xelsis Experience Redesign`}
            tag="☕ Redesign"
          />
        </div>
        <div aria-label="item-10" className="row-span-1 col-span-1 rounded-l-[128px] rounded-r-lg bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/"
            imgSrc="/gu-surfing.png"
            imgSize="100"
            alt="AI generated image of gu surfing"
            isLinkActive={false} // Set this to false to disable the link
          />
        </div>
        <div aria-label="item-11" className="row-span-1 col-span-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/rethink-ppt-animation"
            imgSrc="/ppt-animation-cover.png"
            imgSize="49.1"
            alt="rethinking powerpoint animation cover image"
            overlayText={`Rethinking PowerPoint Animation Experience`}
            tag="💭 Concept"
          />
        </div>
      </div>

      <div aria-label="design mindset" className="px-8 pb-16 pt-32 md:px-64 md:pt-40 w-full">
        <article className="w-full md:w-9/12">
          <h2 className="font-alegreya mb-3 text-3xl font-bold mb-8 text-neutral-950 dark:text-white">Design makes things better</h2>
          <p className="text-xl">
            {`I believe in the transformational power of design and its attempt to make the world (a little) better. Regardless of its form, design is essentially a mindset of empathizing (with people or creature) and figuring out how things work.`}
            < br /> <br />
            {`I devote myself to creating (functional) useful and/or (emotional) enjoyable experiences that I call it meaningful moments.`}
          </p>
        </article>

        <div aria-label="resume button" className="mt-12">
          <a href={`https://drive.google.com/file/d/1Ygk4orNzYfGMuE8dkFg0uowlP8iilBVB/view?usp=sharing`} target="_blank" rel="noopener noreferrer" className="flex flex-row items-center w-fit gap-2 px-5 py-2.5 rounded-full bg-red-500 dark:bg-red-300 hover:bg-red-600 dark:hover:bg-red-200 duration-300 ease-in-out hover:scale-105">
            <div className="min-w-0">
              <h3 className="text-white dark:text-neutral-950 text-md font-bold truncate text-ellipsis">Résumé.pdf</h3>
            </div>
            <div className="flex-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-none fill-white dark:fill-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6.24992 4.5C5.28344 4.5 4.49996 5.2835 4.49996 6.25V17.75C4.49996 18.7165 5.28344 19.5 6.24992 19.5H17.7496C18.7161 19.5 19.4996 18.7165 19.4996 17.75V13.75C19.4996 13.3358 19.8354 13 20.2496 13C20.6638 13 20.9995 13.3358 20.9995 13.75V17.75C20.9995 19.5449 19.5445 21 17.7496 21H6.24992C4.45504 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45504 3 6.24992 3H10.2498C10.664 3 10.9998 3.33579 10.9998 3.75C10.9998 4.16421 10.664 4.5 10.2498 4.5H6.24992ZM12.9998 3.75C12.9998 3.33579 13.3355 3 13.7497 3H20.25C20.6642 3 21 3.33579 21 3.75V10.25C21 10.6642 20.6642 11 20.25 11C19.8358 11 19.5 10.6642 19.5 10.25V5.56074L14.28 10.7804C13.9871 11.0732 13.5123 11.0732 13.2194 10.7803C12.9265 10.4874 12.9265 10.0125 13.2194 9.71964L18.4395 4.5H13.7497C13.3355 4.5 12.9998 4.16421 12.9998 3.75Z" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      <footer className="px-8 py-12 md:px-64 md:py-24 grid md:max-w-screen-2xl mx-auto w-full">
          <p>{'goooleon@gmail.com'} • <a href="https://www.linkedin.com/in/shengfeng-gu/" className="hover:underline">LinkedIn</a> </p>
          <p>Made 🖖🏽by <span className="text-black dark:text-white">©Gü</span> 2025-2026</p>
        </footer>
    </main>
  );
}