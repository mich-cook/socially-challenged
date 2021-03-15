import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GQLGetMe } from "../gql/query.js";

import JoinButton from "./JoinChallenge.js";
import DeleteButton from "./DeleteChallengeButton.js";

export default props => {

  const { loading, data, error } = useQuery(GQLGetMe);
  // not displaying loading/error messages since they're paragraphs which can't be displayed in paragraphs
  if (loading === true) return <></>;     // <p>Loading user info</p>;
  if (error !== undefined) return <></>;  // <p>Error loading user info</p>;

  return (
    <>
      <JoinButton me={data.me} challengeId={props.challenge.id} participantCount={props.challenge.participantCount} />
    {data.me.id === props.challenge.owner.id && (
      <>
        <Link to={`/challenge/${props.challenge.id}/edit`}>Edit</Link>
        <DeleteButton challengeId={props.challenge.id} />
      </>
    )}
    </>
  );
};
