"use client";
// import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveDataInLocalStorage } from "../../common/utils/main";

export function IndexNumForm() {
  const router = useRouter();

  function submitFormData(e) {
    e.preventDefault();
    const { index, school } = e.target; 

    saveDataInLocalStorage("indexNum", index.value);
    saveDataInLocalStorage( "school", school.value );
    
    router.push("/student/gender");
  }
  return (
    <form
      onSubmit={submitFormData}
      className="px-[20px] h-[420px] mt-[100px] flex flex-col justify-between"
    >
      <section>
        <div className="flex flex-col">
          <label className="py-2">School</label>
          <select
            name="school"
            id="school"
            className="w-full flex flex-col px-3 py-3 border-2 border-black rounded-md"
          >
            <option value="">Select a school</option>
            <option value="Presbyterian Boys Secondary School">
              Presbyterian Boys Secondary School
            </option>
            <option value="Accra Senior High School">
              Accra Senior High School
            </option>
            <option value="Aburi Girls Senior High School">
              Aburi Girls Senior High School
            </option>
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
