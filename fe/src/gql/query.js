import { gql } from "@apollo/client";

const GQLLoggedIn = gql`{ lilo @client }`;

const GQLGetMe = gql`
  query me {
    me {
      id
      username
      displayName
      challengesOwned {
        id
      }
      challengesParticipating {
        id
      }
    }
  }
`;

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
      start
      end
      cutoff
      metrics
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

const GQLChallengesIJoined = gql`
  query participatingChallenges {
    me {
      id
      username
      challengesParticipating {
        id
        owner {
          displayName
        }
        createdAt
        participantCount
        metrics
      }
    }
  }
`;

export { GQLGetMe, GQLLoggedIn, GQLGetChallenges, GQLChallengesIOwn, GQLChallengesIJoined, GQLGetChallenge };
