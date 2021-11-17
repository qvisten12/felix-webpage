import React from "react";

import WorkCard from "./WorkCard";
import styles from "./WorkList.module.css";
import { content } from "../../content/content";

const WorkList = () => {
  const works = content.works;
  return (
    <>
      <div className="mt-24 container max-w-5xl mx-auto px-10 mb-10 md:mb-14">
        <h1 className="text-4xl font-semibold ">Latest Work</h1>
      </div>
      <div className={styles.workContainer}>
        <div className={styles.workList}>
          {works &&
            works.map((p, i) => <WorkCard key={p.slug} index={i} {...p} />)}
        </div>
      </div>
    </>
  );
};

export default WorkList;
