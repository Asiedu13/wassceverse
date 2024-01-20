import { CustomProgressBar } from "../../../components/onboarding/CircularProgress";

export default function Page() {
  return (
    <section className="flex flex-col justify-between h-[95vh]">
      <section>
        <nav className="flex justify-between items-center p-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10.31"
            height="18.034"
            viewBox="0 0 10.31 18.034"
          >
            <path
              id="Icon_ionic-ios-arrow-back"
              data-name="Icon ionic-ios-arrow-back"
              d="M14.359,15.208,21.182,8.39a1.289,1.289,0,0,0-1.825-1.82L11.626,14.3a1.286,1.286,0,0,0-.038,1.777l7.763,7.779a1.289,1.289,0,1,0,1.825-1.82Z"
              transform="translate(-11.251 -6.194)"
            />
          </svg>
          <CustomProgressBar />
        </nav>
        <header className="my-[30px] px-[20px]">
          <h1 className="text-3xl mb-[20px] w-[300px] ">
            Select your School and Input your Index Number
          </h1>
          <p>To continue, kindly provide your School name and Index Number</p>
        </header>

        <section>
          <form className="px-[20px]">
            <div className="flex flex-col">
              <label className="py-2">School</label>
              <select
                name="school"
                id="school"
                className="w-full flex flex-col px-3 py-3 border-2 border-black rounded-md"
              >
                <option>Presbyterian Boys Secondary School</option>
                <option>Accra Senior High School</option>
                <option>Aburi Girls Senior High School</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="py-2 my-2">Index Number</label>
              <input
                type="text"
                name="index"
                className="border-2 py-3 px-3 rounded-md border-black"
                placeholder="Type your index number here"
              />
            </div>
          </form>
        </section>
      </section>

      <section className="flex px-[20px]">
        <button className="bg-secondary text-white rounded-3xl text-lg p-3 w-full">
          Continue
        </button>
      </section>
    </section>
  );
}
