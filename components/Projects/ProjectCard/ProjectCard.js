import React from "react";
import Link from "next/link";

const bgColors = ["#4A2BAF", "#0F61C0", "#9E2B79", "#4146B5"];

const ProjectCard = (props) => {
  const {
    index,
    slug,
    document: {
      data: { title, date, services, tech, featuredImg },
    },
  } = props;

  return (
    <Link href="/work/[wid]" as={`/work/${slug}`}>
      <a
        className="rounded max-w-full flex h-96 shadow-lg cursor-pointer m-auto
        hover:transform scale-105 relative overflow-hidden  "
        style={{ background: bgColors[index % 4] }}
      >
        <div className="ml-auto w-96 text-white pt-16 h-full box-border flex flex-col pl-16">
          <p className="m-0 text-base opacity-80">
            {new Date(date).getFullYear()}
          </p>
          <h1 className="font-semibold text-xl m-0">{title}</h1>
          <div className="list-none mt-10">
            {services.map((s, i) => (
              <li className="opacity-80" key={i}>
                {i}
              </li>
            ))}
          </div>
          <div className="mt-auto flex">
            {tech.map((t) => (
              <div
                key={t}
                className="w-11 h-11 flex items-center justify-center"
              >
                <Icon className="h-7" white>
                  {t}
                </Icon>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-start p-0 overflow-hidden relative flex-1">
          <img
            className="max-w-full rounded shadow-2xl"
            src={featuredImg}
            alt="alt"
          />
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
