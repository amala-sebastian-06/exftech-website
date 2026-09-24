import type { IconName } from "@/data/site";

const PATHS: Record<IconName, string> = {
  compass:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm4.2 3.8-2.4 5.4-5.4 2.4 2.4-5.4 5.4-2.4ZM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
  wrench:
    "M20.6 5.5a5.5 5.5 0 0 1-7.2 7.2L6.2 19.9a2.4 2.4 0 0 1-3.4-3.4l7.2-7.2A5.5 5.5 0 0 1 17.2 2l-3 3 1.6 3.2L19 6.8l1.6-1.3Z",
  headphones:
    "M12 3a8 8 0 0 0-8 8v6a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H6v-1a6 6 0 0 1 12 0v1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a3 3 0 0 0 3-3v-6a8 8 0 0 0-8-8Z",
  boxes:
    "M3 4h8v8H3V4Zm10 0h8v8h-8V4ZM3 14h8v6H3v-6Zm10 0h8v6h-8v-6Z",
  flask:
    "M9 2h6v2h-1v5.2l5.3 9.2A2 2 0 0 1 17.6 21H6.4a2 2 0 0 1-1.7-2.6L10 9.2V4H9V2Zm3 9.6-2.9 5.1h5.8L12 11.6Z",
  route:
    "M5 3a3 3 0 0 1 1 5.8V11h5a4 4 0 0 1 4 4v1.2a3 3 0 1 1-2 0V15a2 2 0 0 0-2-2H6a3 3 0 0 1-3-3V8.8A3 3 0 0 1 5 3Z",
};

export function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d={PATHS[name]} />
    </svg>
  );
}
