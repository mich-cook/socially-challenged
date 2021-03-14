import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import ChallengeList from "../components/ChallengeList.js";
import { GQLChallengesIJoined } from "../gql/query.js";

export default () => {
  useEffect(() => {
    document.title = `Challenges I've Joined`;
  });

  const { loading, data, error } = useQuery(GQLChallengesIJoined);

  if (loading === true) return <p>Loading challenges you've joined...</p>;
  if (error !== undefined) return <p>Error loading your challenges.</p>;   // ${error.message}  maybe?

  if (data.me.challengesParticipating.length === 0) return <p>You haven't joined any challenges, but there's probably one that's great for you.</p>;

  return <ChallengeList challenges={data.me.challengesParticipating} />;
};
