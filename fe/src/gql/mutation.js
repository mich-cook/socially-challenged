import { gql } from "@apollo/client";

// at the moment, the API only supports updating the start date.
const GQLUpdateChallenge = gql`
  mutation updateChallenge($id: ID!, $start: String!) {
    updateChallenge(id: $id, start: $start) {
      id
      start
    }
  }
`;

const GQLDeleteChallenge = gql`
  mutation deleteChallenge($id: ID!) {
    deleteChallenge(id: $id)
  }
`;

const GQLJoinChallenge = gql`
  mutation joinChallenge($id: ID!) {
    joinChallenge(id: $id) {
      id
    }
  }
`;

const GQLLeaveChallenge = gql`
  mutation leaveChallenge($id: ID!) {
    leaveChallenge(id: $id) {
      id
    }
  }
`;

export { GQLUpdateChallenge, GQLDeleteChallenge, GQLJoinChallenge, GQLLeaveChallenge };
