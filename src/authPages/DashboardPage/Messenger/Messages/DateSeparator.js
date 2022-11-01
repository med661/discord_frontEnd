import React from 'react'
import { styled } from "@mui/system";
const Separator = styled("div")({
    height: "1px",
    width: "95%",
    backgroundColor:"#9bbbbe",
    position: "relative",
    marginTop: "20px",
    marginBottom: "10px"

    });

    const DateLabel = styled("span")({
        backgroundColor:"#36393f",
        position: "absolute",
        left: "45%",
        top:'-10px',
        color:"#b9bbbe",
        padding:"0 5px",
        fontSize:"14px"

    })
const DateSeparator = ({date}) => {
  return (
    <Separator>
        <DateLabel>
            {date}
        </DateLabel>
        
        </Separator>
  )
}

export default DateSeparator