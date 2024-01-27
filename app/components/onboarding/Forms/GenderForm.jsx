"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getAndVerifyData } from "../../common/utils/main";
import { Button } from "../../common/ui/Button";

export function GenderForm() {
  const router = useRouter();
  const [gender, setGender] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setGender(value);
  }

  function submitFormData(e) {
    e.preventDefault();
    const verified = getAndVerifyData(e, "gender", gender);

    verified ? router.push("/student/dob") : console.log("an error occured");
  }
  return (
    <form
      onSubmit={submitFormData}
      className="px-[20px] h-[420px] mt-[50px] flex flex-col justify-between"
    >
      <section>
        <div className="border p-4 flex gap-5 items-center rounded-md focus-within:border-secondary mb-[20px]">
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={gender == "male" ? true : false}
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
        </div>

        <div className="border p-4 flex gap-5 items-center rounded-md focus-within:border-secondary ">
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={handleChange}
            checked={gender == "female" ? true : false}
          />
          <label htmlFor="female">Female</label>
        </div>
      </section>
      <section className="flex flex-col gap-5 .px-[20px]">
        <Button label="Continue" />
        <Link href="/student/gender">
          <Button label="Previous" variant="secondary" />
        </Link>
      </section>
    </form>
  );
}
