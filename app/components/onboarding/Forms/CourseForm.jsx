"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getAndVerifyData } from "../../common/utils/main";
import { Button } from "../../common/ui/Button";

export function CourseForm() {
  const router = useRouter();
  const [course, setCourse] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setCourse(value);
  }

  function submitFormData(e) {
    e.preventDefault();
    const verified = getAndVerifyData(e, "course", course);

    verified
      ? router.push("/student/electives")
      : console.log("an error ocurred");
  }
  return (
    <form
      onSubmit={submitFormData}
      className="px-[20px] h-[390px] mt-[100px] flex flex-col justify-between"
    >
      <section>
        <label htmlFor="male">Course</label>
        <div className=".border .p-4 flex .gap-5 .items-center rounded-md focus-within:border-secondary mt-[5px] mb-[20px]">
          <select
            name="course"
            id="course"
            onChange={handleChange}
            className="w-full flex flex-col px-3 py-3 border-2 border-black rounded-md"
          >
            <option value="">Select a course</option>
            <option value="General Science">General Science</option>
            <option value="Business">Business</option>
            <option value="General Arts">General Arts</option>
          </select>
        </div>
      </section>
      <section className="flex flex-col gap-5 px-[0px]">
        <Link href="/student/dob">
          <Button label="Previous" variant="secondary" />
        </Link>
        <Button label="Continue" />
      </section>
    </form>
  );
}
