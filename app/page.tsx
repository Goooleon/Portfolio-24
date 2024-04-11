import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from './Components/buttons';
import ProjectTile from './Components/project-tile';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <article aria-label="Introduction" className="p-8 md:px-64 md:py-32">
        <h1 className="mb-3 text-4xl font-bold mb-8 text-neutral-950 dark:text-white w-full md:w-9/12">
          <span role="img" aria-label="Waving Hand" className="mr-4">👋🏽</span>
          {`Hey, I am Gü`}
        </h1>
        <p className="mb-4 text-2xl font-regular md:w-9/12">
          a <span className="font-semibold text-neutral-950 dark:text-white">Product Designer</span> at <span aria-label="Microsoft">Micros🌎ft</span> in <span aria-label="Location">📍Beijing,</span>
        </p>
        <p className="mb-4 text-2xl font-regular md:w-9/12">
          a creative mind that blends <span className="font-semibold text-neutral-950 dark:text-white">Human Centered Design</span> with <span className="font-semibold text-neutral-950 dark:text-white">Random Intuition</span>,
        </p>
        <p className="mb-4 text-2xl font-regular md:w-9/12">
          a free soul who enjoys <span aria-label="skiing">🎿</span> <span aria-label="frisbee">🥏</span> <span aria-label="cycling">🚴🏽</span> <span aria-label="surfing">🏄🏼</span> <span aria-label="mountains">🗻</span>
        </p>
      </article>

      <div aria-label="projects" className="grid grid-rows-3 grid-cols-2 md:grid-cols-6 grid-flow-row gap-2 px-4 max-w-screen-2xl my-8 md:my-0">
        <div aria-label="item-1" className="row-span-2 col-span-2 rounded-xl md:rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/"
            imgSrc="/copilot-cover.png"
            imgSize="100"
            alt="follow on edge cover image"
            isLinkActive={false}
          />
        </div>

        <div aria-label="item-2" className="row-span-1 col-span-2 rounded-xl md:rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/follow-on-edge"
            imgSrc="/follow-on-edge-cover.png"
            imgSize="49.1"
            alt="follow on edge cover image"
          />
        </div>

        <div aria-label="item-3" className="row-span-1 col-span-1 rounded-xl md:rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/bing-video-design-kit"
            imgSrc="/bing-design-kit-cover.png"
            imgSize="100"
            alt="Bing video design kit cover image"
          />
        </div>

        <div aria-label="item-4" className="row-span-1 col-span-1 rounded-xl md:rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/"
            imgSrc="/animation-cover.gif"
            imgSize="100"
            alt="an animation"
            isLinkActive={false} // Set this to false to disable the link
          />
        </div>

        <div aria-label="item-5" className="row-span-1 col-span-1 rounded-xl md:rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="https://vimeo.com/482577130?share=copy"
            imgSrc="/50s-cover.png"
            imgSize="100"
            alt="one day in the 50s movie cover image"
          />
        </div>
        <div aria-label="item-6" className="row-span-1 col-span-1 rounded-xl md:rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/joa-arch-web"
            imgSrc="/joa-redesign-cover.png"
            imgSize="100"
            alt="JOA architecture website redesign cover image"
          />
        </div>
        <div aria-label="item-7" className="row-span-1 col-span-2 rounded-xl md:rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/ripple-classinx-menu"
            imgSrc="/ripple-classinx-cover.png"
            imgSize="49.1"
            alt="ripple classinx menu cover image"
          />
        </div>
        <div aria-label="item-8" className="row-span-1 col-span-2 rounded-xl md:rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/grad-thesis-myt-search"
            imgSrc="/grad-myt-search-cover.png"
            imgSize="49.1"
            alt="master graduation thesis cover image"
          />
        </div>
        <div aria-label="item-9" className="row-span-1 col-span-1 rounded-xl md:rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/uxad-saeco-redesign"
            imgSrc="/uxad-redesign-cover.png"
            imgSize="100"
            alt="uxad saeco redesign cover image"
          />
        </div>
        <div aria-label="item-10" className="row-span-1 col-span-1 rounded-xl md:rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/"
            imgSrc="/gu-surfing.png"
            imgSize="100"
            alt="AI generated image of gu surfing"
            isLinkActive={false} // Set this to false to disable the link
          />
        </div>
        <div aria-label="item-11" className="row-span-1 col-span-2 rounded-xl md:rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
          <ProjectTile
            link="/rethink-ppt-animation"
            imgSrc="/ppt-animation-cover.png"
            imgSize="49.1"
            alt="rethinking powerpoint animation cover image"
          />
        </div>
      </div>

      <div className="p-8 md:px-64 md:pt-40">
        <article className="w-full md:w-9/12">
          <h1 className="mb-3 text-3xl font-bold mb-8 text-neutral-950 dark:text-white">why design?</h1>
          <p className="text-xl">
            {`I believe in the transformational power of design and its attempt to make the world (a little) better. Regardless of its form, design is essentially a mindset of empathizing with others (people or creature) and figuring out how things work.`}
            < br /> <br />
            {`I devote myself to creating (functional) useful and/or (emotional) enjoyable experiences that I call it meaningful moments.`}
          </p>
        </article>
        <DownloadButton

          label='Resume.pdf'
        />
      </div>

      <div className="p-8 md:px-64 md:py-40">
        <article className="w-full md:w-9/12">
          <h1 className="mb-3 text-3xl font-bold mb-8 text-neutral-950 dark:text-white">Gü vs Gu</h1>
          <p className="text-xl">
            {`Gu is my family name, and I am simply used to it. The Umlaut is to make u a S-M-I-L-E-Y FACE :)`}
          </p>
        </article>
      </div>
    </main>
  );
}