import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Experiences() {
  return (
    <div className="w-screen flex flex-col gap-24 items-center justify-center text-white mt-24">
      <h1 className="text-3xl font-Sansita" id="Experience">
        Experiences
      </h1>

      <div className="flex flex-col items-center">
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </div>
  );
}

function ExperienceItem() {
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
      className="w-1/3  mb-10"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 2,
        type: "spring",
      }}>
      <div ref={ref} className="flex items-center gap-3 font-Sansita text-xl">
        <div className="size-6 bg-white rounded-full"></div>
        <h1>Enterprise 1</h1>
      </div>
      <div className=" mt-4 flex ml-3 gap-4 ">
        <div className="line w-1 bg-white"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente impedit delectus temporibus ut molestiae, magnam sed, officia doloribus ea ad fugit voluptatum
          consequatur dolores sunt! Maiores qui architecto impedit voluptatibus.
        </p>
      </div>
    </motion.div>
  );
}
