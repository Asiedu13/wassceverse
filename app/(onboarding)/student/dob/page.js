import { DOBForm } from "../../../components/onboarding/Forms/DOBForm";
import { CustomHeader } from "../../../components/onboarding/CustomHeader";

export default function Page() {
  return (
    <section className="flex flex-col justify-between h-[90vh] w-[95vw] overflow-clip">
      <section className="flex flex-col justify-between ">
        <CustomHeader
          title="Date of Birth"
          subtitle="Please provide your date of birth for accurate registration."
        />

        <section className="w-[95vw]">
          <DOBForm />
        </section>
      </section>
    </section>
  );
}
