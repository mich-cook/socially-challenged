import React from "react";
import { Router } from "@reach/router";

import Layout from "../components/layout.js";
import PrivateRoute from "../components/privateRoute.js";
import Challenges from "../components/challenges/index.js";
import CreateChallenge from "../components/challenges/create.js";

export default function ChallengesPage() {
  return (
    <Router>
      <PrivateRoute path="/challenges" component={Challenges} />
      <PrivateRoute path="/challenges/create" component={CreateChallenge} />
    </Router>
  );
};
