import React, { useEffect } from "react";

import Button from "../components/Button.js";

export default function Challenges() {

  useEffect(() => {
    document.title = `Socially Challenged | Challenges`;
  });

  return (
    <React.Fragment>
      <p>List of challenges and ability to create new one</p>
      <Button>Create Challenge</Button>
    </React.Fragment>
  );
};
