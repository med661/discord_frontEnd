import React from 'react'
import { Typography } from '@mui/material'
import { connect } from 'react-redux'

const ChosenOptionLabel = ({name}) => {
  return (
    <Typography
    sx={{fontsize:'16px',color:'white',fontweight:'bold'}}
    >
        
        {`${name ?  `Chosen conversation : ${name}`:""}`}
        
        </Typography>
  )
}

const mapStoreStatetToProps = (state)=>{
    return {
        name:state.chat.chosenChatDetails?.name,
    }

}

export default connect(mapStoreStatetToProps)(ChosenOptionLabel)