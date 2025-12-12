import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Services } from "@/components/landing/services";
import { Partnership } from "@/components/landing/partnership";
import { Brands } from "@/components/landing/brands";
import { Partners } from "@/components/landing/Partners";
import { CaseStudies } from "@/components/landing/case-studies";
//import { FAQ } from "@/components/landing/faq";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";
import { Schedule } from "@/components/landing/times";
import { OrgChart } from "@/components/landing/estructura";
import { Team } from "@/components/landing/team";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <OrgChart />
        <Team />
        <Services />
        <Partnership />
        <Brands />
        <Partners />
        <CaseStudies />
        {/* <FAQ /> */}
        <Contact />
        <Schedule />
      </main>
      <Footer />
    </div>
  );
}
