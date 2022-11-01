import React from 'react'
import IconButton from '@mui/material/IconButton'
import CloseIconButton from '@mui/icons-material/Close'
import * as roomHandler from '../../../../realtimeCommunication/roomHandler'

const CloseRoomButton = () => {
    const handleLeaveRoom=() =>{
      roomHandler.leaveRoom()
    }
  return (
    <IconButton onClick={handleLeaveRoom} style={{color: 'white'}}>
        <CloseIconButton/>
       
    </IconButton>
  )
}



export default CloseRoomButton