import React ,{useState}from 'react'
import { styled } from "@mui/system";
import ResizeRoomButton from './ResizeRoomButton'
import VideosConatiner from './VideosConatiner';
import RoomButtons from './RoomButtons/RoomButtons';
const MainContainer = styled("div")({
  
  position: "absolute",
  borderRadius:"8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:"#202225"   
  });

  const fullScreenRoomStyle ={
    width: "100%",
    height: "100vh",
  };
  const minimizedRoomStyle ={
    bottom: "0px",
    right: "0px",
    width: "30%",
    height: "40vh",

  }
const Room = () => {
    const [isRoomMinimized,setIsRoomminimized]=useState(true);
    const roomResizedHandler = ()=>{
        setIsRoomminimized(!isRoomMinimized)
    }
  return (
    <MainContainer style={isRoomMinimized ? minimizedRoomStyle:fullScreenRoomStyle}>
        <VideosConatiner/>
        <RoomButtons/>
        
        <ResizeRoomButton
        isRoomMinimized={isRoomMinimized}
        handleRoomResize={roomResizedHandler}
        
        />

    </MainContainer>
  )
}

export default Room