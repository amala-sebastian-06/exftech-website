"use client";

import { motion } from "framer-motion";
import { Reveal, RevealWords } from "./motion-primitives";
import { process as p } from "@/data/site";

export function Process() {
  return (
    <section className="relative border-y border-white/10 bg-[#0b0b0b] py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <p className="ef-eyebrow">{p.eyebrow}</p>
        </Reveal>
        <RevealWords
          text={p.title}
          className="ef-display mt-6 text-[clamp(1.9rem,4.2vw,3.2rem)] text-white"
        />

        <div className="relative mt-16">
          {/* the line the steps hang from */}
          <motion.span
            aria-hidden
            className="absolute left-0 top-[26px] hidden h-px origin-left bg-[var(--ef-orange)]/45 lg:block lg:w-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />

          <ol className="grid gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {p.steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, delay: i * 0.07 }}
                className="group relative"
              >
                <span className="relative z-10 grid h-[52px] w-[52px] place-items-center border border-white/15 bg-[#0b0b0b] font-[family-name:var(--font-mono-ef)] text-[0.78rem] text-[var(--ef-orange)] transition-colors duration-400 group-hover:border-[var(--ef-orange)] group-hover:bg-[var(--ef-orange)] group-hover:text-white">
                  {s.n}
                </span>
                <h4 className="ef-display mt-5 text-[1.02rem] text-white">{s.t}</h4>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-[#8d8d8d]">
                  {s.d}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
