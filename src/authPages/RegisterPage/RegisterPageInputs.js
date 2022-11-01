import React from 'react'
import InputwithLabel from '../../shared/components/InputwithLabel';

const RegisterPageInputs = (props) => {
    const {mail,setMail,password,setPassword,username,setUsername} = props;
  return (
    <>
    <InputwithLabel 
    value={mail}
    setvalue={setMail}
    label="email adress"
    type="text"
    placeholder="enter email adress"
    />
      <InputwithLabel 
    value={username}
    setvalue={setUsername}
    label="username"
    type="text"
    placeholder="enter a username"
    />
       <InputwithLabel 
    value={password}
    setvalue={setPassword}
    label="password"
    type="password"
    placeholder="enter password"
    />



    </>
  )
}

export default RegisterPageInputs