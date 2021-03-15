import React from "react";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
import styled from "styled-components";
import { useQuery } from "@apollo/client";

import UserList from "./UserList.js";
import ChallengeControls from "./ChallengeControls.js";

import { GQLLoggedIn } from "../gql/query.js";

const ChallengeListItem = styled.li`
  list-style-type: none;
  margin: 0; padding: 0;
  padding-top: 0.5rem;
  max-width: 640px;
`;

const ChallengeRow = styled.p`
  margin: 0; padding: 0;
`;

export default ({ challenge }) => {

  const { loading, data, error } = useQuery(GQLLoggedIn);
  if (loading === true) return <p>Loading data.</p>;
  if (error !== undefined) return <p>Error loading data.</p>;

  return (
    <ChallengeListItem>
      <ChallengeRow><Link to={`challenge/${challenge.id}`}>{challenge.id}</Link> by {challenge.owner.displayName} with {challenge.participantCount} participant(s)</ChallengeRow>
      <ChallengeRow>Created: {format(parseISO(challenge.createdAt), `MMM do, yyyy`)}</ChallengeRow>
      <ChallengeRow>Metrics: {challenge.metrics}</ChallengeRow>
      {data.lilo.isLoggedIn === true ? (   // TODO: revisit this. obviously not enthusiastic about else
        <ChallengeRow><ChallengeControls challenge={challenge} /></ChallengeRow>
      ) : (
        <ChallengeRow></ChallengeRow>
      )}
      <UserList users={challenge.participants} />
    </ChallengeListItem>
  );
};
