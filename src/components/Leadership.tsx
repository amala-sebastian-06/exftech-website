"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealCard } from "./RevealCard";
import { Reveal } from "./motion-primitives";
import { team, type Member } from "@/data/team";

const coo = team[0];

function Front({ m }: { m: Member }) {
  return (
    <div className="ef-notch group relative h-full overflow-hidden border border-white/10 bg-[#121212]">
      {m.photo && (
        <Image
          src={m.photo}
          alt={`${m.firstName} ${m.lastName}`}
          fill
          priority
          sizes="(max-width: 1024px) 80vw, 380px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="font-[family-name:var(--font-mono-ef)] text-[0.6rem] uppercase tracking-[0.22em] text-[var(--ef-orange)]">
          Leadership
        </span>
        <h3 className="ef-display mt-2.5 text-[1.3rem] leading-tight text-white">
          {m.honorific ? `${m.honorific} ` : ""}
          {m.firstName} {m.lastName}
        </h3>
        <p className="mt-1.5 text-[0.82rem] text-[#bdbdbd]">{m.role}</p>
      </div>
      <span className="absolute inset-x-0 bottom-0 h-[3px] bg-[var(--ef-orange)]" />
    </div>
  );
}

function Back({ m }: { m: Member }) {
  return (
    <div className="flex h-full flex-col justify-between bg-[var(--ef-orange)] p-7 text-white">
      <div>
        <span className="font-[family-name:var(--font-mono-ef)] text-[0.6rem] tracking-[0.22em] text-black/55">
          {m.empId}
        </span>
        <h3 className="ef-display mt-4 text-[1.25rem] leading-tight">
          {m.firstName} {m.lastName}
        </h3>
        <p className="mt-1.5 text-[0.8rem] font-semibold">{m.role}</p>
      </div>
      <p className="text-[0.88rem] leading-relaxed">{m.focus}</p>
    </div>
  );
}

export function Leadership() {
  return (
    <section className="relative border-y border-white/10 bg-[#0b0b0b] py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 25% 40%, rgba(249,105,2,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-[380px]"
        >
          <RevealCard
            label={`${coo.firstName} ${coo.lastName}`}
            aspect="3 / 4"
            front={<Front m={coo} />}
            back={<Back m={coo} />}
          />
        </motion.div>

        <div>
          <Reveal>
            <p className="ef-eyebrow">Office of the COO</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="ef-display ef-balance mt-6 text-[clamp(1.9rem,4.2vw,3.2rem)] text-white">
              {coo.honorific} {coo.firstName} {coo.lastName}
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-3 text-[0.95rem] font-semibold text-[var(--ef-orange)]">
              {coo.role}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="ef-lede mt-7 max-w-[58ch]">
              Deepak runs delivery across every service line: engineering, MRO,
              after-sales, distribution and R&amp;D. Scope, schedule and the technical
              call all land on the same desk, which is why a customer gets one answer
              instead of four.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <p className="ef-lede mt-5 max-w-[58ch]">
              {coo.focus}
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7">
              {[
                ["Reports", "Company-wide execution"],
                ["Based at", "Pithampur, M.P."],
                ["EMP ID", coo.empId],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-[family-name:var(--font-mono-ef)] text-[0.6rem] uppercase tracking-[0.22em] text-[#7d7d7d]">
                    {k}
                  </dt>
                  <dd className="ef-display mt-2 text-[0.95rem] text-white">{v}</dd>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
