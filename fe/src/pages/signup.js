import React, { useEffect } from "react";
import { useMutation, gql } from "@apollo/client";

import SUSI from "../components/susi.js";

const GQLSignUp = gql`
  mutation SignUp($email: String!, $username: String!, $displayName: String!, $password: String!) {
    registerUser(email: $email, username: $username, password: $password, displayName: $displayName)
  }
`;

export default props => {
  useEffect(() => {
    document.title = `Socially Challenged | Sign Up`
  });

  const onSubmit = e => {
    e.preventDefault();
    // TODO: validation, including password verify field
    registerUser({ "variables": { ...values }});
  };

  const [ registerUser, { loading, error, client }] = useMutation(GQLSignUp, {
    "onCompleted": data => {
      const lilo = { "isLoggedIn": true };
      localStorage.setItem("token", data.registerUser);
      client.writeQuery({
        "query": gql`{ lilo }`,
        "data": { lilo }
      });
      props.history.push("/challenges/");
    }
  });

  return (
    <SUSI which="signup" submit={registerUser} />
  );
};
