import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import ChallengeList from "../components/ChallengeList.js";
import Button from "../components/Button.js";

import { GQLGetChallenges } from "../gql/query.js";

export default function Challenges() {

  // this needs to be before the gql loading/error "handlers"
  useEffect(() => {
    document.title = `Socially Challenged | Challenges`;
  });

  const { data, loading, error, fetchMore } = useQuery(GQLGetChallenges);

  if (loading === true) return <p>Loading...</p>;
  if (error !== undefined) return <p>Error fetching challenges. This is not good.</p>;

  return (
    <React.Fragment>
      <Link to="/challenge/new">Create Challenge</Link>
      <ChallengeList challenges={data.challengeList.challenges} />
      {data.challengeList.continued && (
        <Button
          onClick={() =>
            // from the useQuery() hook above
            fetchMore({
              "variables": {
                "cursor": data.challengeList.cursor
              },
              "updateQuery": (currentList, { fetchMoreResult }) => {
                return {
                  "challengeList": {
                    "cursor": fetchMoreResult.challengeList.cursor,
                    "continued": fetchMoreResult.challengeList.continued,
                    "challenges": [
                      ...currentList.challengeList.challenges,
                      ...fetchMoreResult.challengeList.challenges
                    ],
                    "__typename": "challengeList"
                  }
                };
              }
            })
          }
        >Load next page</Button>
      )}
    </React.Fragment>
  );
};
