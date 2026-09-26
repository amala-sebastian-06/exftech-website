"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FlipCard } from "./FlipCard";
import { Reveal, RevealWords } from "./motion-primitives";
import { team, type Member } from "@/data/team";

function Front({ m }: { m: Member }) {
  return (
    <div className="ef-notch group relative h-full overflow-hidden border border-white/10 bg-[#121212]">
      {m.photo ? (
        <Image
          src={m.photo}
          alt={`${m.firstName} ${m.lastName}`}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 400px"
          className="object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0"
        />
      ) : (
        <div className="grid h-full w-full place-items-center bg-[#171717]">
          <svg viewBox="0 0 24 24" className="w-[22%] text-[#333]" fill="currentColor">
            <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5 0-9 2.6-9 5.8V22h18v-2.2c0-3.2-4-5.8-9-5.8Z" />
          </svg>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <h3 className="ef-display text-[clamp(1.05rem,5cqw,1.45rem)] leading-tight text-white">
          {m.honorific ? `${m.honorific} ` : ""}
          {m.firstName} {m.lastName}
        </h3>
        <p className="mt-2 text-[clamp(0.78rem,3.4cqw,0.95rem)] leading-snug text-[var(--ef-orange)]">
          {m.role}
        </p>
      </div>
      <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-[var(--ef-orange)] transition-transform duration-600 group-hover:scale-x-100" />
    </div>
  );
}

function Back({ m }: { m: Member }) {
  return (
    <div className="ef-notch-tl flex h-full flex-col justify-between bg-[var(--ef-orange)] p-6 text-white sm:p-7">
      <div>
        <span className="font-[family-name:var(--font-mono-ef)] text-[0.65rem] tracking-[0.2em] text-black/55">
          {m.empId}
        </span>
        <h3 className="ef-display mt-5 text-[clamp(1.1rem,5cqw,1.5rem)] leading-tight">
          {m.firstName} {m.lastName}
        </h3>
        <p className="mt-2 text-[clamp(0.8rem,3.4cqw,0.95rem)] font-semibold">
          {m.role}
        </p>
      </div>
      <p className="text-[clamp(0.85rem,3.6cqw,1rem)] leading-relaxed">{m.focus}</p>
    </div>
  );
}

export function TeamGrid({
  members = team,
  eyebrow = "Our team",
  title = "Engineers, technicians and the people who answer the phone.",
}: {
  members?: Member[];
  eyebrow?: string;
  title?: string;
} = {}) {
  const reduce = useReducedMotion();
  const [featured, ...rest] = members;

  return (
    <section id="team" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="ef-eyebrow">{eyebrow}</p>
            </Reveal>
            <RevealWords
              text={title}
              className="ef-display ef-balance mt-6 max-w-[18ch] text-[clamp(2rem,4.4vw,3.4rem)] text-white"
            />
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-[40ch] text-[0.95rem] leading-relaxed text-[#9e9e9e]">
              Hover to tilt, click anyone to see what they work on.
            </p>
          </Reveal>
        </div>

        {featured && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40, rotateX: 12 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-16 w-full max-w-[300px] sm:max-w-[340px]"
          >
            <FlipCard
              label={`${featured.firstName} ${featured.lastName}`}
              aspect="3 / 4"
              tiltStrength={9}
              front={<Front m={featured} />}
              back={<Back m={featured} />}
            />
          </motion.div>
        )}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {rest.map((m, i) => (
            <motion.div
              key={`${m.empId}-${i}`}
              initial={reduce ? false : { opacity: 0, y: 40, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <FlipCard
                label={`${m.firstName} ${m.lastName}`}
                aspect="3 / 4"
                tiltStrength={9}
                front={<Front m={m} />}
                back={<Back m={m} />}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
