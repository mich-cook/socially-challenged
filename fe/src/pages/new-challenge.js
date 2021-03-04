import React, { useEffect } from "react";
import { useMutation, gql } from "@apollo/client";

import ChallengeForm from "../components/ChallengeForm.js";

const GQLCreateChallenge = gql`
  mutation newChallenge($start: String!, $end: String!, $cutoff: String!, $metrics: String!) {
    newChallenge(start: $start, end: $end, cutoff: $cutoff, metrics: $metrics) {
      id
    }
  }
`;

export default props => {

  useEffect(() => {
    document.title = `Socially Challenged | New Challenge`;
  });

  // TODO: BUG: clicking on challenges in the nav after this doesn't show the new challenge
  const [ data, { loading, error }] = useMutation(GQLCreateChallenge, {
    "onCompleted": data => {
      props.history.push(`/challenge/${data.newChallenge.id}`);
    }
  });

  if (loading === true) return <p>Loading</p>;
  if (error !== undefined) return <p>Uh oh time.</p>;

  return <ChallengeForm action={data} />;

};
