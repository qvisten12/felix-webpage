import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  const works = [
    {
      index: 0,
      slug: 1,
      document: {
        data: {
          title: "Covid Tracker",
          date: 2021,
          services: ["React", "Javascript", "HTML"],
          tech: ["React", "Javascript", "HTML"],
          featuredImg:
            "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQOF3RmBoWxRTV6qRynPm1SQYD8hzwhDm_gey_-D2ig16qYzHwk1gG65XzeIY3ddZQBfjtPFQDLumt4tC6M4rs",
        },
      },
    },
  ];

  return (
    <div
      className="flex flex-col  md:flex-row
        mt-24 container max-w-5xl mx-auto px-10 mb-24"
    >
      <h1 className="text-4xl font-semibold mb-5">Projects</h1>
      <div>
        {works &&
          works.map((p, i) => <ProjectCard key={p.slug} index={i} {...p} />)}
      </div>
    </div>
  );
};

export default Projects;
