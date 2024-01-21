import { CustomHeader } from "../../../components/onboarding/CustomHeader";
import { CourseForm } from "../../../components/onboarding/Forms/CourseForm";

export default function Page() {
  return (
    <section className="flex flex-col justify-between h-[90vh] w-[95vw] overflow-clip">
      <section className="flex flex-col justify-between ">
        <CustomHeader
          title="Secondary School Course"
          subtitle="Please choose the course you are currently studying in the Secondary School"
        />

        <section className="w-[95vw]">
            <CourseForm />
        </section>
      </section>
    </section>
  );
}
