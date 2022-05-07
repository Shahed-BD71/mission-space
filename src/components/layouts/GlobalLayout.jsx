import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar/Navbar";


export default function GlobalLayout({ children }) {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Footer />
    </>
  );
}
