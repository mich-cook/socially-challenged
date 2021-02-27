import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import ChallengeList from "../components/ChallengeList.js";
import Button from "../components/Button.js";

const GQLGetChallenges = gql`
  query ChallengeList($cursor: String) {
    challengeList(cursor: $cursor) {
      challenges {
        id
        createdAt
        participantCount
        owner {
          id
          displayName
          username
        }
      }
      cursor
      continued
    }
  }
`;

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
      <Button>Create Challenge</Button>
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