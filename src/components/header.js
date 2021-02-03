import React from "react";
import { Link } from "gatsby";

import styles from "./header.module.css";

const ListLink = props => (
  <li style={{ "display": "inline-block", "marginRight": "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);


export default function Header(props) {
  return (
    <>
    <div style={{ "fontFamily": "sans-serif" }}>
      <ul style={{ "textAlign": "right" }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
      </ul>
    </div>
    <header className={styles.header} style={{padding: `0.5rem 1rem` }}>
      <h1>{props.heading}</h1>
      <h2>{props.subheading}</h2>
    </header>
    </>
  );
};
