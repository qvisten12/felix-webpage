import Link from "next/link";
import React from "react";

import styles from "./ProjectCard.module.css";

import {
  SiNextdotjs,
  SiSass,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const bgColors = ["#3189c7", "#9cabcc", "#9cbebe", "#d26742"];

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
      <a className={styles.card} style={{ background: bgColors[index % 4] }}>
        <div className={styles.info}>
          <p className={styles.date}>{date}</p>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.services}>
            {services.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </div>
          <div className={styles.tech}>
            {tech.map((t, i) => {
              if (t === "SiReact")
                return <SiReact key={i} className={`m-1 ${styles.techIcon}`} />;
              if (t === "SiTypescript") {
                return (
                  <SiTypescript key={i} className={`m-1 ${styles.techIcon}`} />
                );
              }
              if (t === "SiHtml5")
                return <SiHtml5 key={i} className={`m-1 ${styles.techIcon}`} />;
              if (t === "SiJavascript")
                return (
                  <SiJavascript key={i} className={`m-1 ${styles.techIcon}`} />
                );
              if (t === "SiNextdotjs")
                return (
                  <SiNextdotjs key={i} className={`m-1 ${styles.techIcon}`} />
                );
              if (t === "SiSass")
                return <SiSass key={i} className={`m-1 ${styles.techIcon}`} />;
            })}
          </div>
        </div>
        <div className={styles.images}>
          <img src={featuredImg} alt={title} />
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
