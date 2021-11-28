import React from "react";

import ProjectCard from "./ProjectCard";
import { content } from "../../content/content";

const ProjectList = () => {
  const projects = content.projects;
  return (
    <>
      <div className="mt-14 md:mt-24 container max-w-5xl mx-auto px-10 mb-10 md:mb-14">
        <h1 className="text-4xl font-semibold ">Latest Projects</h1>
      </div>
      <div className="mb-20 px-4 lg:px-0">
        <div>
          {projects &&
            projects.map((p, i) => <ProjectCard key={p.slug} {...p} />)}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
