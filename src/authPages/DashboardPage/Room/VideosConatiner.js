import React from 'react'
import { styled } from "@mui/system";
import { connect } from 'react-redux';
import Video from './Video';
const MainContainer = styled("div")({
    height:"85%",
    width:"100%",
    display:"flex",
    flexWrap: "wrap",
    });
const VideosConatiner = ({localStream,remoteStreams,screenSharingStream}) => {
  return (
    <MainContainer>
      <Video stream={screenSharingStream ? screenSharingStream:localStream} isLocalStream />
      {remoteStreams.map((strem)=><Video  key={strem.id} stream={strem}/>)}
    </MainContainer>
  )
}
const mapStoreStatetToProps = ({room})=>{
  return {
    ...room
  }
}

export default connect(mapStoreStatetToProps) (VideosConatiner)