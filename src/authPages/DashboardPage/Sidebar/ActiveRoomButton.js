import React from 'react'
import Button from '@mui/material/Button'
import Tooltip  from '@mui/material/Tooltip'
import Avatar from '../../../shared/components/Avatar'
import * as roomHandler from '../../../realtimeCommunication/roomHandler'
const ActiveRoomButton = ({
    creatorUsername,
    roomId,
    amountOfPaticipants,
    isUserInRoom

}) => {
    const handleJoinActiveRoom = () => {
        if (amountOfPaticipants <4) {
            //join room with
            roomHandler.joinRoom(roomId)
        }
    }
const activeRoomButtonDisabled = amountOfPaticipants>3 
const roomTitle = `Creator ${creatorUsername}. Connected ${amountOfPaticipants}`

  return (
    <Tooltip title={roomTitle}>
        <div>
                <Button 
                style={{ 
                    width: '48px',
                    height: '48px',
                    borderRadius: '16px',
                    margin: 0,
                    padding:0,
                    minWidth: 0,
                    marginTop: '10px',
                    color: 'white',
                    backgroundColor: '#5865F2'
            
                }}
                disabled={activeRoomButtonDisabled || isUserInRoom}
                onClick={handleJoinActiveRoom}
                >
                <Avatar username={creatorUsername}/>
                </Button>
        </div>
        </Tooltip>
  )
}

export default ActiveRoomButton