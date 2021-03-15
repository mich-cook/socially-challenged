import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GQLGetMe } from "../gql/query.js";

export default props => {

  const { loading, data, error } = useQuery(GQLGetMe);
  // not displaying loading/error messages since they're paragraphs which can't be displayed in paragraphs
  if (loading === true) return <></>;     // <p>Loading user info</p>;
  if (error !== undefined) return <></>;  // <p>Error loading user info</p>;

  return (
    <>
    {data.me.id === props.challenge.owner.id && (
      <Link to={`/challenge/${props.challenge.id}/edit`}>Edit</Link>
    )}
    </>
  );
};
