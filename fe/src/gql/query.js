import { gql } from "@apollo/client";

const GQLLoggedIn = gql`{ lilo @client }`;

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

export { GQLLoggedIn, GQLGetChallenges, GQLGetChallenge };
