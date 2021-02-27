import React from "react";
import { useQuery, gql } from "@apollo/client";

import Challenge from "../components/Challenge.js";

const GQLGetChallenge = gql`
  query challenge($id: ID!) {
    challenge(id: $id) {
      id
      createdAt
      participantCount
      owner {
        id
        displayName
        username
      }
    }
  }
`;

export default (props) => {

  const id = props.match.params.id;

  const { data, error, loading } = useQuery(GQLGetChallenge, { "variables": { id }});

  if (loading === true) return <p>Loading...</p>;
  if (error !== undefined) return <p>Error loading challenge.</p>;

  return (
    <Challenge challenge={data.challenge} />
  );
};
