import React, { useEffect, useState } from "react";
import { useMutation, useApolloClient, gql } from "@apollo/client";
import styled from "styled-components";

import Button from "../components/Button.js";

const Form = styled.form`

  fieldset {
    legend {
      padding: 0.5rem 1rem;
      border: 1px solid #f5f4f0;
    }
    border: 1px solid #f5f4f0;
    max-width: 500px;
    padding: 1em;
  }

  label, input {
    display: block;
    line-height: 2;
  }

  input {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const GQLSignUp = gql`
  mutation SignUp($email: String!, $username: String!, $displayName: String!, $password: String!) {
    registerUser(email: $email, username: $username, password: $password, displayName: $displayName)
  }
`;

export default props => {

  const [ values, setValues ] = useState();

  // hard binding between field names and field data
  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    // TODO: validation, including password verify field
    registerUser({ "variables": { ...values }});
  };

  const [ registerUser, { loading, error }] = useMutation(GQLSignUp, {
    "onCompleted": data => {
      localStorage.setItem("token", data.registerUser);
      props.history.push("/challenges/");
    }
  });

  useEffect(() => {
    document.title = `Socially Challenged | Sign Up`
  });

  return (
    <Form onSubmit={onSubmit}>
      <fieldset>
      <legend>All fields are required to register</legend>
      <label>Username:
        <input 
          required="required"
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={onChange}
      /></label>
      <label>Email Address:
        <input
          required="required"
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
          onChange={onChange}
      /></label>
      <label>Display Name:
        <input
          required="required"
          type="text"
          id="displayName"
          name="displayName"
          placeholder="Public Display Name"
          onChange={onChange}
      /></label>
      <label>Password:
        <input
          required="required"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
      /></label>
      <label>Verify Password:
        <input
          required="required"
          type="password"
          id="passwordVerify"
          name="passwordVerify"
          placeholder="Verify Password"
          onChange={onChange}
      /></label>
      <Button type="submit">Sign Up</Button>
      </fieldset>
    </Form>
  );
};
