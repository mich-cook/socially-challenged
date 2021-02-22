import React, { useEffect } from "react";

export default function Login() {

  useEffect(() => {
    document.title = `Socially Challenged | Login`;
  });

  return (
    <React.Fragment>
      <p>Log in to join and create challenges as well as update your progress in existing challenges.</p>
    </React.Fragment>
  );

};
