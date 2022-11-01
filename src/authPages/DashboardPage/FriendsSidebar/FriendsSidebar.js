import React from 'react'
import { styled } from "@mui/system";

import AddFriendbutton from "./AddFriendbutton"
import FriendsTitle from './FriendsTitle';
import FriendsList from './FriendsList/FriendsList';
import PendingInvitationsList from './PendingInvitationsList/PendingInvitationsList';
const MainContainer = styled("div")({
    width: "224px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#2F3136",

  
  });
const FriendsSidebar = () => {
  return (
    <MainContainer>
      <AddFriendbutton />
      <FriendsTitle title="Private Messages"/>
      <FriendsList />
      <FriendsTitle title="invitation" />
      <PendingInvitationsList />
      </MainContainer>
  )
}

export default FriendsSidebar