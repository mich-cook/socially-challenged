import React, { useEffect } from "react";
import { useMutation, gql } from "@apollo/client";

export default () => {

  useEffect(() => {
    document.title = `Socially Challenged | New Challenge`;
  });

  return (
    <p>Creating a new challenge now</p>
  );

};
