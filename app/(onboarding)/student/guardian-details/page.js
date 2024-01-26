import { GuardianDetailsForm } from "../../../components/onboarding/Forms/GuardianDetailsForm";
import { CustomHeader } from "../../../components/onboarding/CustomHeader";

export default function Page() {
  return (
    <section className="flex flex-col justify-between h-[90vh] w-[95vw] overflow-clip">
      <section>
        <CustomHeader
          title="Guardian/Parent Contact"
          subtitle="Please provide contact information of your guardian or parent"
        />

        <section className="w-[95vw]">
          <GuardianDetailsForm />
        </section>
      </section>
    </section>
  );
}
