import React, { FC } from "react";
import Link from "next/link";
import styles from "./Logo.module.css";

interface Props {
  navbar?: boolean;
}

const Logo: FC<Props> = ({ navbar }) => {
  return (
    <Link href="/">
      <a
        className={`font-black ${navbar ? "ml-5" : ""} text-2xl text-gray-800 ${
          styles.hover_animation
        }`}
      >
        Felix.
        <span className=" font-semibold text-xl text-blue-600">Ljungqvist</span>
      </a>
    </Link>
  );
};

export default Logo;
