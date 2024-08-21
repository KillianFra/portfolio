import { FaReact, FaJs, FaCss3Alt, FaPython, FaAngular } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiVite, SiFramer, SiReactquery, SiShadcnui } from "react-icons/si";

import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";

export default function TechList() {
  return (
    <div className="w-screen flex items-center flex-col gap-5 text-white font-Sansita mt-52">
      <h1 className="text-3xl">Some Techs I Am Using</h1>
      <CarouselTech />
    </div>
  );
}

function CarouselTech() {
  
  const FAST_DURATION = 20;  
  const SLOW_DURATION = 50;
  const [duration, setDuration] = useState(FAST_DURATION)

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  
  
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 17;
    
    if(mustFinish){
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
          onComplete: () => {
            setMustFinish(false);
            setRerender(!rerender);
          }
        })
      }else{
        controls = animate(xTranslation, [0, finalPosition], {
          ease: "linear",
          duration: duration,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0,
        });
      }
      
      return controls?.stop;
    }, [xTranslation, width, duration, rerender]);
    
    const TechList = [
      { component: FaReact, style: "hover:text-blue-300", link: "https://fr.react.dev/"},
      { component: FaAngular, style: "hover:text-red-400", link: "https://angular.dev/" },
      { component: RiTailwindCssFill, style: "hover:text-blue-400", link: "https://tailwindcss.com/"},
      { component: FaJs, style: "hover:text-yellow-500", link: "https://developer.mozilla.org/fr/docs/Web/JavaScript"},
      { component: SiVite, style: "hover:text-yellow-400", link: "https://vitejs.dev/" },
      { component: FaCss3Alt, style: "hover:text-orange-400", link: "" },
      { component: FaPython, style: "hover:text-yellow-400", link: "" },
      { component: SiReactquery, style: "hover:text-red-300", link: "https://tanstack.com/query/v3" },
      { component: RiNextjsFill, style: "hover:text-white", link: "https://nextjs.org/" },
      { component: SiTypescript, style: "hover:text-blue-400", link: "https://www.typescriptlang.org/" },
      { component: SiFramer, style: "hover:text-white", link: "https://www.framer.com/motion/" },
      { component: SiShadcnui, style: "hover:text-white", link: "https://ui.shadcn.com/" },
    ];
    return (
      <>
      <div className="flex justify-start items-center w-2/3 max-w-[50%] h-20 overflow-hidden relative">
        <div className="w-12 h-24 bg-gradient-to-r from-ct-black/100 z-10 absolute"></div>
          <motion.div className="flex justify-start gap-10" ref={ref} style={{ x: xTranslation }}>
            {[...TechList, ...TechList].map((tech, index) => {
              const IconComponent = tech.component;
              return <IconComponent key={index} className={`text-6xl text-slate-400 ${tech.style} hover:scale-110 duration-200 hover:cursor-pointer`} 
              onMouseEnter={() => {
                setMustFinish(true);
                setDuration(SLOW_DURATION);
              }}
              
              onMouseLeave={() => {
                setMustFinish(true);
                setDuration(FAST_DURATION);
              }}

              onClick={() => {
                if (!tech.link) return
                window.location.href = tech.link}}
              />;
            })}
          </motion.div>
      <div className="w-12 h-24 bg-gradient-to-l from-ct-black/100 z-10 absolute right-0"></div>
      </div>
    </>
  );
}
