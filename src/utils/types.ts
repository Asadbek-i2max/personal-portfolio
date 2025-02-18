export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

export interface Contact {
  address: string;
  phoneNo: string;
  email: string;
}

export interface BlockTitle {
  about: string;
  tech: string;
  skills: string;
  experience: string;
  projects: string;
  contact: string;
}

export interface Content {
  HERO_CONTENT: string;
  ABOUT_CONTENT: string;
  EXPERIENCES: Experience[];
  PROJECTS: Project[];
  CONTACT: Contact;
  BLOCK_TITLE: BlockTitle;
}
