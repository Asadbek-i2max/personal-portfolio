import React from 'react';

import { useContent } from '../utils';
import ABOUT_IMAGE from '../assets/about.jpg';

import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { ABOUT_CONTENT, BLOCK_TITLE } = useContent();

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        {BLOCK_TITLE.about}
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl object-cover"
              src={ABOUT_IMAGE}
              alt="about"
            ></img>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_CONTENT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
