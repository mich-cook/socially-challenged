import React from "react";

import Header from "../components/header.js";
import Footer from "../components/footer.js";

export default function About() {
  return (
    <div>
      <Header heading="Socially Challenged" subheading="Social Fitness Group Challenges" />
      <p>A site for coordinating challenge progress and results.</p>
      <Footer />
    </div>
  );
};

