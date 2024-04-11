import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from './Components/buttons';
import ResponsiveImage from './Components/responsive-image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <article aria-label="Introduction" className="p-8 md:px-64 md:py-32">
        <h1 className="mb-3 text-4xl font-bold mb-8 text-neutral-950 dark:text-white md:w-9/12">
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

      <div aria-label="projects" className="grid grid-rows-3 grid-cols-6 grid-flow-row gap-2 md:gap-4 px-4 max-w-screen-2xl">
        <div aria-label="item-1" className="row-span-2 col-span-2 bg-neutral-800 rounded-lg md:rounded-2xl border border-neutral-200 dark:border-neutral-300">01</div>

        <div aria-label="item-2" className="row-span-1 col-span-2 rounded-lg md:rounded-2xl overflow-hidden">
          <div
            className={`w-full relative overflow-hidden pt-[47.9%]`}>
            <Link href="/follow-on-edge">
              <Image
                src="/follow-on-edge-cover.png"
                alt="follow on edge cover image"
                fill
                objectFit="cover"
                quality={100}
                sizes="100vw"
                loading='lazy'
              />
            </Link>
          </div>
        </div>

        <div aria-label="item-3" className="row-span-1 col-span-1 rounded-lg md:rounded-2xl overflow-hidden">
          <div className={`w-full relative overflow-hidden pt-[100%]`}>
            <Link href="/bing-design-kit">
              <Image
                src="/bing-design-kit-cover.png"
                alt="bing design kit cover image"
                fill
                objectFit="cover"
                quality={100}
                sizes="100vw"
                loading='lazy'
              />
            </Link>
          </div>
        </div>

        <div aria-label="item-4" className="row-span-1 col-span-1 bg-neutral-800 rounded-lg md:rounded-2xl">
          04
        </div>

        <div aria-label="item-5" className="row-span-1 col-span-1 rounded-lg md:rounded-2xl overflow-hidden">
          <div
            className={`w-full relative overflow-hidden pt-[100%]`}>
            <Image
              src="/50s-cover.png"
              alt="follow on edge cover image"
              fill
              objectFit="cover"
              quality={100}
              sizes="100vw"
              loading='lazy'
            />
          </div>
        </div>
        <div aria-label="item-6" className="row-span-1 col-span-1 rounded-lg md:rounded-2xl overflow-hidden bg-sky-200 p-4">
          <div className={`w-full relative overflow-hidden pt-[100%]`}>
            <Link href="/joa-arch-web">
              <Image
                src="/joa-cover.png"
                alt="joa architecture website cover image"
                fill
                objectFit="cover"
                quality={100}
                sizes="100vw"
                loading='lazy'
              />
            </Link>
          </div>
        </div>
        <div aria-label="item-7" className="row-span-1 col-span-2 rounded-lg md:rounded-2xl overflow-hidden p-0">
          <div className={`w-full relative overflow-hidden pt-[47.9%]`}>
            <Link href="/ripple-classinx-menu">
              <Image
                src="/ripple-cover.png"
                alt="ripple classinx menu cover image"
                fill
                objectFit="cover"
                quality={100}
                sizes="100vw"
                loading='lazy'
              />
            </Link>
          </div>
        </div>
        <div aria-label="item-8" className="row-span-1 col-span-2 rounded-lg md:rounded-2xl overflow-hidden p-0">
          <div className={`w-full relative overflow-hidden pt-[47.9%]`}>
            <Link href="/grad-thesis-myt-search">
              <Image
                src="/grad-thesis-cover.png"
                alt="master graduation thesis cover image"
                fill
                objectFit="cover"
                quality={100}
                sizes="100vw"
                loading='lazy'
              />
            </Link>
          </div>
        </div>
        <div className="row-span-1 col-span-1 bg-neutral-800 rounded-lg md:rounded-2xl">09</div>
        <div className="row-span-1 col-span-2 bg-neutral-800 rounded-lg md:rounded-2xl">10</div>
        <div className="row-span-1 col-span-1 bg-neutral-800 rounded-lg md:rounded-2xl">11</div>
      </div>

      <div className="m-8 underline">
        <ul>
          <li className="p-4"><Link href="/bing-video-design-kit">
            Bing Video Design Kit <span className="font-bold text-green-500">{`(Done)`}</span>
          </Link>
          </li>
          <li className="p-4"><Link href="/copilot-multimedia-experience">
            Copilot Multimedia Experience
          </Link></li>
          <li className="p-4"><Link href="/follow-on-edge">
            Follow on Edge <span className="font-bold text-green-500">{`(Done)`}</span>
          </Link></li>
          <li className="p-4"><Link href="/grad-thesis-myt-search">
            Improving Search Relevance Feedback through Human Centered Design <span className="font-bold text-green-500">{`(Done)`}</span>
          </Link></li>
          <li className="p-4"><Link href="/joa-arch-web">
            JOA website revamp <span className="font-bold text-green-500">{`(Done)`}</span>
          </Link></li>
          <li className="p-4"><Link href="/rethink-ppt-animation">
            Rethinking PowerPoint Animation Experience <span className="font-bold text-green-500">{`(Done)`}</span>
          </Link></li>
          <li className="p-4"><Link href="/ripple-classinx-menu">
            Ripple - a refreshed ClassIn X menu <span className="font-bold text-green-500">{`(Done)`}</span>
          </Link></li>
          <li className="p-4"><Link href="/uxad-saeco-redesign">
            Saeco Xelsis Experience Redesign <span className="font-bold text-green-500">{`(Done)`}</span>
          </Link></li>
        </ul>
      </div>

      <div className="m-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <article>
          <h1 className={`mb-4 text-3xl font-bold`}>why design?</h1>
          <p className="text-xl opacity-50">
            {`I believe in the transformational power of design and its attempt to make the world (a little) better. Regardless of its form, design is essentially a mindset of empathizing with others (people or creature) and figuring out how things work.`}
            < br /> <br />
            {`I devote myself to creating (functional) useful and/or (emotional) enjoyable experiences that I call it meaningful moments.`}
          </p>
        </article>
        <DownloadButton
          label='Resume.pdf'
        />
      </div>

      <div className="m-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <article>
          <h1 className={`mb-4 text-3xl font-bold`}>Gü vs Gu</h1>
          <p className="text-xl opacity-50">
            {`Gu is my family name, and I am simply used to it. The Umlaut is to make u a S-M-I-L-E-Y FACE :)`}
          </p>
        </article>
      </div>

      <div className="m-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <article>
          <h1 className={`mb-4 text-3xl font-bold`}>a little more</h1>
          <p className="text-xl opacity-50">
            {`Just a little more, more personal, not about work or profession.`}
          </p>
        </article>
      </div>
    </main>
  );
}