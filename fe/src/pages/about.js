import React, { useEffect } from "react";

export default function About() {

  useEffect(() => {
    document.title = `Socially Challenged | About`;
  });

  return (
    <React.Fragment>
      <p>A site for coordinating challenge progress and results.</p>
    </React.Fragment>
  );
};

