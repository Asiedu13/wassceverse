import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-semi-background h-[100vh] flex flex-col justify-center items-center">
      <section>
        {/* Image goes here */}
      </section>

      <section className="h-[500px] .absolute .bottom-0 px-[40px]">
        <h2 className="text-5xl w-[300px] ">Experience Registration, Redefined</h2>
        <p className="leading-[2rem] text-lg text-accent my-10 font-light w-[300px]">
          Immerse in a Redefined Student Registration Fusion of Modernity and cutting-edge technology
        </p>
        <Link href="/start">
        <button className="bg-secondary text-semi-background px-[20px] py-[20px] text-xl rounded-xl"> 
          Get Started

          {/* Icon comes here */}
        </button>
        </Link>
      </section>
    </main>
  )
}
