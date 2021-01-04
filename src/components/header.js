import React from "react";

import styles from "./header.module.css";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <h1>{props.heading}</h1>
      <h2>{props.subheading}</h2>
    </header>
  );
};
