import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from './Components/buttons';
import projects from '../public/work.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center m-8 md:mx-64 md:my-32">
      <div className='mb-4'>
        <article aria-label="Introduction">
          <h1 className={`mb-3 text-4xl font-regular mb-8`}><span role="img" aria-label="Waving Hand">👋🏽</span> Hey, I am Gü</h1>
          <p className={`mb-3 text-2xl font-regular`}>
            a <span className={'font-bold'}>Product Designer</span> at <span aria-label="Microsoft">Micros🌎ft</span> in <span aria-label="Location">📍Beijing,</span>
          </p>
          <p className={`mb-3 text-2xl font-regular`}>
            a creative mind that blends <span className={'font-bold'}>Human Centered Design</span> with <span className={'font-bold'}>Random Intuition</span>,
          </p>
          <p className={`mb-3 text-2xl font-regular`}>
            a free soul who enjoys <span aria-label="skiing">🎿</span> <span aria-label="frisbee">🥏</span> <span aria-label="cycling">🚴🏽</span> <span aria-label="surfing">🏄🏼</span> <span aria-label="mountains">🗻</span>
          </p>
        </article>
        <DownloadButton 
          label='More About Me'
        />
      </div>


      <div className="m-8 w-full aspect-auto relative">
        <Image
          src={projects}
          alt="projects"
          placeholder='blur'
          loading='lazy'
          quality={100}
          sizes="100vw"
          objectFit='contain'
        />
      </div>

      <div className="m-8 underline">
        <ul>
          <li className="p-4"><Link href="/bing-video-design-kit">
            Bing Video Design Kit
          </Link>
          </li>
          <li className="p-4"><Link href="/copilot-multimedia-experience">
            Copilot Multimedia Experience
          </Link></li>
          <li className="p-4"><Link href="/follow-on-edge">
            Follow on Edge
          </Link></li>
          <li className="p-4"><Link href="/grad-thesis-myt-search">
            Improving Search Relevance Feedback through Human Centered Design
          </Link></li>
          <li className="p-4"><Link href="/joa-arch-web">
            JOA website revamp
          </Link></li>
          <li className="p-4"><Link href="/rethink-ppt-animation">
            Rethinking PowerPoint Animation Experience
          </Link></li>
          <li className="p-4"><Link href="/ripple-classinx-menu">
            Ripple - a refreshed ClassIn X menu
          </Link></li>
          <li className="p-4"><Link href="/uxad-saeco-redesign">
            Saeco Xelsis Experience Redesign
          </Link></li>
        </ul>
      </div>

      <div className="m-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <article>
          <h1 className={`mb-4 text-3xl font-bold`}>why design?</h1>
          <p className="text-xl opacity-50"> I believe in the transformational power of design and its attempt to make the world (a little) better. Regardless of its form, design is essentially a mindset of empathizing with others (people or creature) and figuring out how things work.
            < br /> <br />
            I devote myself to creating (functional) useful and/or (emotional) enjoyable experiences that I call it meaningful moments.
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
            Gu is my family name, and I am simply used to it. The Umlaut is to make u a S-M-I-L-E-Y FACE :)
          </p>
        </article>
      </div>

      <div className="m-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <article>
          <h1 className={`mb-4 text-3xl font-bold`}>a little more</h1>
          <p className="text-xl opacity-50">
            Just a little more, more personal, not about work or profession.
          </p>
        </article>
      </div>

      <div className="m-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-30">
            Find in-depth information about Next.js features and API.
          </p>
        </a>



      </div>
    </main>
  );
}