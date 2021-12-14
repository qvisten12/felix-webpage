import Link from "next/link";
import React from "react";
import Image from "next/image";

import styles from "./ProjectCard.module.css";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const bgColors = ["#3189c7", "#9cabcc", "#9cbebe", "#f3746d", "#4974a5"];

interface data {
  title: string;
  date: number;
  services: string[];
  tech: string[];
  featuredImg: string;
}

interface Props {
  index: number;
  slug: number;
  data: data;
}

const ProjectCard = ({
  index,
  slug,
  data: { title, date, services, tech, featuredImg },
}: Props) => {
  return (
    <Link href="/project/[pid]" as={`/project/${slug}`}>
      <a
        className={styles.card}
        style={{ background: bgColors[index % bgColors.length] }}
      >
        <div
          className="md:ml-auto w-400 text-white py-10 pl-10 ml-0 h-600
         md:py-16 md:pr-0 md:pl-16 md:h-full box-border flex flex-col "
        >
          <p className="m-0 text-base opacity-80">{date}</p>
          <h1 className="font-semibold text-3xl md:text-4xl mt-1">{title}</h1>
          <div className="list-none mt-4 md:mt-10 text-lg">
            {services.map((s, i) => (
              <li className="mt-1 opacity-80" key={i}>
                {s}
              </li>
            ))}
          </div>
          <div className="transform origin-left scale-90 md:scale-100 mt-4 -ml-1 md:ml-0 md:mt-auto md:flex">
            {tech.map((t, i) => {
              if (t === "SiReact")
                return (
                  <SiReact
                    key={i}
                    className="m-1 flex items-center justify-center w-11 h-11"
                  />
                );
              if (t === "SiTypescript") {
                return (
                  <SiTypescript
                    key={i}
                    className="m-1 flex items-center justify-center w-11 h-11"
                  />
                );
              }
              if (t === "SiHtml5")
                return (
                  <SiHtml5
                    key={i}
                    className="m-1 flex items-center justify-center w-11 h-11"
                  />
                );
              if (t === "SiJavascript")
                return (
                  <SiJavascript
                    key={i}
                    className="m-1 flex items-center justify-center w-11 h-11"
                  />
                );
              if (t === "SiNextdotjs")
                return (
                  <SiNextdotjs
                    key={i}
                    className="m-1 flex items-center justify-center w-11 h-11"
                  />
                );
              if (t === "SiTailwindcss")
                return (
                  <SiTailwindcss
                    key={i}
                    className="m-1 flex items-center justify-center w-11 h-11"
                  />
                );
            })}
          </div>
        </div>
        <div className={styles.images}>
          <Image src={featuredImg} alt={title} layout="fill" />
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
