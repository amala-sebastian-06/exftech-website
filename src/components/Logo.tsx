/**
 * ExcelFast mark: the brand logo artwork, background pre-cut to transparent.
 */
export function Mark({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/excelfast-logo-mark.png"
      alt=""
      aria-hidden="true"
      className={`object-contain ${className}`}
    />
  );
}

export function Wordmark({
  className = "",
  stacked = true,
}: {
  className?: string;
  stacked?: boolean;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Mark className="h-8 w-8 shrink-0" />
      <span className={stacked ? "leading-none" : "leading-none"}>
        <span className="ef-display block text-[1.15rem] tracking-[-0.02em]">
          ExcelFast
        </span>
        <span className="mt-[3px] block font-[var(--font-poppins)] text-[0.6rem] font-semibold tracking-[0.04em] text-[#cfcfcf]">
          Advanced Technologies
        </span>
      </span>
    </span>
  );
}
