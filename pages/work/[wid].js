import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { content } from "../../content/content";
import styles from "./Work.module.css";

import { DiReact } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io";

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
        mt-40 container max-w-5xl mx-auto px-10 mb-24"
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
                {work.data.services.map((s) => (
                  <p className="text-gray-600">{s}</p>
                ))}
              </div>

              <div className="flex">
                {work.data.tech2.map((t) => {
                  if (t === "DiReact") return <DiReact size={30} />;
                  if (t === "TiHtml5") return <TiHtml5 size={30} />;
                  if (t === "IoLogoJavascript")
                    return <IoLogoJavascript size={30} />;
                })}
              </div>
            </div>
          </div>

          <div className="w-full max-w-7xl">
            <div className="w-full">
              {work.data.infoImages.map((img) => (
                <div>
                  <img className={styles.img} src={img} />
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
