import { IndexNumForm } from "../../../components/onboarding/IndexNumForm";

export default function Page() {
  
  return (
    <section className="flex flex-col justify-between h-[90vh] w-[90vw] overflow-clip">
      <section>
        <header className="my-[30px] px-[20px] w-[90vw]">
          <h1 className="text-3xl mb-[20px] w-[300px] ">
            Select your School and Input your Index Number
          </h1>
          <p>To continue, kindly provide your School name and Index Number</p>
        </header>

        <section className="w-[90vw]">
          {/* The form comes here */}
          <IndexNumForm />
        </section>
      </section>
    </section>
  );
}
