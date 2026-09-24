"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion-primitives";

export function TeamPhoto() {
  const reduce = useReducedMotion();

  return (
    <section className="relative border-t border-white/10 pt-20 sm:pt-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="ef-eyebrow">The people behind it</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="ef-display mt-5 text-[clamp(1.8rem,3.6vw,2.8rem)] text-white">
                Pithampur, after hours.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <p className="max-w-[44ch] text-[0.92rem] leading-relaxed text-[#9e9e9e]">
              Engineering, electronics, fabrication and service — one floor, one
              team, one standard.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Full-bleed, black and white.
          The photo is 4:3 and shown whole on small screens. On wider screens the
          frame is 16:9 and anchored to the bottom, so the only thing trimmed is
          empty ceiling — never a person, and never anything at the sides.
          The reveal is a clip wipe, never a zoom, for the same reason. */}
      <motion.div
        initial={reduce ? false : { clipPath: "inset(12% 0 12% 0)" }}
        whileInView={{ clipPath: "inset(0% 0 0% 0)" }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-12 aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]"
      >
        <Image
          src="/team/team-group.jpg"
          alt="The Excelfast Advanced Technologies team at the Pithampur office"
          fill
          sizes="100vw"
          className="object-cover object-bottom grayscale"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/35 via-transparent to-[#0e0e0e]/12" />
        <span className="absolute inset-x-0 bottom-0 h-[3px] bg-[var(--ef-orange)]" />
      </motion.div>
    </section>
  );
}
