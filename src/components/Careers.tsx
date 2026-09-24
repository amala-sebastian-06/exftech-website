"use client";

import { motion } from "framer-motion";
import { Reveal, RevealWords } from "./motion-primitives";
import { careers as c } from "@/data/site";

export function Careers({
  eyebrow = c.eyebrow,
  title = c.title,
}: {
  eyebrow?: string;
  title?: string;
} = {}) {
  return (
    <section
      id="careers"
      className="relative scroll-mt-20 border-t border-white/10 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="ef-eyebrow">{eyebrow}</p>
          </Reveal>
          <RevealWords
            text={title}
            className="ef-display ef-balance mt-6 text-[clamp(1.9rem,4.2vw,3.2rem)] text-white"
          />
          <Reveal delay={0.15}>
            <p className="ef-lede mt-6 max-w-[56ch]">{c.copy}</p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href={c.ctaHref}
                className="ef-notch group relative inline-block overflow-hidden bg-[var(--ef-orange)] px-7 py-4 text-sm font-semibold text-white"
              >
                <span className="relative z-10">{c.cta} →</span>
                <span className="absolute inset-0 -translate-x-full bg-black/25 transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              <a
                href={`mailto:${c.email}`}
                className="group inline-flex flex-col gap-1.5"
              >
                <span className="font-[family-name:var(--font-mono-ef)] text-[0.6rem] uppercase tracking-[0.22em] text-[#7d7d7d]">
                  Applications
                </span>
                <span className="ef-display border-b border-white/20 pb-1 text-[1rem] text-white transition-colors group-hover:border-[var(--ef-orange)] group-hover:text-[var(--ef-orange)]">
                  {c.email}
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* orbit */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto grid aspect-square w-full max-w-[400px] place-items-center">
            {[0, 1].map((r) => (
              <motion.span
                key={r}
                aria-hidden
                className="absolute rounded-full border border-white/12"
                style={{ inset: r === 0 ? "4%" : "22%" }}
                animate={{ rotate: r === 0 ? 360 : -360 }}
                transition={{
                  duration: r === 0 ? 24 : 17,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ef-orange)]" />
              </motion.span>
            ))}
            <div className="ef-display grid aspect-square w-[46%] place-items-center rounded-full border border-white/12 bg-[#121212] text-center text-[0.9rem] leading-tight text-white">
              <span>
                {c.core[0]}
                <br />
                <span className="text-[var(--ef-orange)]">{c.core[1]}</span>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
