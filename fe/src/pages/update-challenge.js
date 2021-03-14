import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";

import Challenge from "../components/Challenge.js";
import ChallengeForm from "../components/ChallengeForm.js";

import { GQLGetMe, GQLGetChallenge } from "../gql/query.js";
import { GQLUpdateChallenge } from "../gql/mutation.js";

export default props => {

  const id = props.match.params.id;
  const { loading: loadingChallenge, data, error } = useQuery(GQLGetChallenge, { "variables": { id }});
  const { loading: loadingMe, data: user } = useQuery(GQLGetMe);

  const [ editChallenge ] = useMutation(GQLUpdateChallenge, {
    "variables": {
      id
    },
    "onCompleted": () => {
      props.history.push(`/challenge/${id}`);
    }
  });

  if (loadingChallenge === true) return <p>Loading challenge information...</p>;
  if (loadingMe === true) return <p>Loading your information...</p>;
  if (error !== undefined) return <p>Problem loading challenge information.</p>;

  if (user.me.id !== data.challenge.owner.id) {
    return <p>Access denied to edit this challenge.</p>;
  }

  return <ChallengeForm challenge={data.challenge} action={editChallenge} />;

};
