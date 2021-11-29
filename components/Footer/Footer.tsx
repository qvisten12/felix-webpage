import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
import styles from "./Footer.module.css";
import Spotify from "../Spotify/Spotify";

const Footer = () => {
  return (
    <div className="container max-w-5xl w-full mx-auto md:px-10 mb-10 md:mb-16">
      <hr />
      <div className="flex flex-col md:flex-row mt-10 justify-between items-center">
        <Link href="/">
          <a
            className={`font-black text-2xl text-gray-800 ${styles.hover_underline_animation}`}
          >
            Felix.
            <span className=" font-semibold text-xl text-blue-600">
              Ljungqvist
            </span>
          </a>
        </Link>

        <Spotify />

        <div className="flex justify-between w-32 md:w-40 mt-4 md:mt-0">
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
    </div>
  );
};

export default Footer;
