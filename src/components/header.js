import React from "react";

import styles from "./header.module.css";

export default function Header(props) {
  return (
    <header className={styles.header} style={{padding: `0.5rem 1rem` }}>
      <h1>{props.heading}</h1>
      <h2>{props.subheading}</h2>
    </header>
  );
};
