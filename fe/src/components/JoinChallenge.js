import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { GQLChallengesIJoined } from "../gql/query.js";
import { GQLJoinChallenge, GQLLeaveChallenge } from "../gql/mutation.js";

export default props => {

  const [ count, setCount ] = useState(props.participantCount);

  const [ participating, setParticipating ] = useState(
    props.me.challengesParticipating.filter(challenge => challenge.id === props.challengeId).length > 0
  );

  const [ joinChallenge ] = useMutation(GQLJoinChallenge, {
    "variables": {
      id: props.challengeId
    },
    "refetchQueries": [{ "query": GQLChallengesIJoined }]
  });
  const [ leaveChallenge ] = useMutation(GQLLeaveChallenge, {
    "variables": {
      id: props.challengeId
    },
    "refetchQueries": [{ "query": GQLChallengesIJoined }]
  });

  return (
    <>
      { (participating === true) ? (
        <button onClick={() => { leaveChallenge(); setParticipating(false); setCount(count - 1); }}>Leave Challenge</button>
      ) : (
        <button onClick={() => { joinChallenge(); setParticipating(true);  setCount(count + 1); }}>Join Challenge</button>
      )} : {count}
    </>
  );

};
