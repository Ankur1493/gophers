"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function HeadlineHighlight() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl  md:text-4xl  font-bold text-white  leading-relaxed lg:leading-snug text-center "
      >
        <Highlight className="text-layer">
          from anywhere in the world
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
