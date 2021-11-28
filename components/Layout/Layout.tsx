import React, { ReactChild, ReactChildren } from "react";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface Props {
  children: ReactChild | ReactChildren;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Feedback />
      <Footer />
    </>
  );
};

export default Layout;
