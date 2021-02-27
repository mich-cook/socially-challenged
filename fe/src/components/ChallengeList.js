import React from "react";
import styled from "styled-components";

import Challenge from "./Challenge.js";

const ChallengeList = styled.ul`
  margin: 0; padding: 0;
`;

export default ({ challenges }) => {
  return (
    <ChallengeList>
      {challenges.map(challenge => {
        return <Challenge challenge={challenge} key={challenge.id} />;
      })}
    </ChallengeList>
  );
};
