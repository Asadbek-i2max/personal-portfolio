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

export interface Content {
  HERO_CONTENT: string;
  ABOUT_CONTENT: string;
  EXPERIENCES: Experience[];
  PROJECTS: Project[];
  CONTACT: Contact;
}
