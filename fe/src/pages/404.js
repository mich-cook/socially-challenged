import React, { useEffect } from "react";

export default function NotFound() {

  useEffect(() => {
    document.title = `Socially Challenged | Page Not Found`;
  });

  return (
    <React.Fragment>
      <p>Couldn't find that page.</p>
    </React.Fragment>
  );
};

