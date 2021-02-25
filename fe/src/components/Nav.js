import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageNav = styled.nav`
  padding: 1em;
  @media (min-width: 640px) {
    width: 200px;
    overflow-y: auto;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  line-height: 1.5;

  a {
    font-size: 1.25rem;
  }
`;

export default function Nav() {
  return (
    <PageNav>
      <NavList>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/privacy">Privacy</Link></li>
        <li><Link to="/challenges">Challenges</Link></li>
        <li><Link to="/login">Login</Link></li>
      </NavList>
    </PageNav>
  );
};
