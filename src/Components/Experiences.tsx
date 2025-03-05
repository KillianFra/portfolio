import { motion, useAnimation, useInView } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";
import { LiaLinkedin } from "react-icons/lia";
import { MdOutlineArrowOutward } from "react-icons/md";

interface experienceProps {
  name: string;
  missions: string[];
  link: string;
  index: number;
}

interface ExperienceItemProps {
  name: string;
  missions: string[];
  link: string;
}

export default function Experiences() {
  const experiences: ExperienceItemProps[] = [
    {
      name: "Adveez",
      missions: ["Développement Frontend", "Correction de bugs / Nouvelles features", "Alternance React / Express"],
      link: "https://adveez.com/fr/",
    },
    {
      name: "Fornier Grospaud Syneris",
      missions: ["Création de scripts Pentest en Bash", "Rapports et automatisation des intrusions", "Développement Applicatif d'outils de détection de menaces"],
      link: "https://www.fgsynerys.fr/",
    },
    {
      name: "HACKTHEBOX",
      missions: ["Compétences améliorées en reconnaissance", "Détection et rapport de menaces", "Développement d'architecture réseaux"],
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
      <div className="flex gap-3 items-center">
        <h1 className="text-3xl font-Sansita">Experiences</h1>
        <a href="https://www.linkedin.com/in/killian-fravalo/" className="group">
          <LiaLinkedin className="text-3xl text-blue-500 mt-2 filter brightness-110 hover:brightness-150 transition-transform duration-300 transform hover:-translate-y-1" />
        </a>
      </div>

      <div className="flex flex-col items-center w-full max-w-3xl px-4">
        {experiences.map((exp, index) => {
          return <ExperienceItem key={index} name={exp.name} missions={exp.missions} link={exp.link} index={index} />;
        })}
      </div>
    </div>
  );
}

function ExperienceItem({ name, missions, link, index }: experienceProps) {
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
      className="w-full mb-10 flex flex-col items-center relative"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 1.5,
        type: "spring",
        bounce: 0.3
      }}
    >
      <div ref={ref} className={`w-full p-6 rounded-xl ${index === 0 ? 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm shadow-lg border border-white/10' : 'bg-white/5'}`}>
        <div className="flex items-center justify-between gap-3 font-Sansita text-xl mb-4">
          <div className="flex items-center gap-3">
            <div className="size-3 min-w-3 min-h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-glow"></div>
            <h1 className="font-Sansita uppercase tracking-wider">{name}</h1>
          </div>
          <a href={link} className="group">
            <MdOutlineArrowOutward className="text-2xl transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
          </a>
        </div>
        <div className="pl-6 border-l-2 border-white/10">
          <div className="space-y-2">
            {missions.map((mission, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {mission}
              </motion.li>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
