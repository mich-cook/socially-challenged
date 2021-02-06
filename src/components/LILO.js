import React from "react";
import { Link, navigate } from "gatsby";

import { getUser, isLoggedIn, logout } from "../services/auth.js";

export default function LILO(props) {

  let greeting = <li>Welcome, Guest!</li>;
  if (isLoggedIn() === true) {
    greeting = <li>Welcome, <Link to={"/me"}>{getUser().name}</Link></li>;
  }

  let liloButton = null;

  if (isLoggedIn() === true) {
    liloButton = (
    <a href="/logout" onClick={
      e => {
          e.preventDefault();
          logout(() => navigate(`/logout`));
        }}>Log Out</a>
    );
  } else {
    liloButton = (
    <a href="/login">Log In</a>
    );
  }

  return (
    <ul id="lilo" style={{ "margin": 0, "padding": 0, "display": "flex", "listStyleType": "none", "justifyContent": "flex-end" }}>
      {greeting}
      <li style={{ "marginLeft": "1rem" }}>{liloButton}</li>
    </ul>
  );
};
