interface Project {
  index: number;
  slug: number;
  data: {
    title: string;
    date: number;
    services: string[];
    tech: string[];
    featuredImg: string;
    infoImages: string[];
    info: string;
    link: string;
    codelink: string;
  };
}

interface Projects {
  projects: Project[];
}

export const content: Projects = {
  projects: [
    {
      index: 0,
      slug: 1,
      data: {
        title: "Yutu - Weather",
        date: 2021,
        services: ["Front-end development"],
        tech: [
          "SiReact",
          "SiTypescript",
          "SiJavascript",
          "SiHtml5",
          "SiTailwindcss",
        ],
        featuredImg: "/images/yutu/yutu-preview.png",
        infoImages: ["/images/yutu/yutu1.png", "/images/yutu/yutu2.png"],
        info: "Created using React, this app displays weather from different areas/cities around the world. The weather information used in this app i powered by OpenWeatherMap's API, and the time and timezone information is converted using Moment.",
        link: "https://yutu-weather.vercel.app",
        codelink: "https://github.com/qvisten12/yutu-weather",
      },
    },
    // {
    //   index: 1,
    //   slug: 2,
    //   data: {
    //     title: "Shareify",
    //     date: 2022,
    //     services: ["Front & back-end development"],
    //     tech: ["SiReact", "SiJavascript", "SiHtml5", "SiTailwindcss"],
    //     featuredImg: "/images/shareify/shareify-preview.png",
    //     infoImages: [
    //       "/images/shareify/shareify1.png",
    //       "/images/shareify/shareify2.png",
    //       "/images/shareify/shareify3.png",
    //       "/images/shareify/shareify4.png",
    //     ],
    //     info: "Created using React, this is a fullfledged social media app. This app supports new posts with image upload, user login and registration. Backend created using sanity.io.",
    //     link: "https://shareify-jade.vercel.app",
    //     codelink: "https://github.com/qvisten12/shareify_frontend",
    //   },
    // },
    {
      index: 1,
      slug: 2,
      data: {
        title: "HackerScroller",
        date: 2022,
        services: ["Front-end development"],
        tech: ["SiReact", "SiJavascript", "SiHtml5", "SiTailwindcss"],
        featuredImg: "/images/hackerscroller/hackerscroller-preview.png",
        infoImages: [
          "/images/hackerscroller/hackerscroller1.png",
          "/images/hackerscroller/hackerscroller2.png",
          "/images/hackerscroller/hackerscroller3.png",
        ],
        info: "Created using React and TailwindCSS. This app gets the latest top stories from the hackernews API, allows you to get direct links to comments, content and the ability to filter stories on read/unread.",
        link: "https://hackerscroller.vercel.app",
        codelink: "https://github.com/qvisten12/hackerscroller",
      },
    },

    {
      index: 2,
      slug: 3,
      data: {
        title: "Component Library",
        date: 2021,
        services: ["Front-end development"],
        tech: ["SiReact", "SiJavascript", "SiTypescript"],
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
        title: "Realtime Chat",
        date: 2021,
        services: ["Front & back-end development"],
        tech: ["SiReact", "SiJavascript"],
        featuredImg: "/images/chat-app/chat-app-preview.png",
        infoImages: [
          "/images/chat-app/chat-app1.png",
          "/images/chat-app/chat-app2.png",
        ],
        info: "A React chat app using Socket.io for realtime chat updates. Server was made using nodejs and socket.io.",
        link: "https://github.com/qvisten12/chat-app",
        codelink: "https://github.com/qvisten12/chat-app",
      },
    },
  ],
};
