import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";

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

const GQLLoggedIn = gql`{ lilo @client }`;

export default (props) => {

  const { data } = useQuery(GQLLoggedIn);

  return (
    <PageHeader>
      <H1>{props.heading}</H1>
      <H2>{props.subheading}</H2>
      <UserState>
        {data.lilo.isLoggedIn ? (
          <p><Link to="/logout">Log Out</Link></p>
        ) : (
          <p>
            <Link to="/signin">Sign In</Link> |
            <Link to="/signup">Sign Up</Link>
          </p>
        )}
      </UserState>
    </PageHeader>
  );
};
