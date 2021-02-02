import React from "react";
import { Link } from "gatsby";

import Header from "../../components/header.js";
import Footer from "../../components/footer.js";
import Layout from "../../components/layout.js";
import ChallengeList from "../../components/ChallengeList.js";

export default function Challenges() {

  // dummy data for now
  const createdChallenges = [];
  const joinedChallenges = undefined;
  const otherChallenges = [ "first", "second", "third", "fourth" ];

  return (
    <Layout>
      <Header heading="Socially Challenged" subheading="Social Fitness Group Challenges" />
      <Link to="create/">New Challenge</Link>
      <ChallengeList challenges={createdChallenges} heading={`Created Challenges`} />
      <ChallengeList challenges={joinedChallenges} heading={`Joined Challenges`} />
      <ChallengeList challenges={otherChallenges} heading={`Other Public Challenges`} /> 
      <Footer />
    </Layout>
  );
}
