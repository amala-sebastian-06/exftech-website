import { Mark } from "./Logo";

export function Marquee({
  items,
  reverse = false,
  tone = "orange",
}: {
  items: string[];
  reverse?: boolean;
  tone?: "orange" | "ink";
}) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((t, i) => (
        <span key={`${t}-${i}`} className="flex items-center">
          <span className="ef-display px-7 text-[clamp(1rem,2.2vw,1.6rem)] whitespace-nowrap">
            {t}
          </span>
          <Mark className="h-4 w-4 shrink-0 opacity-70" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`relative flex overflow-hidden border-y py-4 ${
        tone === "orange"
          ? "border-transparent bg-[var(--ef-orange)] text-white"
          : "border-white/10 bg-[#121212] text-[#8d8d8d]"
      }`}
    >
      <div className={`ef-marquee-track ${reverse ? "reverse" : ""}`}>
        {row}
        {row}
      </div>
    </div>
  );
}
