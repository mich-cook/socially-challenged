import React from "react";
import styled from "styled-components";

const UserListItem = styled.li`
  padding-top: 0.5rem;
`;

export default ({ user }) => {
  return <UserListItem>{user.displayName}</UserListItem>;
};
