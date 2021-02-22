import React, { useEffect } from "react";

export default function Privacy() {

  useEffect(() => {
    document.title = `Socially Challenged | Privacy`;
  });

  return (
    <React.Fragment>
      <p>Explain what data we get and how we don't care about the user data other than authentication and authorization needed for site funcitonality.</p>
    </React.Fragment>
  );
};


