import { content } from "../content/content";

export const getAllProjectIds = (): string[] => {
  let slugs = [""];
  content.projects.forEach((project: any) => {
    slugs.push(project.slug);
  });

  return slugs;
};
