import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Contact";
import { Reveal, RevealWords } from "@/components/motion-primitives";
import { Mark } from "@/components/Logo";
import { marketResearch as mr } from "@/data/site";

export const metadata: Metadata = {
  title: "Market Research | Excelfast Advanced Technologies",
  description:
    "Market, competitor and customer research for industrial companies — run by engineers, from first question to execution.",
};

export default function MarketResearchPage() {
  return (
    <>
      <Nav />
      <main className="pt-[74px]">
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 78% 20%, rgba(249,105,2,0.14), transparent 65%)",
            }}
          />
          <Mark className="pointer-events-none absolute -right-[10%] top-[10%] w-[40%] opacity-[0.05]" />

          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
            <Link
              href="/#services"
              className="font-[family-name:var(--font-mono-ef)] text-[0.65rem] uppercase tracking-[0.22em] text-[#7d7d7d] transition-colors hover:text-[var(--ef-orange)]"
            >
              ← All services
            </Link>

            <Reveal>
              <p className="ef-eyebrow mt-12">{mr.eyebrow}</p>
            </Reveal>
            <h1 className="ef-display ef-balance mt-6 max-w-[20ch] text-[clamp(2.2rem,5.4vw,4.4rem)] text-white">
              {mr.title}
            </h1>
            <Reveal delay={0.12}>
              <p className="ef-lede mt-8 max-w-[64ch]">{mr.lede}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/#contact"
                  className="ef-notch bg-[var(--ef-orange)] px-7 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Discuss your research <span aria-hidden>↗</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0b0b0b] py-20 sm:py-24">
          <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
            <Reveal>
              <p className="ef-eyebrow">How we help</p>
            </Reveal>
            <div className="space-y-6">
              {mr.intro.map((p, i) => (
                <Reveal key={i} delay={0.08 * i}>
                  <p className="ef-lede">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
            <Reveal>
              <p className="ef-eyebrow">What we research</p>
            </Reveal>
            <RevealWords
              text="Six areas, scoped around your decision."
              className="ef-display ef-balance mt-6 max-w-[18ch] text-[clamp(1.9rem,4.2vw,3.2rem)] text-white"
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mr.areas.map((a, i) => (
                <Reveal key={a.n} delay={(i % 3) * 0.08}>
                  <article className="ef-notch group relative h-full border border-white/10 bg-[#121212] p-7 transition-colors duration-500 hover:border-[var(--ef-orange)]/50">
                    <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[var(--ef-orange)] transition-transform duration-500 group-hover:scale-x-100" />
                    <span className="font-[family-name:var(--font-mono-ef)] text-[0.68rem] tracking-[0.2em] text-[var(--ef-orange)]">
                      {a.n}
                    </span>
                    <h3 className="ef-display mt-4 text-[1.2rem] text-white">{a.t}</h3>
                    <p className="mt-3 text-[0.88rem] leading-relaxed text-[#9e9e9e]">
                      {a.d}
                    </p>
                    <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                      {a.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2.5 text-[0.84rem] leading-snug text-[#cfcfcf]"
                        >
                          <span className="mt-[0.45em] h-[5px] w-[5px] shrink-0 bg-[var(--ef-orange)]" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0b0b0b] py-24 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
            <Reveal>
              <p className="ef-eyebrow">How it works</p>
            </Reveal>
            <RevealWords
              text="From question to recommendation."
              className="ef-display ef-balance mt-6 text-[clamp(1.9rem,4.2vw,3.2rem)] text-white"
            />
            <ol className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
              {mr.process.map((s, i) => (
                <Reveal key={s.n} as="li" delay={0.06 * i} className="bg-[#0b0b0b] p-6">
                  <span className="font-[family-name:var(--font-mono-ef)] text-[0.68rem] tracking-[0.2em] text-[var(--ef-orange)]">
                    {s.n}
                  </span>
                  <h3 className="ef-display mt-4 text-[1.15rem] text-white">{s.t}</h3>
                  <p className="mt-2 text-[0.84rem] leading-relaxed text-[#9e9e9e]">
                    {s.d}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-24 sm:py-32">
          <div className="mx-auto grid max-w-[1280px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <p className="ef-eyebrow">What you get</p>
              </Reveal>
              <RevealWords
                text="Deliverables you can act on."
                className="ef-display ef-balance mt-6 text-[clamp(1.7rem,3.6vw,2.6rem)] text-white"
              />
              <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {mr.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 py-4 text-[0.95rem] text-[#d6d6d6]">
                    <span className="mt-[0.5em] h-[6px] w-[6px] shrink-0 bg-[var(--ef-orange)]" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Reveal>
                <p className="ef-eyebrow">Industries we cover</p>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="mt-6 flex flex-wrap gap-3">
                  {mr.industries.map((x) => (
                    <span
                      key={x}
                      className="ef-notch border border-white/15 px-4 py-2.5 text-[0.85rem] text-white"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="ef-notch mt-10 border border-[var(--ef-orange)]/40 bg-[var(--ef-orange)]/[0.06] p-7">
                  <p className="ef-eyebrow">The Excelfast difference</p>
                  <p className="mt-4 text-[1rem] leading-relaxed text-[#e4e4e4]">
                    {mr.differentiator}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#0b0b0b] py-20 text-center sm:py-24">
          <div className="mx-auto max-w-[760px] px-5">
            <Reveal>
              <h2 className="ef-display ef-balance text-[clamp(1.8rem,4vw,3rem)] text-white">
                Have a decision that needs evidence?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="ef-lede mt-5">
                Tell us what you are trying to decide. We will scope the research
                around it and come back with a clear plan.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <Link
                href="/#contact"
                className="ef-notch mt-9 inline-block bg-[var(--ef-orange)] px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Start a conversation <span aria-hidden>↗</span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
