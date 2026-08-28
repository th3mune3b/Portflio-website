import Head from "./components/header";
import HeroSection from "./hero-section";
import About from "./components/about";
import Expertise from "./components/expertise";
import Projects from "./components/project";
import Contact from "./components/contact";
import Footer from "./footer";
import IntroLoader from "./components/intro-loader";
export default function Home() {
  return (
    <div>
      <IntroLoader />
      <Head />
      <HeroSection />
      <About />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
