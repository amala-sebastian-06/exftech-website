"use client";

import { motion } from "framer-motion";
import { Reveal, RevealWords } from "./motion-primitives";
import { Mark } from "./Logo";
import { additive, mro } from "@/data/site";

export function Mro() {
  return (
    <section
      id="mro"
      className="relative scroll-mt-20 overflow-hidden border-y border-white/10 bg-[#0b0b0b] py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 78% 35%, rgba(249,105,2,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <Reveal>
              <p className="ef-eyebrow">{mro.eyebrow}</p>
            </Reveal>
            <RevealWords
              text={mro.title}
              className="ef-display ef-balance mt-6 text-[clamp(1.9rem,4.2vw,3.2rem)] text-white"
            />
          </div>
          <Reveal delay={0.15}>
            <p className="ef-lede">{mro.lede}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {/* service architecture */}
          <Reveal>
            <div className="ef-notch h-full border border-white/10 bg-[#121212] p-7 sm:p-9">
              <p className="font-[family-name:var(--font-mono-ef)] text-[0.65rem] uppercase tracking-[0.22em] text-[#6f6f6f]">
                {mro.panelLabel}
              </p>
              <h3 className="ef-display mt-4 text-[1.5rem] text-white">
                {mro.panelTitle}
              </h3>

              <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {mro.items.map((it, i) => (
                  <motion.li
                    key={it.n}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: i * 0.07 }}
                    className="group flex items-center justify-between gap-4 py-4 transition-colors hover:bg-white/[0.03]"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-[family-name:var(--font-mono-ef)] text-[0.7rem] text-[var(--ef-orange)]">
                        {it.n}
                      </span>
                      <span className="ef-display text-[0.98rem] text-white">
                        {it.t}
                      </span>
                    </span>
                    <span className="shrink-0 border border-white/15 px-2.5 py-1 font-[family-name:var(--font-mono-ef)] text-[0.58rem] tracking-[0.18em] text-[#a5a5a5] transition-colors group-hover:border-[var(--ef-orange)] group-hover:text-[var(--ef-orange)]">
                      {it.pill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* objective */}
          <Reveal delay={0.12}>
            <div className="ef-notch-tl flex h-full flex-col border border-white/10 bg-[#121212] p-7 sm:p-9">
              <p className="font-[family-name:var(--font-mono-ef)] text-[0.65rem] uppercase tracking-[0.22em] text-[#6f6f6f]">
                {mro.objectiveLabel}
              </p>

              <div className="relative mx-auto my-10 grid aspect-square w-full max-w-[230px] place-items-center">
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-dashed border-white/15"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                />
                <motion.svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 -rotate-90"
                  aria-hidden
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="4"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="var(--ef-orange)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    pathLength={1}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 0.82 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </motion.svg>
                <div className="text-center">
                  <span className="ef-display block text-[2.6rem] leading-none text-[var(--ef-orange)]">
                    ↑
                  </span>
                  <span className="mt-2 block max-w-[10ch] text-[0.74rem] leading-snug text-[#9e9e9e]">
                    {mro.objective}
                  </span>
                </div>
              </div>

              <div className="mt-auto grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
                {mro.meta.map((m) => (
                  <div key={m.n}>
                    <span className="ef-display block text-[0.95rem] text-[var(--ef-orange)]">
                      {m.n}
                    </span>
                    <span className="mt-1 block text-[0.74rem] text-[#9e9e9e]">
                      {m.t}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Additive / industrial 3D printer repair */}
        <Reveal delay={0.1}>
          <div className="ef-notch-tl relative mt-6 overflow-hidden border border-[var(--ef-orange)]/25 bg-[#121212] p-7 sm:p-10">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-[6%] -top-[30%] hidden w-[30%] text-[var(--ef-orange)]/[0.06] lg:block"
            >
              <Mark className="w-full" />
            </span>

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
              <div>
                <p className="ef-eyebrow">{additive.eyebrow}</p>
                <h3 className="ef-display ef-balance mt-5 max-w-[16ch] text-[clamp(1.5rem,3.2vw,2.4rem)] text-white">
                  {additive.title}
                </h3>
              </div>

              <div>
                <p className="ef-lede max-w-[58ch]">{additive.copy}</p>

                <ul className="mt-9 grid gap-x-10 gap-y-4 border-t border-white/10 pt-8 sm:grid-cols-2">
                  {additive.points.map((pt, i) => (
                    <motion.li
                      key={pt}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.55, delay: i * 0.06 }}
                      className="flex items-start gap-3 text-[0.9rem] leading-relaxed text-[#c4c4c4]"
                    >
                      <span className="mt-[0.5em] h-[6px] w-[6px] shrink-0 bg-[var(--ef-orange)]" />
                      {pt}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
