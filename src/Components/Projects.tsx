import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { LuArrowRight } from "react-icons/lu";

interface CardProps {
  name: string;
  description: string;
  index: number;
}

export default function Projects() {
  const projects = [
    { name: "Dofudle", description: "A Daily dofus game to guess characters" },
    { name: "Uber Eats Clone", description: "A working backend / frontend replicate of Uber eats" },
    { name: "WatchScrapper", description: "A Daily chrono24’s scrapper to retrieve watches’s Price" },
    { name: "Chess AI", description: "Chess Game with AI Opponent" },
  ];

  return (
    <div className="w-full flex flex-col mt-12 items-center text-white font-Sansita">
      <h2 className="text-3xl">Some Projects. . .</h2>
      <div className="cardContainer flex flex-wrap justify-center gap-10 mt-20 mb-20">
        {projects.map((project, index) => {
          return <Card name={project.name} description={project.description} index={index} />;
        })}
      </div>
      <div className="flex items-center gap-4">
        <h3 className="text-lg text-gray-300">Need to see more ?</h3>
        <LuArrowRight size={20} />
        <a href="https://github.com/KillianFra/" className="font-bold font-Sansita text-gray-300 underline underline-offset-4 hover:translate-y-[-3px] duration-200">@KillianFra</a>
      </div>
    </div>
  );
}

function Card({ name, description, index }: CardProps) {
  const controls = useAnimation();

  useEffect(() => {
    // Animation will only start when the component is hovered over
    controls.start("hidden");
  }, [controls]);

  return (
    <motion.div
      className={`bg-white min-w-64 w-64 min-h-96 flex items-end bg-center bg-cover bg-no-repeat text-white`}
      style={{ backgroundImage: `url('/img/image${index}.jpg')` }}
      variants={{
        hidden: { minWidth: "16rem", translateY: 0, filter: "grayscale(100%)" },
        stretch: { minWidth: "23rem", translateY: -6, filter: "grayscale(0%)" },
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.8,
        type: "spring",
      }}
      onMouseEnter={() => {
        controls.start("stretch");
      }}
      onMouseLeave={() => {
        controls.start("hidden");
      }}
    >
      <div className="bg-gradient-to-t from-black/50 to-black/0 w-full h-24 flex flex-col">
        <h2 className=" mx-2 text-xl">{name}</h2>
        <p className="mx-2 truncate overflow-hidden hover:text-clip">{description}</p>
      </div>
    </motion.div>
  );
}
