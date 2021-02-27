import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "../components/layout.js";

import Home from "./home.js";
import About from "./about.js";
import Privacy from "./privacy.js";
import Challenges from "./challenges.js";
import NotFound from "./404.js";  // TODO: add this
import Challenge from "./challenge.js";

import Signup from "./signup.js";
import Login from "./login.js";
// import Logout from "./logout.js";

export default function PageRoutes() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/challenge/:id" component={Challenge} />
        <Route path="/challenges" component={Challenges} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Layout>
    </Router>
  );
};
