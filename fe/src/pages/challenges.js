import React, { useEffect } from "react";

export default function Challenges() {

  useEffect(() => {
    document.title = `Socially Challenged | Challenges`;
  });

  return (
    <React.Fragment>
      <p>List of challenges and ability to create new one</p>
    </React.Fragment>
  );
};
