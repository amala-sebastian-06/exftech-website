"use client";

import { useRef, useState, type ReactNode } from "react";

/**
 * Slide-up detail card. The back panel rises over the front on hover (mouse),
 * tap (touch) or Enter/Space (keyboard). Flat 2D transforms only, so there is
 * no cursor-follow tilt and nothing for the compositor to flicker on.
 */
export function RevealCard({
  front,
  back,
  label,
  aspect = "3 / 4",
  className = "",
}: {
  front: ReactNode;
  back: ReactNode;
  label: string;
  aspect?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const pointer = useRef<string>("mouse");

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${label}, show detail`}
      aria-pressed={open}
      onPointerDown={(e) => {
        pointer.current = e.pointerType;
      }}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setOpen(false);
      }}
      onFocus={(e) => {
        if (e.currentTarget.matches(":focus-visible")) setOpen(true);
      }}
      onBlur={() => setOpen(false)}
      onClick={() => {
        if (pointer.current !== "mouse") setOpen((v) => !v);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((v) => !v);
        }
      }}
      style={{ aspectRatio: aspect }}
      className={`ef-notch @container relative w-full cursor-pointer overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[var(--ef-orange)] ${className}`}
    >
      <div
        className={`absolute inset-0 transition-[transform,filter] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "scale-[1.05] brightness-[0.55]" : ""
        }`}
      >
        {front}
      </div>
      <div
        inert={!open}
        className={`absolute inset-0 transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {back}
      </div>
    </div>
  );
}
