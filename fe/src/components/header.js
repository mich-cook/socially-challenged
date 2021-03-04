import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";

import { GQLLoggedIn } from "../gql/query.js";

import Button from "./Button.js";

const PageHeader = styled.header`
  padding: 0.5rem 1rem;
`;

const H1 = styled.h1`
  padding: 0;
  margin: 0;
`;

const H2 = styled.h2`
  padding: 0;
  margin: 0;
`;

const UserState = styled.div`
  p {
    margin: 0; padding: 0;
    margin-top: 0.5rem;
  }
`;

export default withRouter((props) => {

  const { data, client } = useQuery(GQLLoggedIn);

  return (
    <PageHeader>
      <H1>{props.heading}</H1>
      <H2>{props.subheading}</H2>
      <UserState>
        {data?.lilo?.isLoggedIn ? (
          <Button onClick={() => {
            const lilo = { "isLoggedIn": false };
            localStorage.removeItem("token");  // delete JWT
            client.resetStore();  // delete apollo cache
            // instead of client.writeData();
            client.writeQuery({
              "query": gql`{ lilo }`,
              "data": { lilo }
            });  // write isLoggedIn back to cache
            props.history.push("/");
          }}>Log Out</Button>
        ) : (
          <p>
            <Link to="/signin">Sign In</Link> |
            <Link to="/signup">Sign Up</Link>
          </p>
        )}
      </UserState>
    </PageHeader>
  );
});
