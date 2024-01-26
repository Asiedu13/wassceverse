import { ElectivesForm } from "../../../components/onboarding/Forms/ElectivesForm";
import { CustomHeader } from "../../../components/onboarding/CustomHeader";
import { electives } from "../../../components/common/data/electives";

export default function Page() {
  return (
    <section className="flex flex-col justify-between h-[90vh] w-[95vw] overflow-clip">
      <section className="flex flex-col justify-between ">
        <CustomHeader
          title="Elective Subjects"
          subtitle="Select the elective subjects you are currently studying in Secondary School"
        />

        <section className="w-[95vw]">
          <ElectivesForm electives={electives} />
        </section>
      </section>
    </section>
  );
}
