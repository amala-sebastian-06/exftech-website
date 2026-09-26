import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { AboutUs } from "@/components/AboutUs";
import { Leadership } from "@/components/Leadership";
import { AboutTeam } from "@/components/AboutTeam";
import { TeamGrid } from "@/components/TeamGrid";
import { Careers } from "@/components/Careers";
import { Footer } from "@/components/Contact";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About us | Excelfast Advanced Technologies",
  description:
    "Who we are: the engineering, MRO and product development team behind Excelfast Advanced Technologies, Pithampur.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-[74px]">
        <div className="mx-auto max-w-[1280px] px-5 pt-14 sm:px-8">
          <Link
            href="/"
            className="font-[family-name:var(--font-mono-ef)] text-[0.65rem] uppercase tracking-[0.22em] text-[#7d7d7d] transition-colors hover:text-[var(--ef-orange)]"
          >
            ← Back to home
          </Link>
        </div>

        <AboutUs />
        <Leadership />
        <AboutTeam />
        <TeamGrid
          members={team}
          eyebrow="The team"
          title="Engineers, technicians and the people who answer the phone."
        />
        <Careers eyebrow="Careers" title="Become a part of Excelfast." />
      </main>
      <Footer />
    </>
  );
}
