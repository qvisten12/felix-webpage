import Link from "next/link";
import React from "react";

import styles from "./ProjectCard.module.css";

const bgColors = ["#9cabcc", "#3189c7", "#9cbebe", "#d26742"];

const ProjectCard = (props) => {
  const {
    index,
    slug,
    data: { title, date, services, tech, featuredImg },
  } = props;

  return (
    <Link href="/work/[wid]" as={`/work/${slug}`}>
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
            {tech.map((t, i) => (
              <div key={i} className={styles.techIcon}>
                {t}
              </div>
            ))}
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
