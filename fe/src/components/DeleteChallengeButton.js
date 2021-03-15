import React from "react";
import { useMutation } from "@apollo/client";
import { withRouter } from "react-router-dom";  // since we're redirecting in a nonrouteable component

import { GQLGetChallenges, GQLChallengesIOwn } from "../gql/query.js";
import { GQLDeleteChallenge } from "../gql/mutation.js";

const DeleteChallengeButton = props => {

  const [ deleteChallenge ] = useMutation(GQLDeleteChallenge, {
    "variables": {
      id: props.challengeId
    },
    "refetchQueries": [{ "query": GQLGetChallenges, GQLChallengesIOwn }],
    "onCompleted": data => {
      props.history.push(`/challenges/mine`);
    }
  });

  return <button onClick={deleteChallenge}>Delete</button>;
};

export default withRouter(DeleteChallengeButton);
