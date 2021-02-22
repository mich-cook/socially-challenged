import React from "react";

export default function Header(props) {
  return (
    <header style={{padding: `0.5rem 1rem` }}>
      <h1>{props.heading}</h1>
      <h2>{props.subheading}</h2>
    </header>
  );
};
