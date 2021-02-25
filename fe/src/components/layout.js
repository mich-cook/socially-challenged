import React from "react";
import styled from "styled-components";

import Header from "./header.js";
import Footer from "./footer.js";
import Nav from "./Nav.js";

const Content = styled.main`
  @media(min-width: 640px) {
    display: flex;
  }
`;

const Main = styled.main`
  @media (min-width: 640px) {
    flex: 1;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <Header heading="Socially Challenged" subheading="Social Fitness Group Challenges" />
      <Content>
        <Nav />
        <Main>{children}</Main>
      </Content>
      <Footer />
    </>
  );
}
