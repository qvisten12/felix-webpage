import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { content } from "../../content/content";
import styles from "./Work.module.css";

import {
  SiNextdotjs,
  SiSass,
  SiHtml5,
  SiJavascript,
  SiReact,
} from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";

const Post = ({ works }) => {
  const route = useRouter();
  const { wid } = route.query;

  const [work, setWork] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    works = JSON.parse(works);
    const filteredWorks = works.filter((work) => work.slug === Number(wid));
    setWork(filteredWorks[0]);
    setLoading(false);
  }, []);

  return (
    <div
      className="flex flex-col justify-center md:flex-row
      mt-28  md:mt-40 container max-w-5xl mx-auto px-10 mb-24"
    >
      {loading ? (
        "loading..."
      ) : (
        <div className="flex flex-col">
          <h1 className="text-5xl font-semibold text-gray-800">
            {work.data.title}
          </h1>

          <div className="flex flex-col md:flex-row w-full justify-between mt-14 mb-10">
            <div className="flex flex-col w-full max-w-2xl mb-10 md:mb-0">
              <p className="text-xl font-medium text-gray-600">
                {work.data.info}
              </p>
              <div className="mt-14 flex justify-between">
                <a
                  href={work.data.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-blue-500 font-bold text-xl cursor-pointer
                hover:text-blue-300 w-38"
                >
                  Visit website{" "}
                  <BsArrowRight size={24} className="inline-block" />
                </a>
                <a
                  href={work.data.codelink}
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
                {work.data.services.map((s, i) => (
                  <p key={i} className="text-gray-600">
                    {s}
                  </p>
                ))}
              </div>

              <div className="flex">
                {work.data.tech2.map((t) => {
                  if (t === "SiReact")
                    return (
                      <SiReact className="m-1" color="SkyBlue" size={30} />
                    );
                  if (t === "SiHtml5")
                    return (
                      <SiHtml5 className="m-1" color="OrangeRed" size={30} />
                    );
                  if (t === "SiJavascript")
                    return (
                      <SiJavascript className="m-1" color="Orange" size={30} />
                    );
                  if (t === "SiNextdotjs")
                    return (
                      <SiNextdotjs
                        className="m-1"
                        color="MediumTurquoise"
                        size={30}
                      />
                    );
                  if (t === "SiSass")
                    return <SiSass className="m-1" color="Orchid" size={30} />;
                })}
              </div>
            </div>
          </div>

          <div className="w-full max-w-7xl ">
            <div className="w-full">
              {work.data.infoImages.map((img, i) => (
                <div key={i}>
                  <img className={styles.img} src={img} alt="work" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps() {
  const works = JSON.stringify(content.works);

  return {
    props: {
      works,
    },
  };
}

export default Post;
