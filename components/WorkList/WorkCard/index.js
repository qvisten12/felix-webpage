import Link from "next/link";
import React from "react";

import styles from "./WorkCard.module.css";

const bgColors = ["#4A2BAF", "#0F61C0", "#9E2B79", "#4146B5"];

const WorkCard = (props) => {
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

export default WorkCard;
