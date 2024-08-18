import { FaReact, FaJs, FaCss3Alt, FaPython } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiVite } from "react-icons/si";

export default function TechList() {
  return (
    <div className="w-screen flex items-center flex-col gap-5 text-white font-Sansita mt-52">
      <h1 className="text-3xl">Some Techs I Am Using</h1>
      <CarouselTech />
    </div>
  );
}

function CarouselTech() {
  const TechList = [
    { component: FaReact, color: "text-blue-500" },
    { component: FaJs, color: "text-yellow-400" },
    { component: SiVite, color: "text-green-400" },
    { component: FaCss3Alt, color: "text-green-400" },
    { component: FaPython, color: "text-green-400" },
    { component: RiNextjsFill, color: "text-green-400" },
    { component: RiTailwindCssFill, color: "text-green-400" },
    { component: SiTypescript, color: "text-green-400" },
  ];

  return (
    <div className="scroller flex justify-center w-screen gap-10">
      <div className="scroller flex gap-8 translate-x-full">
        {TechList.map((tech, index) => {
          const IconComponent = tech.component;
          return <IconComponent key={index} size={60} className={`text-slate-400 hover:${tech.color} duration-200`} />;
        })}
      </div>
    </div>
  );
}
