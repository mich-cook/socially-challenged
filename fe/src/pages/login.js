import React, { useEffect } from "react";
import { useMutation, gql } from "@apollo/client";

import SUSI from "../components/susi.js";

const GQLSignUp = gql`
  mutation SignIn($email: String, $username: String, $password: String!) {
    authenticateUser(email: $email, username: $username, password: $password)
  }
`;

export default props => {
  useEffect(() => {
    document.title = `Socially Challenged | Sign In`
  });

  const onSubmit = e => {
    e.preventDefault();
    authenticateUser({ "variables": { ...values }});
  };

  const [ authenticateUser, { loading, error, client }] = useMutation(GQLSignUp, {
    "onCompleted": data => {
      const lilo = { "isLoggedIn": true };
      localStorage.setItem("token", data.authenticateUser);
      client.writeQuery({
        "query": gql`{ lilo }`,
        "data": { lilo }
      });
      // TODO: look at props.location.state.from with Redirect
      props.history.push("/challenges/");
    }
  });

  return (
    <SUSI which="signin" submit={authenticateUser} />
  );
};
