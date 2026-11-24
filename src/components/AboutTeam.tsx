"use client";

import { motion } from "framer-motion";
import { Reveal, RevealWords } from "./motion-primitives";
import { Mark } from "./Logo";

/** How we work, in the team's own words. */
const values = [
  {
    n: "01",
    k: "Progress with Integrity",
    v: "Honest timelines, honest limits, honest pricing. It is on the badge because it is the part we refuse to negotiate.",
  },
  {
    n: "02",
    k: "Diagnose before you replace",
    v: "Find the real operating condition first. Precise intervention second. Long-term reliability after that.",
  },
  {
    n: "03",
    k: "One partner, not five vendors",
    v: "Design, build, repair and source under one roof, so a single operational problem does not need four phone calls.",
  },
  {
    n: "04",
    k: "Support starts after the sale",
    v: "Installation, training, spares and application guidance. We stay on the line long after the delivery note.",
  },
];

const traits = [
  {
    k: "Wide technical surface",
    v: "Design, electronics, fabrication, research and service sit in the same building. Nobody here has the luxury of a narrow job description.",
  },
  {
    k: "Bench time is real time",
    v: "Engineers are on the bench, not only on the drawing. The person who specified the part is usually the one who tests it.",
  },
  {
    k: "Accountable through execution",
    v: "The person who scopes the work stays on it through build, handover and support. No hand-offs into a vacuum.",
  },
  {
    k: "We hire for curiosity",
    v: "Credentials open the conversation. What keeps it going is whether you take the cover off to find out how the thing actually works.",
  },
];

export function AboutTeam() {
  return (
    <section
      id="culture"
      className="relative scroll-mt-20 overflow-hidden border-y border-white/10 bg-[#0b0b0b] py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(249,105,2,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* core values */}
          <Reveal>
            <div className="ef-notch relative h-full overflow-hidden border border-white/10 bg-[#121212] p-7 sm:p-9">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-[14%] -top-[18%] w-[52%] opacity-[0.06]"
              >
                <Mark className="w-full" />
              </span>

              <div className="relative">
                <p className="ef-eyebrow">What we stand for</p>
                <h3 className="ef-display mt-5 text-[clamp(1.4rem,2.6vw,1.9rem)] text-white">
                  Core values
                </h3>

                <ul className="mt-9 divide-y divide-white/10 border-y border-white/10">
                  {values.map((val, i) => (
                    <motion.li
                      key={val.n}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, delay: i * 0.08 }}
                      className="group py-5"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-[family-name:var(--font-mono-ef)] text-[0.68rem] text-[var(--ef-orange)]">
                          {val.n}
                        </span>
                        <span className="ef-display text-[1.05rem] text-white transition-colors duration-400 group-hover:text-[var(--ef-orange)]">
                          {val.k}
                        </span>
                      </div>
                      <p className="mt-2.5 pl-[calc(0.68rem+1rem)] text-[0.87rem] leading-relaxed text-[#9e9e9e]">
                        {val.v}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="ef-eyebrow">About the team</p>
            </Reveal>
            <RevealWords
              text="One standard, end to end."
              className="ef-display mt-6 text-[clamp(2rem,4.4vw,3.4rem)] text-white"
            />
            <Reveal delay={0.12}>
              <p className="ef-lede mt-6 max-w-[56ch]">
                The person who answers your call and the person holding the spanner
                work about two metres apart. Nothing gets lost translating a problem
                from the phone to the bench.
              </p>
            </Reveal>

            <dl className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {traits.map((t, i) => (
                <Reveal key={t.k} delay={0.08 * i}>
                  <div className="group grid gap-2 py-6 sm:grid-cols-[0.8fr_1.2fr] sm:gap-8">
                    <dt className="ef-display flex items-start gap-3 text-[1.02rem] text-white">
                      <span className="mt-[0.45em] h-[6px] w-[6px] shrink-0 bg-[var(--ef-orange)] transition-transform duration-400 group-hover:scale-150" />
                      {t.k}
                    </dt>
                    <dd className="text-[0.92rem] leading-relaxed text-[#9e9e9e]">
                      {t.v}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
