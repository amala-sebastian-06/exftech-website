"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mark } from "./Logo";
import { hero } from "@/data/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const markY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-[74px]"
    >
      {/* media */}
      <motion.div style={{ y: mediaY }} className="absolute inset-[-8%_0_0_0] -z-10">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0e0e0e]/82 via-[#0e0e0e]/55 to-[#0e0e0e]/92" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 74% 26%, rgba(249,105,2,0.18), transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ boxShadow: "inset 0 0 220px 50px rgba(0,0,0,0.55)" }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 45%, #000 20%, transparent 80%)",
        }}
      />

      {/* the mark, oversized and quiet, bleeding off the right edge */}
      <motion.div
        aria-hidden
        style={{ y: markY, rotate: markRotate, opacity: fade }}
        className="pointer-events-none absolute -right-[12%] top-1/2 hidden w-[46%] -translate-y-1/2 md:block lg:-right-[8%] lg:w-[38%]"
      >
        <Mark className="w-full opacity-[0.07]" />
      </motion.div>

      <motion.div
        style={{ y: copyY, opacity: fade }}
        className="relative mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="ef-eyebrow"
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="ef-display mt-8 max-w-[19ch] text-[clamp(2.6rem,6.6vw,5.4rem)] text-white">
          {[...hero.title.split(" "), ...hero.titleAccent.split(" ")].map(
            (w, i, arr) => {
              const accent = i >= hero.title.split(" ").length;
              return (
                <span
                  key={`${w}-${i}`}
                  className="inline-block align-bottom"
                >
                  <motion.span
                    className={`inline-block ${
                      accent ? "text-[var(--ef-orange)]" : ""
                    }`}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.95,
                      delay: 0.18 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {w}
                    {i < arr.length - 1 ? " " : ""}
                  </motion.span>
                </span>
              );
            },
          )}
        </h1>

        <div className="mt-12 grid gap-10 border-t border-white/12 pt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="ef-lede max-w-[56ch]"
          >
            {hero.copy}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.66 }}
            className="flex flex-wrap items-start gap-4 lg:justify-end"
          >
            <a
              href="#services"
              className="ef-notch group relative overflow-hidden bg-[var(--ef-orange)] px-7 py-4 text-sm font-semibold text-white"
            >
              <span className="relative z-10">
                Explore capabilities <span aria-hidden>↗</span>
              </span>
              <span className="absolute inset-0 -translate-x-full bg-black/25 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="ef-notch border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-[var(--ef-orange)] hover:text-[var(--ef-orange)]"
            >
              Start a conversation
            </a>
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/12 pt-9 md:grid-cols-4"
        >
          {hero.kpis.map((x) => (
            <div key={x.k}>
              <dt className="ef-display text-[clamp(1.15rem,2vw,1.55rem)] text-[var(--ef-orange)]">
                {x.k}
              </dt>
              <dd className="mt-2 text-[0.8rem] leading-relaxed text-[#9b9b9b]">
                {x.v}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
