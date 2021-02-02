import React from "react";

export default function ChallengeList(props) {

  // if there's no data, don't bother rendering it
  // maybe later we'll add a message instead
  if ((props.challenges === undefined) || (props.challenges.length === 0)) {
    return null;
  }

  return (
    <table style={{ "border": "1px solid black", "width": "30%" }}>
      <thead><tr><th>{props.heading}</th></tr></thead>
      <tbody>
{props.challenges.map((challenge, i) => {
  return <tr key={i}><td>{challenge}</td></tr>;
})}
      </tbody>
    </table>
  );
};

