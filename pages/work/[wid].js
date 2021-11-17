import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { content } from "../../content/content";
import Link from "next/link";
import styles from "./Work.module.css";

const Post = () => {
  const route = useRouter();
  const { wid } = route.query;
  const [work, setWork] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const works = content.works;
    const filteredWorks = works.filter((work) => work.slug === Number(wid));
    setWork(filteredWorks[0]);
    setLoading(false);
  }, []);

  const workHTML = () => (
    <div className="flex flex-col   ">
      <h1 className="text-5xl font-semibold text-gray-800">
        {work.data.title}
      </h1>

      <div className="flex flex-col md:flex-row w-full justify-between mt-14 mb-10">
        <div className="flex flex-col w-full max-w-2xl mb-10 md:mb-0">
          <p className="text-xl font-medium text-gray-600">{work.data.info}</p>
          <a
            href={work.data.link}
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-500 font-bold text-lg cursor-pointer
                hover:text-blue-300 mt-14 w-36"
          >
            Visit website {" ->"}
          </a>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col mb-10">
            <p className="text-gray-400 mb-1 text-lg">Services</p>
            {work.data.services.map((s, i) => (
              <p className="text-gray-600" key={i}>
                {s}
              </p>
            ))}
          </div>

          <div className="flex">
            {work.data.tech.map((t, i) => (
              <div key={i}>{t}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl">
        <div className="w-full">
          {work.data.infoImages.map((img, i) => (
            <img className={styles.img} key={i} src={img} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="flex flex-col justify-center md:flex-row
        mt-40 container max-w-5xl mx-auto px-10 mb-24"
    >
      {loading ? "loading..." : workHTML()}
      {/* {work.slug ? (
        <div className="flex flex-col   ">
          <h1 className="text-5xl font-semibold text-gray-800">
            {work.data.title}
          </h1>

          <div className="flex flex-col md:flex-row w-full justify-between mt-14 mb-10">
            <div className="flex flex-col w-full max-w-2xl mb-10 md:mb-0">
              <p className="text-xl font-medium text-gray-600">
                {work.data.info}
              </p>
              <a
                href={work.data.link}
                rel="noopener noreferrer"
                target="_blank"
                className="text-blue-500 font-bold text-lg cursor-pointer
                hover:text-blue-300 mt-14 w-36"
              >
                Visit website {" ->"}
              </a>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col mb-10">
                <p className="text-gray-400 mb-1 text-lg">Services</p>
                {work.data.services.map((s, i) => (
                  <p className="text-gray-600" key={i}>
                    {s}
                  </p>
                ))}
              </div>

              <div className="flex">
                {work.data.tech.map((t, i) => (
                  <div key={i}>{t}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full max-w-7xl">
            <div className="w-full">
              {work.data.infoImages.map((img, i) => (
                <img className={styles.img} key={i} src={img} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        "loading..."
      )} */}
    </div>
  );
};

export default Post;
