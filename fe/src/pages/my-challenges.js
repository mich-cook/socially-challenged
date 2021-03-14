import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import ChallengeList from "../components/ChallengeList.js";
import { GQLChallengesIOwn } from "../gql/query.js";

export default () => {
  useEffect(() => {
    document.title = `Challenges I Own`;
  });

  const { loading, data, error } = useQuery(GQLChallengesIOwn);

  if (loading === true) return <p>Loading challenges you created...</p>;
  if (error !== undefined) return <p>Error loading your challenges.</p>;   // ${error.message}  maybe?

  if (data.me.challengesOwned.length === 0) return <p>No active challenges you've created.</p>;

  return <ChallengeList challenges={data.me.challengesOwned} />;
};
