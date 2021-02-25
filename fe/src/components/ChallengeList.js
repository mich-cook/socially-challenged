import React from "react";

import Challenge from "./Challenge.js";

export default ({ challenges }) => {
  return (
    <ul>
      {challenges.map(challenge => {
        return <Challenge challenge={challenge} key={challenge.id} />;
      })}
    </ul>
  );
};
