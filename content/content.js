import {
  SiNextdotjs,
  SiSass,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export const content = {
  works: [
    {
      index: 0,
      slug: 1,
      data: {
        title: "Covid Tracker",
        date: 2021,
        services: ["Front-end development"],
        tech: [
          <SiReact size={35} />,
          <SiJavascript size={35} />,
          <SiHtml5 size={35} />,
        ],
        tech2: ["SiReact", "SiJavascript", "SiHtml5"],
        featuredImg: "/images/covid/covid-preview.png",
        infoImages: ["/images/covid/covid1.png", "/images/covid/covid2.png"],

        info: "This app was made using React and uses an API from covid19.mathdro.id to get covid-19 related information. Each time the app is ran, a fetch of the newest covid-19 information is retrieved from the API. Aswell as when a new country is selected in the drop-down menu.",
        link: "https://covid-tracking-app.vercel.app",
        codelink: "https://github.com/qvisten12/covid-tracking-app",
      },
    },
    {
      index: 1,
      slug: 2,
      data: {
        title: "Yutu - Weather",
        date: 2021,
        services: ["Front-end development"],
        tech: [
          <SiReact size={35} />,
          <SiNextdotjs size={35} />,
          <SiJavascript size={35} />,
          <SiHtml5 size={35} />,
          <SiSass size={35} />,
        ],
        tech2: ["SiReact", "SiNextdotjs", "SiJavascript", "SiHtml5", "SiSass"],
        featuredImg: "/images/yutu/yutu-preview.png",
        infoImages: ["/images/yutu/yutu1.png", "/images/yutu/yutu2.png"],
        info: "Created using React and Nextjs, this app displays weather from different areas/cities around the world. The weather information used in this app i powered by OpenWeatherMap's API, and the time and timezone information is converted using Moment.",
        link: "https://yutu-weather.vercel.app",
        codelink: "https://github.com/qvisten12/yutu-weather",
      },
    },

    {
      index: 2,
      slug: 3,
      data: {
        title: "Component Library",
        date: 2021,
        services: ["Front-end development", "Dynamic Components"],
        tech: [
          <SiReact size={35} />,
          <SiJavascript size={35} />,
          <SiTypescript size={35} />,
        ],
        tech2: ["SiReact", "SiJavascript", "SiTypescript"],
        featuredImg: "/images/component-library/component-library-preview.png",
        infoImages: ["/images/component-library/component-library1.png"],
        info: "A minimal react component library, supporting both javascript and Typescripts with custom types. Made in react with typescript and bundled using rollup. Install using npm: npm install @qvisten12/react-component-library",
        link: "https://github.com/qvisten12/react-component-library/packages/1118391",
        codelink: "https://github.com/qvisten12/react-component-library",
      },
    },
    {
      index: 3,
      slug: 4,
      data: {
        title: "Web-shop demo",
        date: 2021,
        services: ["Front-end development"],
        tech: [
          <SiReact size={35} />,
          <SiJavascript size={35} />,
          <SiHtml5 size={35} />,
        ],
        tech2: ["SiReact", "SiJavascript", "SiHtml5"],
        featuredImg: "/images/web-shop/web-shop-preview.png",
        infoImages: [
          "/images/web-shop/web-shop3.png",
          "/images/web-shop/web-shop2.png",
          "/images/web-shop/web-shop1.png",
        ],
        info: "Made with React and uses commerceJS API to store cart information and stripe to handle checkout and payment.",
        link: "https://web-shop-tau.vercel.app",
        codelink: "https://github.com/qvisten12/web-shop",
      },
    },
  ],
};
