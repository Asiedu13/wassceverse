"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getAndVerifyData } from "../../common/utils/main";
import { Button } from "../../common/ui/Button";

export function DOBForm() {
  const router = useRouter();
  const [dob, setDob] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setDob(value);
  }

  function submitFormData(e) {
    e.preventDefault();
    const verified = getAndVerifyData(e, "dob", dob);

    verified ? router.push("/student/course") : console.log("an error occured");
  }
  return (
    <form
      onSubmit={submitFormData}
      className="px-[20px] h-[420px] mt-[100px] flex flex-col justify-between"
    >
      <section>
        <label htmlFor="male">Date of Birth</label>
        <div className=".border .p-4 flex .gap-5 .items-center rounded-md focus-within:border-secondary mt-[5px] mb-[20px]">
          <input
            type="date"
            name="dob"
            id="male"
            className="border p-4 flex-1 gap-5 items-center rounded-md focus-within:border-secondary mt-[5px] mb-[20px]"
            value={dob}
            onChange={handleChange}
          />
        </div>
      </section>
      <section className="flex flex-col gap-5 px-[0px]">
        <Link href="/student/gender">
          <Button label="Previous" variant="secondary" />
        </Link>
        <Button label="Continue" />
      </section>
    </form>
  );
}
