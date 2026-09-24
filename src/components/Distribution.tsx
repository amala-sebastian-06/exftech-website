"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "./Icons";
import { Reveal, RevealWords } from "./motion-primitives";
import { distribution as d } from "@/data/site";

export function Distribution() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="distribution"
      className="relative scroll-mt-20 border-y border-white/10 bg-[#0b0b0b] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <p className="ef-eyebrow">{d.eyebrow}</p>
        </Reveal>
        <RevealWords
          text={d.title}
          className="ef-display ef-balance mt-6 max-w-[20ch] text-[clamp(1.9rem,4.2vw,3.2rem)] text-white"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div
              ref={ref}
              className="ef-notch relative h-[420px] overflow-hidden lg:h-full lg:min-h-[480px]"
            >
              <motion.div style={{ y: imgY }} className="absolute inset-[-8%]">
                <Image
                  src={d.image}
                  alt={d.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <h3 className="ef-display text-[clamp(1.4rem,3vw,2.1rem)] text-white">
                  {d.overlayTitle[0]}
                  <br />
                  <span className="text-[var(--ef-orange)]">
                    {d.overlayTitle[1]}
                  </span>
                </h3>
                <p className="mt-4 max-w-[48ch] text-[0.88rem] leading-relaxed text-[#c4c4c4]">
                  {d.overlayCopy}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {d.cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <article className="group ef-notch-tl flex h-full items-start gap-5 border border-white/10 bg-[#121212] p-7 transition-colors duration-500 hover:border-[var(--ef-orange)]/40 hover:bg-[#161616]">
                  <span className="grid h-12 w-12 shrink-0 place-items-center bg-[var(--ef-orange)]/12 text-[var(--ef-orange)] transition-colors duration-500 group-hover:bg-[var(--ef-orange)] group-hover:text-white">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="ef-display text-[1.15rem] text-white">{c.t}</h3>
                    <p className="mt-2.5 text-[0.88rem] leading-relaxed text-[#9e9e9e]">
                      {c.d}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
