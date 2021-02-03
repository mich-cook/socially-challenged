import React from "react";
import { Link } from "gatsby";

import Header from "./header.js";
import Footer from "./footer.js";

export default function Layout({ children }) {
  return (
    <>
      <Header heading="Socially Challenged" subheading="Social Fitness Group Challenges" />
      <main>{children}</main>
      <Footer />
    </>
  );
}
