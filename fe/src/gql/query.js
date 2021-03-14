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
      participants {
        displayName
      }
      owner {
        id
        displayName
        username
      }
    }
  }
`;

const GQLChallengesIOwn = gql`
  query ownedChallenges {
    me {
      id
      username
      challengesOwned {
        id
        owner {
          displayName
        }
        createdAt
        participantCount
      }
    }
  }
`;

export { GQLLoggedIn, GQLGetChallenges, GQLChallengesIOwn, GQLGetChallenge };
