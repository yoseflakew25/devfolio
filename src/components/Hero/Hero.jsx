import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA","#84e2bf"];

const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-[#0F172A] px-4 pb-48 pt-72 text-gray-200 -mt-64"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block text-[#64FFDA] px-3 py-1.5 text-md">
          Hi, my name is
        </span>
        <h1 className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
          Yosef Lake<span className="text-[#64FFDA]">w</span>.
          <br />
          I am a{" "}
          <span className="text-[#64FFDA]">Fullstack Engineer </span>
          <br /> &{" "}
          <span className="text-[#64FFDA]">UI / UX Designer</span>.
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-md md:leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
          distinctio eum impedit nihil ipsum modi.
        </p>
        <a href="#aboutme">

        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative mt-4 flex w-fit items-center gap-1.5 rounded-lg px-12 py-4 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
          Get Started 
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
          </a>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <React.Suspense fallback={null}>
            <Stars radius={50} count={2500} factor={4} fade speed={2} />
          </React.Suspense>
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Hero;
