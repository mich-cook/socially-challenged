import React from "react";

import Header from "./header.js";
import Footer from "./footer.js";
import Nav from "./Nav.js";

export default function Layout({ children }) {
  return (
    <>
      <Header heading="Socially Challenged" subheading="Social Fitness Group Challenges" />
      <div className="content">
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
