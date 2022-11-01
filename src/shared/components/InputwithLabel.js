import React from 'react'
import { styled } from "@mui/system";


const Wrapper = styled('div')({
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
})
const Label = styled('p')({
    color:"#b9bbbe",
    textTransform:'uppercase',
    fonstWeight: '600',
    fontSize:'16px'
})
const Input = styled('input')({
flexGrow:1,
height: '40px',
border:'1px solid black',
borderRadius:'5px',
color:'#dcddde',
background:"#35393f",
margin:0,
fontSize:'16px',
padding:"0 5px"

})

const InputwithLabel = (props) => {
    const {value ,setvalue,label,type,placeholder} = props;
  const handleValueChange=(e)=>{
    setvalue(e.target.value);
  }
    return (
    <Wrapper>
        <Label>{label}</Label>
        <Input
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={handleValueChange}
        />
        
            </Wrapper>
  )
}

export default InputwithLabel