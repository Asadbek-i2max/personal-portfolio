export const HERO_CONTENT: string =
  "I'm Alejandro Herrera, a passionate Front-End Developer who transforms ideas into visually stunning, interactive, and user-friendly experiences. With a deep love for clean UI, pixel-perfect designs, and seamless functionality, I specialize in building modern web applications that don't just look great—they feel great to use. Let's craft something amazing together. 🚀";

export const ABOUT_CONTENT: string =
  'Hi, I’m Jorge Cortez, a Front-End & Salesforce Developer passionate about building intuitive, scalable, and high-performance applications. My journey in development has been a mix of crafting modern web experiences and diving deep into the Salesforce ecosystem, blending the best of both worlds. On the front-end, I specialize in ReactJS, TypeScript, and modern UI frameworks to create fast, user-friendly, and visually appealing interfaces.';

export const EXPERIENCES: Array<{
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}> = [
  {
    year: '2022 - Present',
    role: 'Full-stack developer (Salesforce)',
    company: 'I2max South Korea',
    description: `Responsibilities: Develop and customize Salesforce applications using Apex, Lightning Web Components (LWC -> Html, Css, Js), Visualforce and declarative tools. Create and optimize REST API integrations between Salesforce and external systems. `,
    technologies: [
      'Apex',
      'LWC',
      'Visualforce',
      'RestApi',
      'Javascript',
      'CSS',
      'Tailwind',
    ],
  },
];

export const PROJECTS: Array<{
  title: string;
  image: string;
  description: string;
  technologies: string[];
}> = [
  {
    title: 'Project 1',
    image: 'Image',
    description: 'Project description',
    technologies: ['1', '2', '3'],
  },
];

export const CONTACT: {
  address: string;
  phoneNo: string;
  email: string;
} = {
  address: '767 Fifth Avenue, New York, NY 10153 ',
  phoneNo: '+998 99 889 01 33',
  email: 'asadkhojimatov@gmail.com',
};
