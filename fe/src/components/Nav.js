import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/privacy">Privacy</Link></li>
        <li><Link to="/challenges">Challenges</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};
