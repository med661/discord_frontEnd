import React from 'react'
import { styled } from "@mui/system";
import { Typography } from '@mui/material'

const Wrapper = styled("div")({
    flexGrow: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   
  });
const WelcomeMessage = () => {
  return (
    <Wrapper>
        <Typography 
        variant="h6"
         sx={{color: "white"}}
        >
            to start chating -choose conversation
        </Typography>
    </Wrapper>
  )
}

export default WelcomeMessage