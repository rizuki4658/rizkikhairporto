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