import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Proprietor from "@/components/Proprietor";
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
        <title>{site.company.name} - Safe , Reliable & On Time</title>
        <meta name="description" content="ZSM Transport Agency | Covered van logistics across Bangladesh." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${site.company.name} - ${site.company.slogan}`} />
        <meta property="og:description" content="Reliable covered van transport across Bangladesh." />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <Proprietor />
        <Process />
        <Testimonials />
        {/* <Clients /> */}
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
