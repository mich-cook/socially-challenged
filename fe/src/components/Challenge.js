import React from "react";

export default ({ challenge }) => {
  return (
    <li>{challenge.id} by {challenge.owner.displayName} with {challenge.participantCount} participant(s)</li>
  );
};
