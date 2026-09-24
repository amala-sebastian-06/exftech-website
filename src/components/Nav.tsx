"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Wordmark } from "./Logo";

const links = [
  { href: "/about", label: "About us" },
  { href: "/#services", label: "Services" },
  { href: "/#mro", label: "MRO" },
  { href: "/#distribution", label: "Distribution" },
  { href: "/#industries", label: "Industries" },
  { href: "/#careers", label: "Careers" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.div
        style={{ scaleX: bar }}
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-[var(--ef-orange)]"
      />

      <header
        className={`fixed inset-x-0 top-0 z-[65] transition-all duration-500 ${
          solid
            ? "border-b border-white/10 bg-[#0e0e0e]/85 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[74px] max-w-[1280px] items-center justify-between px-5 sm:px-8">
          <Link href="/" className="shrink-0" aria-label="ExcelFast home">
            <Wordmark />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative px-3.5 py-2 text-[0.82rem] font-medium text-[#c4c4c4] transition-colors hover:text-white"
              >
                {l.label}
                <span className="absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-[var(--ef-orange)] transition-transform duration-400 group-hover:scale-x-100" />
              </a>
            ))}
            <Link
              href="/#contact"
              className="ef-notch ml-3 bg-[var(--ef-orange)] px-5 py-2.5 text-[0.82rem] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              Talk to us →
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="relative z-[80] grid h-10 w-10 place-items-center lg:hidden"
          >
            <span className="relative block h-[14px] w-6">
              <span
                className={`absolute left-0 h-[2px] w-full bg-white transition-all duration-300 ${
                  open ? "top-[6px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-full bg-white transition-all duration-300 ${
                  open ? "top-[6px] -rotate-45" : "top-[12px]"
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[66] flex flex-col justify-center gap-2 bg-[#0e0e0e] px-8 lg:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.06, duration: 0.5 }}
                className="ef-display border-b border-white/10 py-4 text-[2rem] text-white"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
