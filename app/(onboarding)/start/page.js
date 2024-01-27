import Link from "next/link";

export default function Page() {
  return (
    <main className=".px-[20px] bg-semi-background overflow-clip .h-[90vh]">
      <section className="h-[100vh] flex flex-col gap-10 justify-center items-center ">
        {/* Logo */}
        <section>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="134.909"
            height="119.919"
            viewBox="0 0 134.909 119.919"
          >
            <path
              id="Icon_awesome-file-signature"
              data-name="Icon awesome-file-signature"
              d="M51.1,99.341a2.6,2.6,0,0,0-2.382-1.527,2.554,2.554,0,0,0-2.347,1.45l-1.8,3.593a3.747,3.747,0,0,1-6.9-.49L33.727,90.546l-2.485,7.467a10.112,10.112,0,0,1-9.6,6.916h-2.9a3.747,3.747,0,1,1,0-7.495h2.9a2.625,2.625,0,0,0,2.492-1.794l4.26-12.8a5.623,5.623,0,0,1,10.669,0L42.311,92.6c4.626-3.792,12.662-2.272,15.458,3.317a2.658,2.658,0,0,0,2.192,1.466V78.144l29.98-29.767v-10.9H58.086a5.638,5.638,0,0,1-5.621-5.621V0H5.621A5.608,5.608,0,0,0,0,5.621V114.3a5.608,5.608,0,0,0,5.621,5.621h78.7a5.608,5.608,0,0,0,5.621-5.621v-9.369l-29.98-.026A10.056,10.056,0,0,1,51.1,99.341Zm38.84-70.79a5.6,5.6,0,0,0-1.64-3.958L65.37,1.64A5.617,5.617,0,0,0,61.388,0H59.959V29.98h29.98ZM67.454,81.264v16.17H83.613l37.868-38.126-15.9-15.9L67.454,81.264Zm65.707-42.072L125.7,31.727a5.965,5.965,0,0,0-8.434,0l-6.382,6.382,15.9,15.9,6.382-6.382A5.961,5.961,0,0,0,133.162,39.191Z"
              fill="#0770C5"
            />
          </svg>
        </section>

        <section className="bg-background rounded-xl p-5 .h-[500px]">
          <header className="p-10">
            <h2 className="text-base text-accent text-center ">
              Welcome To Wassceverse
            </h2>
            <p className="text-2xl text-center">Choose to continue</p>
          </header>

          {/* <form> */}

          <section className="flex flex-col gap-5">
            <Link href="/student/indexnumandschool">
              <div className="flex group items-center gap-3 border rounded-xl p-3 text-accent hover:border-secondary ">
                <div className="group-hover:bg-secondary w-[20px] h-[20px] border"></div>
                <label className="group-hover:text-secondary">
                  Continue As Student
                </label>
              </div>
            </Link>

            <Link href="/signup">
              <div className="flex group items-center gap-3 border rounded-xl p-3 text-accent hover:border-secondary ">
                <div className="group-hover:bg-secondary w-[20px] h-[20px] border"></div>
                <label className="group-hover:text-secondary">
                  Continue As School
                </label>
              </div>
            </Link>

            <div className="flex items-center justify-center">
              <button className="px-4 py-2 bg-secondary text-white rounded-xl">
                Continue
              </button>
            </div>
          </section>
          {/* </form> */}
        </section>
      </section>
    </main>
  );
}
