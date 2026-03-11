import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Line from "./components/line/Line";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contacts from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Testimonials from "./testmonial/Testmonial";
import Projects from "./projects/Projects";
import FAQ from "./FAQ/Faq";
import Resume from "./resume/Resume";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center flex-col h-fit bg-primary p-3">
      
      <Navbar />

      <section id="home" className="w-full scroll-mt-24">
        <Hero />
      </section>

      <Line />

      <section id="about" className="w-full scroll-mt-[-50px]">
        <About />
      </section>
      {/* <section id="projects" className="w-full scroll-mt-[-50px]">
        <Projects />
      </section> */}

      <section id="skills" className="w-full scroll-mt-4">
        <Skills />
      </section>
      <section id="" className="w-full scroll-mt-4">
        <Testimonials />
      </section>
      <section id="" className="w-full scroll-mt-[-17px]">
        <FAQ />
      </section>

      <section id="contact" className="w-full scroll-mt-[-17px]">
        <Contacts />
      </section>
      <section id="" className="w-full scroll-mb-[-80]">
        <Resume />
      </section>

      <Footer />
      
    </div>
  );
}
