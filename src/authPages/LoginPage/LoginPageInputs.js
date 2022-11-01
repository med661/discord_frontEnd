import React from 'react'
import InputwithLabel from './../../shared/components/InputwithLabel';

const LoginPageInputs = ({mail,setMail,password,setPassword}) => {
  return (

    <>
    <InputwithLabel
    value={mail} 
    setvalue={setMail}
    label="email"
    type="text"
    placeholder="enter email address"

   />
     <InputwithLabel
    value={password}  
    setvalue={setPassword}
    label="password"
    type="password"
    placeholder="enter email address"

   />
    </>)
  
}

export default LoginPageInputs