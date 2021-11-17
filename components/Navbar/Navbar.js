import React, { useEffect, useRef } from "react";
import Link from "next/link";

const Navbar = () => {
  const navRef = useRef(null);
  let prevScrollPos;
  if (typeof window !== "undefined") {
    prevScrollPos = typeof window.pageYOffset;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function handleScroll() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      navRef.current.style.top = "0";
    } else {
      if (currentScrollPos < 1) {
        return;
      }
      navRef.current.style.top = "-100px";
    }
    prevScrollPos = currentScrollPos;
  }

  return (
    <nav
      style={{
        transition: "top 0.6s",
      }}
      ref={navRef}
      className="flex pt-6 pb-6 md:px-10 justify-between fixed top-0 w-screen z-40 bg-white opacity-90"
    >
      <Link href="/">
        <a className="font-extrabold text-3xl ml-5 ">
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
