import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'
import  Box  from '@mui/material/Box'
import  IconButton  from '@mui/material/IconButton'
const InvitationDecisionButtons = ({
    rejectInvitationhandle,
    accpetInvitationhandler,    
    disabled
}) => {
  return (
    <Box sx={{
        display: 'flex',
    }}>
        <IconButton 
        style={{color: 'white'}} 
        disabled={disabled}
        onClick={accpetInvitationhandler}
        >
            <CheckIcon/>
        </IconButton>

        <IconButton 
        style={{color: 'white'}} 
        disabled={disabled}
        onClick={rejectInvitationhandle}
        >
            <ClearIcon/>
        </IconButton>


    </Box>
  )
}

export default InvitationDecisionButtons