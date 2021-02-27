import React from "react";
import { format, parseISO } from "date-fns";

export default ({ challenge }) => {
  return (
    <li><p>{challenge.id} by {challenge.owner.displayName} with {challenge.participantCount} participant(s)</p>
        <p>Created: {format(parseISO(challenge.createdAt), `MMM do, yyyy`)}</p></li>
  );
};
