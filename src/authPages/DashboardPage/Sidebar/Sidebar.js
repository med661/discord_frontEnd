import React from 'react'
import { styled } from "@mui/system";
import MainPageButton from './MainPageButton';
import CreateRoomButton from './CreateRoomButton'
import { connect } from 'react-redux';
import ActiveRoomButton from './ActiveRoomButton';
const MainContainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#202225",
  
});
const Sidebar = ({activeRooms,isUserInRoom}) => {
  return (
    <MainContainer>
      <MainPageButton />
      <CreateRoomButton isUserInRoom={isUserInRoom}  />
      {activeRooms.map(room=>(
    
  <ActiveRoomButton
         roomId={room.roomId}
         creatorUsername={room.creatorUsername} 
         amountOfPaticipants={room.participants.length}
         key={room.roomId}
         isUserInRoom={isUserInRoom}
         />
      ))}
      </MainContainer>
  )
}
const mapStoreStatetToProps = ({room})=>{
  return {
    ...room
  }

}

export default connect(mapStoreStatetToProps)(Sidebar)