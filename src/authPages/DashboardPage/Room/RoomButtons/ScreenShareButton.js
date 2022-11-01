import React,{useState} from 'react'
import IconButton from '@mui/material/IconButton'
import ScreenShareIcon from '@mui/icons-material/ScreenShare'
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare'
import * as webRTCHandler from '../../../../realtimeCommunication/webRTCHandler'
const constraints={
    audio:false,
    video:true
}


const ScreenShareButton = ({
  localStream,
  screenSharingStream,
  setScreenSharingStream,
  isScreenSharingActive


}) => {
  const handleScreenShareToggle =async()=>{
   // setIsScreenShareActive(!isScreenShareActive)
   if(!isScreenSharingActive){
        let stream = null;
        try {
          stream = await navigator.mediaDevices.getDisplayMedia(constraints)
          
        } catch (err) {
          console.log("err when try to get access to screem share strem");
          
        }
      
        if (stream) {
          setScreenSharingStream(stream)
          webRTCHandler.switchOutgoingTracks(stream)
        }
      }else{

        //webRTCHandler switch outGoing tracks
        webRTCHandler.switchOutgoingTracks(localStream)

        screenSharingStream.getTracks().forEach(t=>t.stop())
        setScreenSharingStream(null)


      }
  }
return (
  <IconButton onClick={handleScreenShareToggle} style={{color: 'white'}}>
      {isScreenSharingActive ? <StopScreenShareIcon/>:<ScreenShareIcon/>}
  </IconButton>
)
}


export default ScreenShareButton