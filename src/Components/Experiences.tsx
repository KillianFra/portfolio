import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

interface experienceProps {
  name: string;
  missions: string[];
  link: string;
}

export default function Experiences() {
  const experiences: experienceProps[] = [
    {
      name: "Fornier Grospaud Syneris",
      missions: ["Création de scripts Pentest en Bash", "Rapports et automatisation des intrusions", "Développement Applicatif d’outils de détection de menaces"],
      link: "https://www.fgsynerys.fr/",
    },
    {
      name: "HACKTHEBOX",
      missions: ["Compétences améliorées en reconnaissance", "Détection et rapport de menaces", "Maîtrise des outils de Pentest"],
      link: "https://app.hackthebox.com/users/543660",
    },
    {
      name: "0xB MASTER Tryhackme",
      missions: ["reconnaissance de menaces", "Détection des menaces et rapports", "Maîtrise de la gestion des outils de Pentest"],
      link: "https://tryhackme.com/p/SunkenNunu",
    },
  ];

  return (
    <div className="w-screen flex flex-col gap-24 items-center justify-center text-white mt-24" id="Experiences">
      <h1 className="text-3xl font-Sansita">Experiences</h1>

      <div className="flex flex-col items-center">
        {experiences.map((exp) => {
          return <ExperienceItem name={exp.name} missions={exp.missions} link={exp.link}></ExperienceItem>;
        })}
      </div>
    </div>
  );
}

function ExperienceItem({ name, missions, link }: experienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      className="w-full mb-10 flex flex-col items-center"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 2,
        type: "spring",
      }}
    >
      <div ref={ref} className="flex items-center justify-center gap-3 font-Sansita text-xl">
        <div className="size-4 min-w-4 min-h-4 bg-white rounded-full"></div>
        <h1 className="font-Sansita uppercase">{name}</h1>
        <a href={link}>
          <MdOutlineArrowOutward className="hover:translate-y-[-6px] duration-300 hover:cursor-pointer" />
        </a>
      </div>
      <div className=" mt-4 flex ml-3 gap-4 min-w-full">
        <div className="line min-w-0.5 bg-white mr-2"></div>
        <div className="flex gap-3 flex-col min-w-full">
          {missions.map((mission, index) => {
            return <li key={index}>{mission}</li>;
          })}
        </div>
      </div>
    </motion.div>
  );
}
