"use client";
import { useRouter } from "next/navigation";
import { saveDataInLocalStorage } from "../utils/main";


export function IndexNumForm() {
  const router = useRouter();

  function submitFormData( e ) {
    e.preventDefault();
    const { index, school } = e.target;
    
    saveDataInLocalStorage( 'indexNum', index.value );
    saveDataInLocalStorage( 'school', school.value );
    router.push('/')

  }
  return (
    <form onSubmit={submitFormData} className="px-[20px] h-[500px] flex flex-col justify-between">
      <section>
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
      </section>
      <section className="flex px-[20px]">
        <button className="bg-secondary text-white rounded-3xl text-lg p-3 w-[90vw]">
          Continue
        </button>
      </section>
    </form>
  );
}
