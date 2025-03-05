import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";

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
    <div className="w-full flex flex-col mt-12 items-center text-white font-Sansita px-4">
      <h2 className="text-3xl" id="Projects">Some Projects. . .</h2>
      <div className="cardContainer flex flex-wrap justify-center gap-6 md:gap-10 mt-12 md:mt-20 mb-10 w-full max-w-7xl">
        {projects.map((project, index) => {
          return <Card name={project.name} description={project.description} index={index} key={index} />;
        })}
      </div>
      <motion.div 
        className="mt-8 p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-start gap-6 mb-6">
          <img 
            src="https://github.com/KillianFra.png" 
            alt="GitHub Profile" 
            className="w-24 h-24 rounded-full border-2 border-white/20 hover:border-white/40 transition-all duration-300"
          />
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">KillianFra</h3>
            <p className="text-gray-400 text-lg">Full Stack Developer</p>
            <div className="flex items-center gap-2 mt-3">
              <FaGithub className="text-gray-400 text-xl" />
              <span className="text-gray-300 text-lg">GitHub Profile</span>
            </div>
          </div>
        </div>
        <div className="text-gray-300 text-base space-y-2 mb-6 pl-2">
          <p className="flex items-center gap-3">📍 <span className="text-gray-200">Based in Toulouse</span></p>
          <p className="flex items-center gap-3">🎂 <span className="text-gray-200">21 years old</span></p>
          <p className="flex items-center gap-3">🎓 <span className="text-gray-200">B3 Student at Ynov Toulouse Campus</span></p>
        </div>
        <a 
          href="https://github.com/KillianFra/" 
          className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 hover:from-blue-500/30 hover:via-purple-500/30 hover:to-pink-500/30 border border-white/10 transition-all duration-300 hover:scale-105 hover:translate-y-[-2px] relative overflow-hidden group animate-gradient bg-[length:200%_200%] text-lg"
        >
          <span className="text-white">View Profile</span>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
      </motion.div>
    </div>
  );
}

function Card({ name, description, index }: CardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={`group bg-white w-full md:min-w-64 md:w-64 h-64 md:h-96 flex items-end bg-center bg-cover bg-no-repeat text-white rounded-lg overflow-hidden relative ${isInView ? 'grayscale-0' : 'grayscale'} transition-[filter] duration-1000`}
      style={{ backgroundImage: `url('${import.meta.env.BASE_URL}/img/image${index}.jpg')` }}
      variants={{
        hidden: { scale: 0.95, opacity: 0.5 },
        visible: { scale: 1, opacity: 1 }
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-70 transition-opacity duration-300"></div>
      <div className="relative w-full p-4 md:p-6 transform group-hover:translate-y-[-8px] transition-transform duration-300">
        <h2 className="text-2xl font-bold mb-2 group-hover:text-white/90">{name}</h2>
        <p className="text-gray-200 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 group-hover:text-white/80">{description}</p>
      </div>
    </motion.div>
  );
}
