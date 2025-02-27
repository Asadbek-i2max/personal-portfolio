import React from 'react';

import { motion } from 'framer-motion';
import { useContent } from '../utils';

const skills: string[] = [
  'HTML5, CSS3',
  'Javascript',
  'Bootstrap',
  'TailwindCss',
  'SASS',
  'SCSS',
  'NodeJs',
  'Zustand',
  'Apex',
  'LWC',
  'RestApi',
  'ReactJS',
  'MySQL',
  'SOQL/SOSL',
  'Salesforce lightning',
  'Visualforce',
  'Salesforce Service/Experience clouds',
  'Git/Github',
];

const Skills: React.FC = () => {
  const { BLOCK_TITLE } = useContent();
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        {BLOCK_TITLE.skills}
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="mb-8 flex flex-wrap gap-4 lg:justify-center"
      >
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 text-lg font-medium bg-neutral-800 text-white rounded-lg shadow-lg hover:bg-neutral-700 transition-all"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
