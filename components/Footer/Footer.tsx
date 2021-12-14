import React, { useState, useCallback, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import Spotify from "../Spotify/Spotify";
import Logo from "../Logo/Logo";

const Footer = () => {
  const [windowSize, setWindowSize] = useState<number>();

  const handleWindowResize = useCallback((event) => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <div className="container max-w-5xl w-full mx-auto px-4 md:px-10 mb-10 md:mb-16">
      <hr />
      <div className="flex flex-col md:flex-row mt-10 justify-between items-center">
        <div className="flex justify-between items-center w-full mb-4 md:mb-0">
          <Logo />

          {windowSize! >= 768 ? <Spotify /> : ""}

          <div className="flex justify-between w-32 md:w-40 ">
            <a
              href="https://twitter.com/felixljungqvis1"
              aria-label="twitter"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-400 hover:text-gray-600"
            >
              <AiOutlineTwitter size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/felix-ljungqvist-422119181/"
              aria-label="linkedin"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-400 hover:text-gray-600"
            >
              <AiFillLinkedin size={30} />
            </a>
            <a
              href="https://github.com/qvisten12"
              aria-label="github"
              rel="noopener noreferrer"
              target="_blank"
              className="text-gray-400 hover:text-gray-600"
            >
              <AiFillGithub size={30} />
            </a>
          </div>
        </div>

        {windowSize! <= 768 ? <Spotify /> : ""}
      </div>
    </div>
  );
};

export default Footer;
