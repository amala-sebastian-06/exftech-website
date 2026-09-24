"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, RevealWords } from "./motion-primitives";
import { Wordmark } from "./Logo";
import { contact, footer } from "@/data/site";

function Field({
  label,
  name,
  type = "text",
  full = false,
  textarea = false,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  full?: boolean;
  textarea?: boolean;
  required?: boolean;
}) {
  const cls =
    "peer w-full border-0 border-b border-white/15 bg-transparent px-0 pb-3 pt-6 text-[0.95rem] text-white outline-none transition-colors placeholder-transparent focus:border-[var(--ef-orange)]";
  return (
    <div className={`relative ${full ? "sm:col-span-2" : ""}`}>
      {textarea ? (
        <textarea id={name} name={name} rows={3} placeholder={label} className={cls} />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={label}
          className={cls}
        />
      )}
      <label
        htmlFor={name}
        className="pointer-events-none absolute left-0 top-1 font-[family-name:var(--font-mono-ef)] text-[0.65rem] uppercase tracking-[0.2em] text-[#7d7d7d] transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-1 peer-focus:text-[0.65rem] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-[var(--ef-orange)]"
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#0b0b0b] py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="ef-eyebrow">{contact.eyebrow}</p>
            </Reveal>
            <RevealWords
              text={contact.title}
              className="ef-display mt-6 max-w-[14ch] text-[clamp(2rem,4.6vw,3.5rem)] text-white"
            />
            <Reveal delay={0.12}>
              <p className="ef-lede mt-6 max-w-[50ch]">{contact.lede}</p>
            </Reveal>

            <div className="mt-12 space-y-7">
              {contact.meta.map((x, i) => (
                <Reveal key={x.l} delay={0.06 * i}>
                  {x.href ? (
                    <a
                      href={x.href}
                      className="group flex items-baseline gap-6 border-b border-white/10 pb-4 transition-colors hover:border-[var(--ef-orange)]"
                    >
                      <span className="w-32 shrink-0 font-[family-name:var(--font-mono-ef)] text-[0.65rem] uppercase tracking-[0.2em] text-[#7d7d7d]">
                        {x.l}
                      </span>
                      <span className="ef-display flex-1 text-[1.1rem] text-white transition-colors group-hover:text-[var(--ef-orange)]">
                        {x.v}
                      </span>
                      <span
                        aria-hidden
                        className="text-[var(--ef-orange)] transition-transform duration-400 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-baseline gap-6 border-b border-white/10 pb-4">
                      <span className="w-32 shrink-0 font-[family-name:var(--font-mono-ef)] text-[0.65rem] uppercase tracking-[0.2em] text-[#7d7d7d]">
                        {x.l}
                      </span>
                      <span className="ef-display flex-1 text-[1.1rem] text-white">
                        {x.v}
                      </span>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="ef-notch-tl relative border border-white/10 bg-[#111111] p-7 sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />

                <div className="relative sm:col-span-2">
                  <label
                    htmlFor="service"
                    className="block font-[family-name:var(--font-mono-ef)] text-[0.65rem] uppercase tracking-[0.2em] text-[#7d7d7d]"
                  >
                    Service required
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="mt-3 w-full appearance-none border-0 border-b border-white/15 bg-transparent px-0 pb-3 text-[0.95rem] text-white outline-none transition-colors focus:border-[var(--ef-orange)]"
                  >
                    <option value="" className="bg-[#111]">
                      Select a service
                    </option>
                    {contact.serviceOptions.map((o) => (
                      <option key={o} value={o} className="bg-[#111]">
                        {o}
                      </option>
                    ))}
                  </select>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-3 right-0 text-[var(--ef-orange)]"
                  >
                    ▾
                  </span>
                </div>

                <Field
                  label="Tell us about the requirement"
                  name="message"
                  full
                  textarea
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="ef-notch group relative mt-9 w-full overflow-hidden bg-[var(--ef-orange)] px-7 py-4 text-sm font-semibold text-white"
              >
                <span className="relative z-10">
                  {sent
                    ? "Noted — we'll be in touch"
                    : "Send technical enquiry →"}
                </span>
                <span className="absolute inset-0 -translate-x-full bg-black/25 transition-transform duration-500 group-hover:translate-x-0" />
              </motion.button>

              <p className="mt-4 text-center text-[0.7rem] text-[#6f6f6f]">
                Demo form — connect this to your CRM / email backend before launch.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0e0e0e]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,0.86fr)]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-[36ch] text-[0.82rem] leading-relaxed text-[#8a8a8a]">
              {footer.blurb[0]}
              <br />
              {footer.blurb[1]}
            </p>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.h}>
              <h4 className="ef-display text-[0.9rem] text-white">{col.h}</h4>
              <div className="mt-4 flex flex-col gap-2.5">
                {col.links.map(([l, h]) => (
                  <a
                    key={l}
                    href={h}
                    className="text-[0.82rem] text-[#a5a5a5] transition-colors hover:text-[var(--ef-orange)]"
                  >
                    {l}
                  </a>
                ))}
              </div>
            </nav>
          ))}
        </div>

        <div className="ef-hairline my-10" />

        <div className="flex flex-col gap-3 text-[0.72rem] text-[#6f6f6f] sm:flex-row sm:justify-between">
          <span>{footer.bottom[0]}</span>
          <span>{footer.bottom[1]}</span>
        </div>
      </div>
    </footer>
  );
}
