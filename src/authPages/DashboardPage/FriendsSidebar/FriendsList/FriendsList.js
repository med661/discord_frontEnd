import React from 'react'
import { styled } from "@mui/system";
import FriendsListItem from './FriendsListItem';
import { connect } from 'react-redux';


const MainContainer = styled("div")({
  
    flexGrow:1,
    width: "100%"
  });

  const checkOnloadUser=(friends=[],onlineUsers=[])=>{
    friends.forEach((f)=>{
      const isUserOnline = onlineUsers.find(user=> user.userId === f.id)
      f.isOnline= isUserOnline? true : false;

  });
  return friends
}
const FriendsList = ({friends,onlineUsers}) => {
  console.log({friends})
  return (
    <MainContainer>
      {checkOnloadUser(friends,onlineUsers).map((f)=>{
        return (
          <FriendsListItem 
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
          />
         
        )
      })}


    </MainContainer>
  )
}

const mapStoreStatetToProps=({friends}) =>{
  return {
    ...friends
  }
}
export default connect(mapStoreStatetToProps)(FriendsList);