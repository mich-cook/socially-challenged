import React from "react";

export default function Header(props) {
  return (
    <header>
      <h1>{props.heading}</h1>
      <h2>{props.subheading}</h2>
    </header>
  );
};
