import React from "react";

import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Layout from "../components/layout.js";

export default function Home() {
  return (
    <Layout>
      <Header heading="Socially Challenged" subheading="Social Fitness Group Challenges" />
      <Footer />
    </Layout>
  );
};
