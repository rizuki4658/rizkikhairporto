export interface Socmed {
  name: string | null;
  title: string | null;
  target: string | null;
  link: string | null;
}

export interface About {
  title: string | null;
  description: string | null;
}

export interface Skill {
  name: string;
  value: number;
  icon?: string;
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
