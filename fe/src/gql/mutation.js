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

export { GQLUpdateChallenge };
