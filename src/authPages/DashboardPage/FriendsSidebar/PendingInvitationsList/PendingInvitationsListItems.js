import React, { useState } from 'react'
import { Tooltip, Box, Typography } from '@mui/material';
import Avatar from '../../../../shared/components/Avatar'
import InvitationDecisionButtons from './InvitationDecisionButtons';
import {connect} from 'react-redux';
import { getActions } from "../../../../store/actions/friendsActions"
const PendingInvitationsListItems = ({
    id,
    mail,
    username,
    acceptFriendInvitation=()=>{},
    rejectFriendInvitation=()=>{}
}) => {
    const [ButtonsDisabled,setButtonsDisabled]=useState(false)
const HandleAcceptInvitation=()=>{
    acceptFriendInvitation({id})
    setButtonsDisabled(true)

}
const HandleRejectInvitation=()=>{

    rejectFriendInvitation({id})
    setButtonsDisabled(true)
}

  return (
    <Tooltip
    title={mail}
    >
        <div style={{width: '100%'}}>
            <Box 
            sx={{
                width: '100%',
                height: '42px',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
            >
                <Avatar username={username}/>
                <Typography
                
                sx={{
                    marginLeft:'7px',
                    fontWeight:700,
                    color: '#8e9297',
                    flexGrow:1,

                }}
                variant='subtitle1'
                >{username}</Typography>
                  <InvitationDecisionButtons 
            disabled={ButtonsDisabled}
            accpetInvitationhandler={HandleAcceptInvitation}
            rejectInvitationhandle={HandleRejectInvitation}
            />
            </Box>
          

        </div>
    </Tooltip>
  )
}


const mapActionToProps = (dispatch)=>{
    return {
        ...getActions(dispatch)
    }

}
export default connect(null,mapActionToProps)(PendingInvitationsListItems)