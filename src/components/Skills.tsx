import React from 'react';

const skills: string[] = [
  'HTML5, CSS3',
  'Javascript',
  'Bootstrap',
  'TailwindCss',
  'SASS',
  'SCSS',
  'Typescript',
  'Apex',
  'LWC',
  'RestApi',
  'ReactJS',
  'MySQL',
  'SOQL/SOSL',
  'Salesforce lightning',
  'Zustand',
  'Visualforce',
];

const Skills: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <h1 className="my-20 text-center text-4xl">Skills</h1>
      <div className="mb-8 flex flex-wrap gap-4 lg:justify-center">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 text-lg font-medium bg-neutral-800 text-white rounded-lg shadow-lg hover:bg-neutral-700 transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
