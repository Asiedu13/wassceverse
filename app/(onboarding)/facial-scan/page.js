import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/common/ui/Button";

export default function Page() {
  return (
    <section className="h-[90vh] flex flex-col justify-around">
      <section className="flex flex-col items-center justify-center px-[20px]">
        <Image
          src="/images/facial_label.png"
          width={200}
          height={200}
          alt="Facial label"
        />
        <h2 className="text-2xl font-bold">Facial Scan</h2>
        <p className="text-center px-[40px]">
          WassceVerse's innovative feature utilizes facial recognition
          technology to authenticate students and display their stored
          information securely.
        </p>
      </section>
      <section className="flex flex-col items-center justify-between">
        <Link href="/facial-scan/scan">
          <Button label="Scan Your Face" />
        </Link>
        <Link href="/student/guardian-details">
          <Button label="Previous" variant="secondary" />
        </Link>
      </section>
    </section>
  );
}
