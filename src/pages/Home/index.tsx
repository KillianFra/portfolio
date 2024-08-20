import Contact from "../../Components/Contact";
import Experiences from "../../Components/Experiences";
import Hero from "../../Components/Hero";
import Navbar from "../../Components/Navbar";
import Projects from "../../Components/Projects";
import TechList from "../../Components/TechList";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechList />
      <Experiences />
      <Projects />
      <Contact />
    </>
  );
}
