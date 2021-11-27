import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container max-w-5xl w-full mx-auto md:px-10 mb-16">
      <hr />
      <div className="flex mt-10 justify-between items-center">
        <Link href="/">
          <a className="font-black text-2xl ml-5 text-gray-800">
            Felix.
            <span className=" font-semibold text-xl text-blue-600">
              Ljungqvist
            </span>
          </a>
        </Link>

        <div className="flex justify-between w-32 mr-5 md:mr-0">
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
