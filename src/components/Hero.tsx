import { useContent } from '../utils';
import React from 'react';
import PROFILE from '../assets/profile.jpeg';

import { motion } from 'framer-motion';

const container = (
  delay: number
): {
  hidden: { x: number; opacity: number };
  visible: {
    x: number;
    opacity: number;
    transition: { duration: number; delay: number };
  };
} => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const Hero: React.FC = () => {
  const { NAME } = useContent();

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              {NAME}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Web Developer
            </motion.span>
            {/* <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p> */}
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={PROFILE}
              alt="Profile picture"
              className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
