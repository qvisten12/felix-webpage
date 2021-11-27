import React from "react";

import ProjectCard from "./ProjectCard";
import styles from "./ProjectList.module.css";
import { content } from "../../content/content";

const ProjectList = () => {
  const works = content.works;
  return (
    <>
      <div className="mt-24 container max-w-5xl mx-auto px-10 mb-10 md:mb-14">
        <h1 className="text-4xl font-semibold ">Latest Projects</h1>
      </div>
      <div className={styles.workContainer}>
        <div>
          {works && works.map((p, i) => <ProjectCard key={p.slug} {...p} />)}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
