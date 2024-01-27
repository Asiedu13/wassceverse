import Link from 'next/link';
import Image from 'next/image';
import { LoveBackground } from './components/common/ui/LoveBackground';
export default function Home() {
  return (
    <main className="bg-semi-background h-[100vh] flex flex-col justify-center items-center">
      <section className='flex justify-center items-center'>
        {/* Image goes here */}
       <LoveBackground />
      </section>

      <section className="h-[500px] .absolute .bottom-0 px-[40px] z-10">
        <h2 className="text-5xl w-[300px] ">
          Experience Registration, Redefined
        </h2>
        <p className="leading-[2rem] text-lg text-accent my-10 font-light w-[300px]">
          Immerse in a Redefined Student Registration Fusion of Modernity and
          cutting-edge technology
        </p>
        <Link href="/start">
          <button className="bg-secondary text-semi-background flex gap-2 items-center px-[20px] py-[20px] text-xl rounded-xl">
            Get Started
            {/* Icon comes here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.399"
              height="12.399"
              viewBox="0 0 12.399 12.399"
            >
              <path
                id="Icon_metro-arrow-up-right"
                data-name="Icon metro-arrow-up-right"
                d="M8.191,17.881,16.76,9.312v3.705a1.033,1.033,0,1,0,2.067,0v-6.2a1.032,1.032,0,0,0-1.033-1.033h-6.2a1.033,1.033,0,1,0,0,2.067H15.3L6.729,16.42a1.033,1.033,0,0,0,1.461,1.461Z"
                transform="translate(-6.427 -5.784)"
                fill="#fff"
              />
            </svg>
          </button>
        </Link>
      </section>
    </main>
  );
}
