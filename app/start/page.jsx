export default function Page() {
  return (
    <main className="bg-semi-background flex justify-center items-center container overflow-x-clip h-[100vh]">
      {/* Logo */}
      <section className="bg-background rounded-xl p-5 .h-[500px]">
        <header className="p-10">
          <h2 className="text-base text-accent text-center ">
            Welcome To Wassceverse
          </h2>
          <p className="text-2xl text-center">Choose to continue</p>
        </header>

        <section className="flex flex-col gap-5">
          <div className="flex items-center gap-3 border  rounded-xl p-3 text-accent hover:border-secondary hover:text-secondary ">
            <input type="checkbox" name="student" id="student" />
            <button>Continue As Student</button>
          </div>

          <div className="flex items-center gap-3 border  rounded-xl p-3 text-accent hover:border-secondary hover:text-secondary ">
            <input type="checkbox" name="student" id="student" />
            <button>Continue As Student</button>
          </div>
        </section>
      </section>
    </main>
  );
}
