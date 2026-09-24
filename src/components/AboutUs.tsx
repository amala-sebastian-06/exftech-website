"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Counter, Reveal, RevealWords } from "./motion-primitives";
import { Mark } from "./Logo";

export function AboutUs() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const driftY = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const spin = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32"
    >
      <motion.div
        style={{ y: driftY, rotate: spin }}
        className="pointer-events-none absolute -right-[12%] top-[8%] w-[46%] text-white/[0.025]"
      >
        <Mark className="w-full" />
      </motion.div>

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <p className="ef-eyebrow">About us</p>
        </Reveal>

        <div className="mt-6 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <RevealWords
              text="A workshop, a lab and a service desk that answer to the same name."
              className="ef-display ef-balance max-w-[16ch] text-[clamp(2rem,4.6vw,3.6rem)] text-white"
            />
            <Reveal delay={0.15}>
              <span className="mt-8 block h-[3px] w-20 bg-[var(--ef-orange)]" />
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <p className="ef-lede">
                Excelfast Advanced Technologies was built around a simple
                frustration: plants had to call one vendor to design a part, another
                to make it, a third to fix it and a fourth to source the spare. We
                folded all four into one team.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="ef-lede">
                From our base in the Pithampur industrial belt we run engineering,
                MRO, assembly, distribution and R&amp;D under one roof — close enough
                to India&rsquo;s manufacturing corridor that we can be on your floor
                the same day.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                {[
                  { n: 5, s: "", l: "Service lines in-house" },
                  { n: 7, s: "", l: "Steps, requirement to support" },
                  { n: 24, s: "/7", l: "Breakdown response" },
                ].map((x) => (
                  <div key={x.l}>
                    <div className="ef-display text-[clamp(1.6rem,3.4vw,2.6rem)] text-[var(--ef-orange)]">
                      <Counter to={x.n} suffix={x.s} />
                    </div>
                    <p className="mt-2 text-[0.75rem] leading-snug text-[#8d8d8d]">
                      {x.l}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
