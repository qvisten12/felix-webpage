import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { content } from "../../content/content";
import styles from "./Project.module.css";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import {
  SiNextdotjs,
  SiSass,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";
import { title } from "process";
import { getAllProjectIds } from "../../lib/projects";

interface data {
  title: string;
  date: number;
  services: string[];
  tech: string[];
  featuredImg: string;
  infoImages: string[];
  info: string;
  link: string;
  codelink: string;
}

interface project {
  index: number;
  slug: number;
  data: data;
}

interface Props {
  projects: any;
}

const Post = ({ projects }: Props) => {
  const route = useRouter();
  const { pid } = route.query;

  const [project, setProject] = useState<project>({
    index: 0,
    slug: 0,
    data: {
      title: "",
      date: 0,
      services: [""],
      tech: [""],
      featuredImg: "",
      infoImages: [""],
      info: "",
      link: "",
      codelink: "",
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    projects = JSON.parse(projects);
    const filteredProjects = projects.filter(
      (project: project) => project.slug === Number(pid)
    );
    setProject(filteredProjects[0]);
    setLoading(false);
  }, []);

  return (
    <div
      className="flex flex-col justify-center md:flex-row
      mt-28  md:mt-40 container max-w-5xl mx-auto px-10 mb-10 md:mb-20"
    >
      <Head>
        <title>Felix Ljungqvist - {project.data.title}</title>
      </Head>
      {loading ? (
        "loading..."
      ) : (
        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold text-gray-800">
            {project.data.title}
          </h1>

          <div className="flex flex-col md:flex-row w-full justify-between mt-14 mb-10">
            <div className="flex flex-col w-full max-w-2xl mb-10 md:mb-0">
              <p className="text-xl font-medium text-gray-600">
                {project.data.info}
              </p>
              <div className="mt-14 flex justify-between">
                <a
                  href={project.data.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-blue-500 font-bold text-xl cursor-pointer
                hover:text-blue-300 w-38"
                >
                  Visit website{" "}
                  <BsArrowRight size={24} className="inline-block" />
                </a>
                <a
                  href={project.data.codelink}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-blue-500 font-bold text-xl cursor-pointer
                hover:text-blue-300 w-24"
                >
                  Code{" "}
                  <BsArrowRight size={24} className="inline-block hover:" />
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col mb-10">
                <p className="text-gray-400 mb-1 text-lg">Services</p>
                {project.data.services.map((s, i) => (
                  <p key={i} className="text-gray-600">
                    {s}
                  </p>
                ))}
              </div>

              <div className="flex">
                {project.data.tech.map((t, i) => {
                  if (t === "SiReact")
                    return (
                      <SiReact
                        key={i}
                        className="m-1"
                        color="SkyBlue"
                        size={30}
                      />
                    );
                  if (t === "SiTypescript") {
                    return (
                      <SiTypescript
                        key={i}
                        className="m-1"
                        color="dodgerblue"
                        size={30}
                      />
                    );
                  }
                  if (t === "SiHtml5")
                    return (
                      <SiHtml5
                        key={i}
                        className="m-1"
                        color="OrangeRed"
                        size={30}
                      />
                    );
                  if (t === "SiJavascript")
                    return (
                      <SiJavascript
                        key={i}
                        className="m-1"
                        color="Orange"
                        size={30}
                      />
                    );
                  if (t === "SiNextdotjs")
                    return (
                      <SiNextdotjs
                        key={i}
                        className="m-1"
                        color="MediumTurquoise"
                        size={30}
                      />
                    );
                  if (t === "SiSass")
                    return (
                      <SiSass
                        key={i}
                        className="m-1"
                        color="Orchid"
                        size={30}
                      />
                    );
                })}
              </div>
            </div>
          </div>

          <div className="w-full max-w-7xl ">
            <div className="w-full">
              {project.data.infoImages.map((img, i) => (
                <div key={i}>
                  <img className={styles.img} src={img} alt="project" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: string[] = getAllProjectIds();

  const paths = slugs.map((slug) => {
    return {
      params: { pid: slug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = JSON.stringify(content.projects);

  return {
    props: {
      projects,
    },
  };
};

export default Post;
