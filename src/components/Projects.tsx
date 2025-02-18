import React from 'react';
import { useContent } from '../utils';

import { motion } from 'framer-motion';

import telegram from '../assets/telegram.png';
import line from '../assets/line.png';
import i2max from '../assets/i2max.png';
import i2oc from '../assets/omnichat.png';
import hca from '../assets/hca.png';
import flyTrip from '../assets/fly-trip.png';

const imageMap: { [key: string]: string } = {
  'telegram.png': telegram,
  'line.png': line,
  'hca.png': hca,
  'i2max.png': i2max,
  'omnichat.png': i2oc,
  'fly-trip.png': flyTrip,
};

const Projects: React.FC = () => {
  const { PROJECTS, BLOCK_TITLE } = useContent();

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {BLOCK_TITLE.projects}
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div
              key={index}
              className="mb-8 flex flex-wrap lg:justify-center"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={imageMap[project.image]}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="mb-6 rounded"
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {project.title}
                </h6>
                <p className="mb-4 text-neutral-400">
                  {project.description}
                </p>
                {project.technologies.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {tech}
                    </span>
                  );
                })}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
