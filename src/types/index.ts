export interface Project {
  title: string;
  image: string;
  description: string;
  time: string;
  stack: string;
  direction?: "row" | "row-reverse";
  link: string;
  ghLink: string;
}
