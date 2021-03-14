import React from "react";
import styled from "styled-components";

import User from "./User.js";

const UserList = styled.ul`
  margin: 0;
`;

export default ({ users }) => {
  return (
    <UserList>
      {users?.map(user => {
        return <User user={user} key={user.id} />;
      })}
    </UserList>
  );
};
