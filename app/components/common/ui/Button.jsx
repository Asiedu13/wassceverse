export function Button({ label, variant = "primary" }) {
  const primaryStyle =
    "bg-secondary text-white rounded-3xl text-lg p-3 w-[80vw]";
  const secondaryStyle =
    "bg-semi-background border border-secondary text-secondary rounded-3xl text-lg p-3 w-[80vw]";
  return (
    <button className={variant == "secondary" ? secondaryStyle : primaryStyle}>
      {label}
    </button>
  );
}
