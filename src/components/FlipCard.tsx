"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Pointer-tilt + click-to-flip 3D card. Front and back are supplied by the
 * caller, so the same motion can carry a service, a case study or a profile.
 */
export function FlipCard({
  front,
  back,
  label,
  aspect = "3 / 4",
  tiltStrength = 11,
  /** Flip as soon as a mouse enters. Touch and keyboard still use tap/Enter. */
  flipOnHover = false,
  className = "",
}: {
  front: ReactNode;
  back: ReactNode;
  label: string;
  aspect?: string;
  tiltStrength?: number;
  flipOnHover?: boolean;
  className?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotX = useSpring(
    useTransform(my, [-0.5, 0.5], [tiltStrength, -tiltStrength]),
    spring,
  );
  const rotY = useSpring(
    useTransform(mx, [-0.5, 0.5], [-tiltStrength, tiltStrength]),
    spring,
  );
  const flip = useSpring(0, { stiffness: 140, damping: 20 });
  const rotYTotal = useTransform([rotY, flip], ([a, b]) => Number(a) + Number(b));

  function handleMove(e: React.PointerEvent) {
    // Bounding rect is cached on pointer-enter rather than re-read on every
    // move: querying layout mid-gesture is what turns the side tilt jittery.
    const r = rectRef.current ?? ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function setFace(next: boolean) {
    setFlipped(next);
    flip.set(next ? 180 : 0);
  }

  function toggle() {
    setFace(!flipped);
  }

  return (
    <div className={`ef-stage @container ${className}`}>
      <motion.div
        ref={ref}
        role="button"
        tabIndex={0}
        aria-label={`${label} — flip for detail`}
        aria-pressed={flipped}
        onPointerMove={handleMove}
        onPointerEnter={(e) => {
          rectRef.current = ref.current?.getBoundingClientRect() ?? null;
          if (flipOnHover && e.pointerType === "mouse") setFace(true);
        }}
        onPointerLeave={(e) => {
          rectRef.current = null;
          mx.set(0);
          my.set(0);
          if (flipOnHover && e.pointerType === "mouse") setFace(false);
        }}
        onFocus={() => {
          if (flipOnHover) setFace(true);
        }}
        onBlur={() => {
          if (flipOnHover) setFace(false);
        }}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        style={{ rotateX: rotX, rotateY: rotYTotal, aspectRatio: aspect }}
        className="ef-3d relative w-full cursor-pointer outline-none ring-offset-4 ring-offset-[var(--ef-ink)] focus-visible:ring-2 focus-visible:ring-[var(--ef-orange)]"
      >
        <div
          className="ef-backface absolute inset-0"
          style={{ transform: "translateZ(0.5px)" }}
        >
          {front}
        </div>
        <div
          className="ef-backface absolute inset-0"
          style={{ transform: "rotateY(180deg) translateZ(0.5px)" }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}
