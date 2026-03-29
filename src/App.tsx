import { Navbar } from "@/components/layout/Navbar";
import { Preloader } from "@/components/layout/Preloader";
import { ElasticCursor } from "@/components/ui/ElasticCursor";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Features } from "@/components/sections/Features";
import { Tech } from "@/components/sections/Tech";
import { Projects } from "@/components/sections/Projects";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { Stats } from "@/components/sections/Stats";
import { Gallery } from "@/components/sections/Gallery";
import { FAQ } from "@/components/sections/FAQ";
import { Story } from "@/components/sections/Story";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { RoundedCorners } from "@/components/ui/RoundedCorners";
import StarsCanvas from "@/components/canvas/Stars";

const App = () => {
  return (
    <Preloader>
      <div className="relative min-h-screen w-screen overflow-x-hidden bg-primary">
        <ElasticCursor />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Features />
          <div className="relative">
            <Experience />
            <div className="absolute inset-0 z-[-1]">
              <StarsCanvas />
            </div>
          </div>
          <Tech />
          <Stats />
          <Projects />
          <Gallery />
          <Testimonials />
          <Team />
          <Pricing />
          <Story />
          <FAQ />
          <Contact />
        </main>

        <Footer />
        <RoundedCorners />
      </div>
    </Preloader>
  );
};

export default App;
