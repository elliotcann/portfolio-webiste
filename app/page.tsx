import Sidebar from "@/app/components/layout/Sidebar";
import CursorGlow from "@/app/components/ui/CursorGlow";
import Footer from "@/app/components/layout/Footer";
import ScrollTop from "@/app/components/layout/ScrollTop";
import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Portfolio from "@/app/components/sections/Portfolio";
import Skills from "@/app/components/sections/Skills";
import Resume from "@/app/components/sections/Resume";
import Contact from "@/app/components/sections/Contact";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Sidebar />
      <main id="main-content" className="xl:pl-[64px]">
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
