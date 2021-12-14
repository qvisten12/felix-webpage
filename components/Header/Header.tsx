import React from "react";

const Header = () => {
  return (
    <div
      className="flex flex-col justify-center md:flex-row
      mt-32 md:mt-56 container max-w-5xl mx-auto px-10 mb-10 md:mb-24"
    >
      <div className="flex flex-col flex-1 mb-10 md:mb-0 md:w-1/2">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-5">
          Hi, I&apos;m Felix
        </h1>
        <p className="font-medium text-3xl text-gray-500 mb-8 ">
          a web developer
          <br />
          and tech enthusiast
        </p>
        <a href="mailto:felixljungqvist@icloud.com" className="w-32">
          <button
            className="border-blue-500 border-2 w-32 p-2
                    rounded-md text-blue-500 text-2xl font-semibold
                    hover:bg-blue-500 hover:text-white
                    shadow-lg shadow-blue-200/60"
          >
            Say hello
          </button>
        </a>
      </div>

      <div className="flex flex-col max-w-lg md:w-1/2 text-gray-600 ">
        <p className="font-medium text-xl mb-5">
          I’m a{" "}
          <span className="text-gray-700 font-bold underline decoration-sky-500 decoration-2">
            Gothenburg
          </span>{" "}
          based aspiring Jr. front-end developer and designer. I&apos;m
          experienced in <span className="text-gray-700 font-bold">HTML5</span>,
          <span className="text-gray-700 font-bold">JS</span> and{" "}
          <span className="text-gray-700 font-bold">CSS3</span> and modern
          libraries <span className="text-gray-700 font-bold">React</span> and{" "}
          <span className="text-gray-700 font-bold">Next.js.</span>
        </p>

        <p className="font-medium text-xl mb-5">
          I am currently studying full time at{" "}
          <span className="text-gray-700 font-bold">Borås University</span> in
          <span className="text-gray-700 font-bold"> Systems Science.</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
