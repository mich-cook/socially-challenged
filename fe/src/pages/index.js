import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import Layout from "../components/layout.js";

import Home from "./home.js";
import About from "./about.js";
import Privacy from "./privacy.js";
import Challenges from "./challenges.js";
import NotFound from "./404.js";  // TODO: add this
import Challenge from "./challenge.js";
import NewChallenge from "./new-challenge.js";

import Signup from "./signup.js";
import Login from "./login.js";
// import Logout from "./logout.js";

import MyChallenges from "./my-challenges.js";

import { GQLLoggedIn } from "../gql/query.js";

const PrivateRoute = ({ "component": Component, ...rest }) => {
  const { loading, error, data } = useQuery(GQLLoggedIn);
  if (loading === true) return <p>Loading</p>;
  if (error !== undefined) return <p>Problem verifying login</p>;
  return (
    <Route {...rest} render={props =>
      data?.lilo?.isLoggedIn === true ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ "pathname": "/signin", "state": { "from": props.location }}} />
      )}
    />
  );
};

export default () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/privacy" component={Privacy} />
          <PrivateRoute path="/challenge/new" component={NewChallenge} />
          <Route path="/challenge/:id" component={Challenge} />
          <PrivateRoute path="/challenges" exact component={Challenges} />
          <PrivateRoute path="/challenges/mine" component={MyChallenges} />
          <Route path="/login" component={Login} />
          <Route path="/signin" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Layout>
    </Router>
  );
};
