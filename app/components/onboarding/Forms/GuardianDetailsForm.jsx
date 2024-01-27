"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { getAndVerifyData } from "../../common/utils/main";
import { Button } from "../../common/ui/Button";

export function GuardianDetailsForm() {
  const router = useRouter();
  const [guardianName, setGuardianName] = useState("");
  const [guardianContact, setGuardianContact] = useState("");

  function handleChange(e) {
    const { value, name } = e.target;
    if (name == "guardian-name") {
      setGuardianName(value);
    } else {
      setGuardianContact(value);
    }
  }

  function submitFormData(e) {
    e.preventDefault();
    const verified =
      getAndVerifyData(e, "guardianName", guardianName) &&
      getAndVerifyData(e, "guardianContact", guardianContact);

    verified
      ? router.push("/facial-scan")
      : console.log("an error occured");
  }
  return (
    <form
      onSubmit={submitFormData}
      className="px-[20px] h-[420px] mt-[100px] flex flex-col justify-between"
    >
      <section>
        <label htmlFor="guardian-name">Guardian/Parent Name</label>
        <div className=".border .p-4 flex .gap-5 .items-center rounded-md focus-within:border-secondary mt-[5px] mb-[0px]">
          <input
            type="text"
            name="guardian-name"
            id="guardian-name"
            className="border p-4 flex-1 gap-5 items-center rounded-md focus-within:border-secondary mt-[5px] mb-[20px]"
            value={guardianName}
            onChange={handleChange}
            placeholder="Eg. Samuel Asiedu"
          />
        </div>

        <label htmlFor="guardian-contact">Guardian/Parent Contact</label>
        <div className=".border .p-4 flex .gap-5 .items-center rounded-md focus-within:border-secondary mt-[5px] mb-[20px]">
          <input
            type="text"
            name="guardian-contact"
            id="guardian-contact"
            className="border p-4 flex-1 gap-5 items-center rounded-md focus-within:border-secondary mt-[5px] mb-[20px]"
            value={guardianContact}
            onChange={handleChange}
            placeholder="+233"
          />
        </div>
      </section>

      {/* <section> */}

      {/* </section> */}

      <section className="flex flex-col gap-5 px-[0px]">
        <Button label="Continue" />
        <Link href="/student/electives">
          <Button label="Previous" variant="secondary" />
        </Link>
      </section>
    </form>
  );
}
