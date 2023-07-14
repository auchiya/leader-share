import React from "react";
import styled from "styled-components";
import Avatar from "react-avatar";
import { UserContext } from "./UserContext";

const TopBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
`;

const UserAvatar = styled(Avatar)`
  margin-left: 10px;
`;

const TopBar = () => {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error("TopBar must be used within a UserProvider");
  }

  const { user, login, logout } = context;

  return (
    <TopBarContainer>
      {user ? (
        <>
          <UserAvatar name={user.name} size="50" round={true} />
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login("Player 3")}>Login</button>
      )}
    </TopBarContainer>
  );
};

export default TopBar;
