export interface Socmed {
  name: string | null;
  title: string | null;
  target: string | null;
  link: string | null;
  text?: string | null;
}

export interface About {
  title: string | null;
  description: string | null;
}

export interface Skill {
  name: string;
  value: number;
  icon?: string;
  customClass?: string;
}

export interface Skills {
  skills?: Skill[]
}

export interface ExperienceDate {
  start: string | null;
  end: string | null;
}
export interface Experience {
  name: string;
  date: ExperienceDate;
  link: string;
  image: string;
  description?: string
}

export interface Experiences {
  experiences?: Experience[]
}

export interface Work {
  name: string;
  link: string;
  image: string;
  description: string;
}

export interface Works{
  works: Work[]
}

export interface Visitor {
  name: string;
  message: string;
  email: string
}

export interface User {
  email: string;
  username: string;
  password: string;
  about: About;
  works: Work[];
  skills: Skill[];
  experiences: Experience[];
  socmed: Socmed[];
  resume: {
    summary: string;
    skills: {
      frontend: string[];
      toolsOthers: string[];
      languages: string[];
    };
    experiences: {
      name: string;
      role: string;
      body: string;
      desc: string[];
    }[];
    education: {
      name: string;
      desc: string;
    };
  }
}

export interface LayoutType {
  statusCode?: number;
  children?: any
}

export interface PortofolioState {
  start: number;
  selected: number;
  limit: number;
  isActive: boolean | string
}