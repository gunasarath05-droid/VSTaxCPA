import Hero from "@/sections/Home/Hero";
import Marquee from "@/sections/Home/Marquee";
import About from "@/sections/Home/about";
import Services from "@/sections/Home/services";
import Process from "@/sections/Home/Process";
import WhyChooseUs from "@/sections/Home/WhyChooseUs";
import Pricing from "@/sections/Home/Pricing";
import Projects from "@/sections/Home/Projects";
import Testimonials from "@/sections/Home/Testimonials";
import Blog from "@/sections/Home/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      {/* <Pricing /> */}
      <Projects />
      <Blog />
    </>
  );
}
