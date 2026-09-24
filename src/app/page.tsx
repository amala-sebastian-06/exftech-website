import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Mro } from "@/components/Mro";
import { Support } from "@/components/Support";
import { Distribution } from "@/components/Distribution";
import { Engineering } from "@/components/Engineering";
import { Process } from "@/components/Process";
import { Industries } from "@/components/Industries";
import { Careers } from "@/components/Careers";
import { Contact, Footer } from "@/components/Contact";
import { TeamPhoto } from "@/components/TeamPhoto";
import { marqueeItems } from "@/data/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee items={marqueeItems} />
        <Services />
        <Mro />
        <Support />
        <Distribution />
        <Engineering />
        <Process />
        <Industries />
        <Marquee
          tone="ink"
          reverse
          items={["Engineering", "Technology", "Progress"]}
        />
        <Careers />
        <Contact />
        <TeamPhoto />
      </main>
      <Footer />
    </>
  );
}
