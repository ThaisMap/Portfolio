export interface IProject {
  name: string;
  description: string;
  technologies: string;
  images: Array<string>;
  page: string;
  link?: string;
}

export interface ISkill {
  label: string;
  level: number;
}
