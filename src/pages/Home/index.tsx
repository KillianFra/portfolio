import Hero from "../../Components/Hero";
import Navbar from "../../Components/Navbar";
import TechList from "../../Components/TechList";

export default function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <Hero />
      <TechList />
    </div>
  );
}
