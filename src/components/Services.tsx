"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { RevealCard } from "./RevealCard";
import { Icon } from "./Icons";
import { Reveal, RevealWords } from "./motion-primitives";
import { services, type Service } from "@/data/site";

function Front({ s, i }: { s: Service; i: number }) {
  return (
    <div className="ef-notch relative flex h-full flex-col justify-between overflow-hidden border border-white/10 bg-[#121212] p-6 sm:p-7">
      <span className="absolute inset-x-0 top-0 h-[3px] bg-[var(--ef-orange)]" />
      <span
        className="pointer-events-none absolute -right-[18%] -top-[12%] h-[52%] w-[52%] rounded-full bg-[var(--ef-orange)]/10 blur-3xl"
        aria-hidden
      />

      <div className="flex items-start justify-between">
        <span className="font-[family-name:var(--font-mono-ef)] text-[0.68rem] tracking-[0.2em] text-[var(--ef-orange)]">
          {s.no} / 0{services.length}
        </span>
        <Icon name={s.icon} className="h-7 w-7 text-white/25" />
      </div>

      <div>
        <h3 className="ef-display text-[clamp(1.15rem,8cqw,1.7rem)] text-white">
          {s.name}
        </h3>
        <p className="mt-3 text-[0.85rem] leading-relaxed text-[#9e9e9e]">
          {s.desc}
        </p>
        <span className="mt-6 flex items-center gap-2 font-[family-name:var(--font-mono-ef)] text-[0.62rem] uppercase tracking-[0.22em] text-[#6f6f6f]">
          Hover <span className="text-[var(--ef-orange)]">↑</span>
        </span>
      </div>

      <span
        className="pointer-events-none absolute -bottom-6 -left-2 ef-display select-none text-[5rem] leading-none text-white/[0.03]"
        aria-hidden
      >
        {i + 1}
      </span>
    </div>
  );
}

function Back({ s }: { s: Service }) {
  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden bg-[var(--ef-orange)] p-6 text-white sm:p-7">
      <div>
        <span className="font-[family-name:var(--font-mono-ef)] text-[0.68rem] tracking-[0.2em] text-black/55">
          {s.no} / INSIDE
        </span>
        <h3 className="ef-display mt-4 text-[clamp(1.05rem,7cqw,1.45rem)]">
          {s.name}
        </h3>
        <ul className="mt-5 space-y-2.5">
          {s.detail.map((d) => (
            <li key={d} className="flex items-start gap-2.5 text-[0.84rem] leading-snug">
              <span className="mt-[0.45em] h-[5px] w-[5px] shrink-0 bg-black/60" />
              {d}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={s.href}
        onClick={(e) => e.stopPropagation()}
        className="mt-6 inline-flex items-center gap-2 self-start border-b border-white/50 pb-1 text-[0.78rem] font-semibold transition-colors hover:border-white"
      >
        Read more <span aria-hidden>↗</span>
      </Link>
    </div>
  );
}

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
          <Reveal>
            <p className="ef-eyebrow">What we do</p>
          </Reveal>
          <div>
            <RevealWords
              text="One technical partner across the industrial lifecycle."
              className="ef-display ef-balance text-[clamp(1.9rem,4.2vw,3.2rem)] text-white"
            />
            <Reveal delay={0.15}>
              <p className="ef-lede mt-6 max-w-[62ch]">
                We combine engineering, repair, assembly, distribution and technical
                support so customers do not have to coordinate five different vendors
                to solve one operational problem.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.no}
              initial={reduce ? false : { opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mx-auto w-full max-w-[330px] sm:max-w-none"
            >
              <RevealCard
                label={s.name}
                aspect="3 / 4"
                front={<Front s={s} i={i} />}
                back={<Back s={s} />}
              />
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center font-[family-name:var(--font-mono-ef)] text-[0.65rem] uppercase tracking-[0.22em] text-[#6f6f6f]">
            Hover a card to open it · tap on touch
          </p>
        </Reveal>
      </div>
    </section>
  );
}
