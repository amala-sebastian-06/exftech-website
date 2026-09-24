"use client";

import Image from "next/image";
import { Reveal, RevealWords } from "./motion-primitives";
import { engineering as e } from "@/data/site";

export function Engineering() {
  return (
    <section id="engineering" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <Reveal>
              <p className="ef-eyebrow">{e.eyebrow}</p>
            </Reveal>
            <RevealWords
              text={e.title}
              className="ef-display ef-balance mt-6 text-[clamp(1.9rem,4.2vw,3.2rem)] text-white"
            />
          </div>
          <Reveal delay={0.15}>
            <p className="ef-lede">{e.lede}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {e.cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <article className="group ef-notch relative h-[420px] overflow-hidden border border-white/10">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.06] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/40 to-transparent transition-opacity duration-500 group-hover:from-[#0e0e0e]/95" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <small className="font-[family-name:var(--font-mono-ef)] text-[0.62rem] uppercase tracking-[0.22em] text-[var(--ef-orange)]">
                    {c.small}
                  </small>
                  <h3 className="ef-display mt-3 text-[1.4rem] text-white">{c.t}</h3>
                  <p className="mt-2 text-[0.82rem] text-[#a5a5a5]">{c.d}</p>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-[var(--ef-orange)] transition-transform duration-600 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <blockquote className="ef-notch-tl mt-10 border border-white/10 bg-[#121212] p-8 sm:p-12">
            <strong className="font-[family-name:var(--font-mono-ef)] text-[0.65rem] uppercase tracking-[0.22em] text-[var(--ef-orange)]">
              {e.quoteLabel}
            </strong>
            <p className="ef-display ef-balance mt-5 max-w-[40ch] text-[clamp(1.2rem,2.6vw,1.9rem)] leading-[1.3] text-white">
              &ldquo;{e.quote}&rdquo;
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
