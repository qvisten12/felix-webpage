import React, { ReactChild, ReactChildren } from "react";
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
      <Footer />
    </>
  );
};

export default Layout;
