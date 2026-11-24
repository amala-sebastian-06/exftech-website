"use client";

import { motion } from "framer-motion";
import { Reveal, RevealWords } from "./motion-primitives";
import { support } from "@/data/site";

/** Radial positions for the five orbiting after-sales nodes. */
const ANGLES = [-90, -18, 54, 126, 198];

export function Support() {
  return (
    <section id="support" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <Reveal>
              <p className="ef-eyebrow">{support.eyebrow}</p>
            </Reveal>
            <RevealWords
              text={support.title}
              className="ef-display ef-balance mt-6 text-[clamp(1.9rem,4.2vw,3.2rem)] text-white"
            />
          </div>
          <Reveal delay={0.15}>
            <p className="ef-lede">{support.lede}</p>
          </Reveal>
        </div>

        {/* orbit map (desktop) */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-20 hidden aspect-square w-full max-w-[620px] sm:block">
            <motion.span
              aria-hidden
              className="absolute inset-[12%] rounded-full border border-dashed border-white/12"
              animate={{ rotate: -360 }}
              transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
            />
            <span
              aria-hidden
              className="absolute inset-[28%] rounded-full border border-white/8"
            />

            <div className="absolute left-1/2 top-1/2 grid aspect-square w-[38%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[var(--ef-orange)] text-center">
              <div>
                <b className="ef-display block text-[clamp(0.8rem,2vw,1.05rem)] leading-tight text-white">
                  {support.core[0]}
                  <br />
                  {support.core[1]}
                </b>
                <small className="mt-2 block font-[family-name:var(--font-mono-ef)] text-[0.55rem] tracking-[0.2em] text-black/60">
                  {support.coreSub}
                </small>
              </div>
            </div>

            {support.nodes.map((n, i) => {
              const a = (ANGLES[i] * Math.PI) / 180;
              const left = 50 + 41 * Math.cos(a);
              const top = 50 + 41 * Math.sin(a);
              return (
                <motion.div
                  key={n}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.09 }}
                  style={{ left: `${left}%`, top: `${top}%` }}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 whitespace-nowrap border border-white/12 bg-[#151515] px-4 py-2.5 text-[0.8rem] text-white"
                >
                  <i className="block h-[6px] w-[6px] shrink-0 bg-[var(--ef-orange)]" />
                  {n}
                </motion.div>
              );
            })}
          </div>
        </Reveal>

        {/* stacked list (mobile) */}
        <div className="mt-12 grid gap-px overflow-hidden bg-white/10 sm:hidden">
          <div className="bg-[var(--ef-orange)] p-6 text-center">
            <b className="ef-display block text-[1.05rem] text-white">
              {support.core[0]} {support.core[1]}
            </b>
            <small className="mt-1.5 block font-[family-name:var(--font-mono-ef)] text-[0.55rem] tracking-[0.2em] text-black/60">
              {support.coreSub}
            </small>
          </div>
          {support.nodes.map((n) => (
            <div
              key={n}
              className="flex items-center gap-3 bg-[#121212] px-5 py-4 text-[0.9rem] text-white"
            >
              <i className="block h-[6px] w-[6px] shrink-0 bg-[var(--ef-orange)]" />
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
