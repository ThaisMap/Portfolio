export interface IProject {
  name: string;
  description: string;
  technologies: string;
  images: Array<string>;
  page: string;
  link?: string;
}

export interface ISkill {
  tech: string;
  perc: number;
  level: string;
}
