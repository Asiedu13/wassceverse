import { GenderForm } from "../../../components/onboarding/Forms/GenderForm";
import { CustomHeader } from "../../../components/onboarding/CustomHeader";

export default function Page() {
    return (
      <section className="flex flex-col justify-between h-[90vh] w-[95vw] overflow-clip">
        <section className="flex flex-col justify-between ">
          <CustomHeader
            title="Choose Your Gender"
            subtitle="To continue, please select your gender for registration purposes."
          />

          <section className="w-[90vw]">
            <GenderForm />
          </section>
        </section>
      </section>
    );
}