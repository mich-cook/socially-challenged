import React, { useEffect } from "react";
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

export default () => {

  useEffect(() => {
    document.title = `Socially Challenged | Sign Up`
  });

  return (
    <Form>
      <fieldset>
      <legend>All fields are required to register</legend>
      <label>Username:
        <input 
          required="required"
          type="text"
          id="username"
          name="username"
          placeholder="username"
      /></label>
      <label>Email Address:
        <input
          required="required"
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
      /></label>
      <label>Display Name:
        <input
          required="required"
          type="text"
          id="displayName"
          name="displayName"
          placeholder="Public Display Name"
      /></label>
      <label>Password:
        <input
          required="required"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
      /></label>
      <label>Verify Password:
        <input
          required="required"
          type="password"
          id="passwordVerify"
          name="passwordVerify"
          placeholder="Verify Password"
      /></label>
      <Button type="submit">Sign Up</Button>
      </fieldset>
    </Form>
  );
};
