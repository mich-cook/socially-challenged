import React from "react";
import { format, parseISO } from "date-fns";
import styled from "styled-components";

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
  return (
    <ChallengeListItem><ChallengeRow>{challenge.id} by {challenge.owner.displayName} with {challenge.participantCount} participant(s)</ChallengeRow>
        <ChallengeRow>Created: {format(parseISO(challenge.createdAt), `MMM do, yyyy`)}</ChallengeRow></ChallengeListItem>
  );
};
