import { CustomHeader } from "@/app/components/onboarding/CustomHeader";
import { IndexNumForm } from "../../../components/onboarding/Forms/IndexNumForm";

export default function Page() {
  return (
    <section className="flex flex-col justify-between h-[90vh] w-[90vw] overflow-clip">
      <section>
        <CustomHeader
          title="Select your School and Input your Index Number"
          subtitle="To continue, kindly provide your School name and Index Number"
        />

        <section className="w-[90vw]">
          <IndexNumForm />
        </section>
      </section>
    </section>
  );
}
