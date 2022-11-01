import React ,{useState,useEffect} from 'react'

import { Typography } from '@mui/material';
import AuthBox from './../../shared/components/AuthBox';
import RegisterPageInputs from './RegisterPageInputs';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../shared/utils/validators';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions'
import { useNavigate } from 'react-router-dom';

const RegisterPage=({register})=> {
  const [mail, setMail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isFormValid,setIsFormValid] = useState(false)
  const navigate = useNavigate();

  const handleRegister=()=>{
    const userDetails={
      mail,
      password,
      username
    }
    register(userDetails,navigate)
  console.log({mail,password,username,isFormValid});
}
useEffect(() => {
  setIsFormValid(validateRegisterForm({
    mail,
    password,
    username
  }))
  
}, [mail,setIsFormValid,password,username])

  return (
    <AuthBox>
      <Typography variant="h5" sx={{color: 'white'}}>
        Create an account
        </Typography> 
        <RegisterPageInputs
        mail={mail} 
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        />
        <RegisterPageFooter
        handleRegister={handleRegister}
        isFormValid={isFormValid}
        />
      
      </AuthBox>
  )
}

const mapActionToProps = (dispatch)=>{
  return {
    ...getActions(dispatch)
  }
}

export default connect(null,mapActionToProps) (RegisterPage)