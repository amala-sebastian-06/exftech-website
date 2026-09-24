"use client";

import Image from "next/image";
import { Reveal, RevealWords } from "./motion-primitives";
import { industries as ind } from "@/data/site";

function Card({
  c,
  priority,
}: {
  c: (typeof ind.cards)[number];
  priority: boolean;
}) {
  return (
    <article className="group ef-notch relative h-[460px] w-[78vw] shrink-0 overflow-hidden border border-white/10 sm:w-[330px]">
      <Image
        src={c.image}
        alt={priority ? c.alt : ""}
        aria-hidden={!priority}
        fill
        sizes="(max-width: 640px) 78vw, 330px"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7">
        <small className="font-[family-name:var(--font-mono-ef)] text-[0.62rem] uppercase tracking-[0.2em] text-[var(--ef-orange)]">
          {c.small}
        </small>
        <h3 className="ef-display mt-3 text-[1.3rem] leading-tight text-white">
          {c.t}
        </h3>
        <p className="mt-2.5 text-[0.82rem] leading-relaxed text-[#a5a5a5]">{c.d}</p>
      </div>
    </article>
  );
}

export function Industries() {
  return (
    <section id="industries" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <p className="ef-eyebrow">{ind.eyebrow}</p>
        </Reveal>
        <RevealWords
          text={ind.title}
          className="ef-display mt-6 text-[clamp(1.9rem,4.2vw,3.2rem)] text-white"
        />
      </div>

      {/* Auto-scrolling rail. Pauses on hover/focus; no scrollbar. */}
      <div className="relative mt-14">
        <div className="ef-rail">
          <div className="ef-rail-track">
            {[0, 1].map((pass) => (
              <div key={pass} className="flex shrink-0 gap-5 pr-5">
                {ind.cards.map((c) => (
                  <Card key={`${pass}-${c.small}`} c={c} priority={pass === 0} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* soft edges so cards fade in and out of the rail */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0e0e0e] to-transparent sm:w-28"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0e0e0e] to-transparent sm:w-28"
        />
      </div>

      <p className="mt-8 text-center font-[family-name:var(--font-mono-ef)] text-[0.65rem] uppercase tracking-[0.22em] text-[#6f6f6f]">
        Hover to pause
      </p>
    </section>
  );
}
