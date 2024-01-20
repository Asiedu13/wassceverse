import { CustomProgressBar } from "../../components/onboarding/CircularProgress";


export const metadata = {
  title: "WASSCEVERSE Student | Registration ",
  description: "Stress-free registration for WASSCE",
};

export default function StudentOnboardingLayout({ children }) {
  return (
    <section>
      <nav className="flex justify-between items-center p-[20px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10.31"
          height="18.034"
          viewBox="0 0 10.31 18.034"
        >
          <path
            id="Icon_ionic-ios-arrow-back"
            data-name="Icon ionic-ios-arrow-back"
            d="M14.359,15.208,21.182,8.39a1.289,1.289,0,0,0-1.825-1.82L11.626,14.3a1.286,1.286,0,0,0-.038,1.777l7.763,7.779a1.289,1.289,0,1,0,1.825-1.82Z"
            transform="translate(-11.251 -6.194)"
          />
        </svg>
        <CustomProgressBar />
          </nav>
          
          {children}
    </section>
  );
}
