import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Fleet from "@/components/Fleet";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import site from "@/data/site.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>{site.company.name} — {site.company.slogan}</title>
        <meta name="description" content="ZSM Transport Agency — reliable covered van & truck logistics support across Bangladesh. Carrying contractor based in Siddhirganj, Narayanganj." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${site.company.name} — ${site.company.slogan}`} />
        <meta property="og:description" content="Reliable transport across Bangladesh." />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Fleet />
        <About />
        <Process />
        <Testimonials />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
