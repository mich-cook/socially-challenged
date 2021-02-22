import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Nav from "../components/Nav.js";

export default function Home() {
  return (
    <React.Fragment>
      <Header heading="Socially Challenged" subheading="Social Fitness Group Challenges" />
      <Nav />
      <p>An app that lets users create and participate in group fitness challenges.</p>
      <Footer />
    </React.Fragment>
  );
};
