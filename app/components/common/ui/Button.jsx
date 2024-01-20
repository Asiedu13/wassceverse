export function Button({ label, variant = "primary" }) {
  const primaryStyle =
    "bg-secondary text-white rounded-3xl text-lg p-3 w-[90vw]";
  const secondaryStyle =
    "bg-semi-background border border-secondary text-secondary rounded-3xl text-lg p-3 w-[90vw]";
  return (
    <button className={variant == "secondary" ? secondaryStyle : primaryStyle}>
      {label}
    </button>
  );
}
