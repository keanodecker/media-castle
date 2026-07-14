import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { Services } from "@/components/services";
import { References } from "@/components/references";
import { Why } from "@/components/why";
import { Faq } from "@/components/faq";
import { Cta } from "@/components/cta";
import { SiteFooter } from "@/components/site-footer";
import { RevealObserver } from "@/components/reveal-observer";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <SiteHeader />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <References />
        <Why />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
