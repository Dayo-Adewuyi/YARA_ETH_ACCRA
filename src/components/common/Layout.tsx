import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen overflow-y-scroll py-4">
      {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
