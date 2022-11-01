import React from 'react'
import RedirectInfo from '../../shared/components/RedirectInfo';
import CustomPrimaryButton from './../../shared/components/CustomPrimaryButton';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const LoginPageFooter = ({handleLogin,isFormValid}) => {
  let navigate = useNavigate();

  const handlePushToRegisterPage=()=>{
    navigate('/register');
  }

  const getFormValidMessage=()=>{
    return 'Please to log in'

  }
const getFormNotValidMessage=()=>{
  return 'enter correct email address and password should conatins between 6 and 12 caracteres '


}



  return (
    <>
    <Tooltip
    title={!isFormValid ? getFormNotValidMessage():getFormValidMessage() }>
    <div>
      <CustomPrimaryButton
    label="Login"
    additionalStyles={{marginTop:'30px' }}
    disabled={!isFormValid}
    onClick={handleLogin}
    />
    </div>
    </Tooltip>
        <RedirectInfo
        text='need an account?'
        redirectText=" create an account"
        additionalStyles={{marginTop:'5px'}}
        redirectHandler={handlePushToRegisterPage}

        
        />

    </>
  )
}

export default LoginPageFooter