import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex py-10 md:p-10 justify-between fixed top-0 w-screen z-40 bg-white opacity-90">
      <Link href="/">
        <a className="font-extrabold text-2xl ml-5 ">
          {" <"}
          {"FL"}
          <span className="text-blue-500">{"/"}</span>
          {">"}
        </a>
      </Link>

      <a
        href="mailto:felixljungqvist@icloud.com"
        className="text-base text-gray-400 mr-5"
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
