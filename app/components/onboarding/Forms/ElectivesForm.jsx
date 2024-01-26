"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getAndVerifyData } from "../../common/utils/main";
import { Button } from "../../common/ui/Button";


export function ElectivesForm({ electives }) {
  const router = useRouter();
  const [checkedElectives, setCheckedElectives] = useState(
    new Array(electives.length).fill(false)
  );

  function handleChange( position ) {
    console.log( position );
    const updatedCheckedElectives = checkedElectives.map((item, index) => {
      if (index === position) {
        return !item;
      } else {
        return item;
      }
    });
    
    setCheckedElectives( updatedCheckedElectives );
    console.log( checkedElectives );
  }

  function submitFormData(e) {
    e.preventDefault();

    // Get the selected electives
    const selectedElectives = electives.filter( ( elective, index ) => {
      return elective.checked != checkedElectives[index];
    } )

    // Store in localstorage
    const verified = getAndVerifyData(e, "electives", selectedElectives);

    verified ? router.push("/student/guardian-details") : console.log("an error ocurred");
  }
  return (
    <form
      onSubmit={submitFormData}
      className="px-[20px] h-[420px] mt-[100px] flex flex-col justify-between"
    >
      <section className="h-[270px] overflow-y-auto">
        {electives.map((elective, index) => {
          return (
            <div
              key={index}
              className="border p-4 flex gap-5 items-center rounded-md focus-within:border-secondary mb-[20px]"
            >
              <input
                type="checkbox"
                name="electives"
                id={elective.course}
                onChange={() => handleChange(index)}
              />
              <label htmlFor={elective.course}>{elective.course}</label>
            </div>
          );
        })}
      </section>
      <section className="flex flex-col gap-5 px-[0px]">
        <Button label="Continue" />
        <Link href="/student/course">
          <Button label="Previous" variant="secondary" />
        </Link>
      </section>
    </form>
  );
}
