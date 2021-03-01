import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button.js";

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

const onSubmit = (e, submit, data) => {
  e.preventDefault();
  submit({ "variables": { ...data }});
};

export default (props) => {

  const [ values, setValues ] = useState();

  // hard binding between field names and field data
  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={e => { onSubmit(e, props.submit, values); }}>
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
          required={props.which === "signup"?true:false}
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
          onChange={onChange}
      /></label>
      {(props.which === "signup") && (
      <label>Display Name:
        <input
          required="required"
          type="text"
          id="displayName"
          name="displayName"
          placeholder="Public Display Name"
          onChange={onChange}
      /></label>)}
      <label>Password:
        <input
          required="required"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
      /></label>
      {(props.which === "signup") && (
      <label>Verify Password:
        <input
          required="required"
          type="password"
          id="passwordVerify"
          name="passwordVerify"
          placeholder="Verify Password"
          onChange={onChange}
      /></label>)}
      <Button type="submit">Sign Up</Button>
      </fieldset>
    </Form>
  
  );

};
