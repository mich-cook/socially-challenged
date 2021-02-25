import React from "react";
import styled from "styled-components";

const PageHeader = styled.header`
  padding: 0.5rem 1rem;
`;

const H1 = styled.h1`
  padding: 0;
  margin: 0;
`;

const H2 = styled.h2`
  padding: 0;
  margin: 0;
`;

export default function Header(props) {
  return (
    <PageHeader>
      <H1>{props.heading}</H1>
      <H2>{props.subheading}</H2>
    </PageHeader>
  );
};
