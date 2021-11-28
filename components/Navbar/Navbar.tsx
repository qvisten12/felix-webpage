import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Router from "next/router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  let prevScrollPos: Number | String;
  if (typeof window !== "undefined") {
    prevScrollPos = typeof window.pageYOffset;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const reset = () => (navRef.current!.style.top = "0");

    Router.events.on("routeChangeComplete", reset);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Router.events.off("routeChangeComplete", reset);
    };
  });

  function handleScroll() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      navRef.current!.style.top = "0";
    } else {
      if (currentScrollPos < 1) {
        return;
      }
      navRef.current!.style.top = "-100px";
    }
    prevScrollPos = currentScrollPos;
  }

  return (
    <nav
      style={{
        transition: "top 0.6s",
      }}
      ref={navRef}
      className="flex pt-6 pb-6 md:px-10 items-center justify-between fixed top-0 w-screen z-40 bg-white opacity-90"
    >
      <Link href="/">
        <a
          className={`font-black text-2xl ml-5 text-gray-800 ${styles.hover_underline_animation}`}
        >
          Felix.
          <span className=" font-semibold text-xl text-blue-600">
            Ljungqvist
          </span>
        </a>
      </Link>

      <div>
        <a
          href="mailto:felixljungqvist@icloud.com"
          className="text-base text-gray-400 mr-5 hover:text-gray-800"
        >
          Contact
        </a>
        <a
          href="https://github.com/qvisten12/felix-webpage"
          rel="noreferrer nofollow"
          target="_blank"
          className="text-base text-gray-400 mr-5 hover:text-gray-800"
        >
          Source
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
