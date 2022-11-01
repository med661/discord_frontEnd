import React from 'react'
import RedirectInfo from '../../shared/components/RedirectInfo';
import CustomPrimaryButton from './../../shared/components/CustomPrimaryButton';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const RegisterPageFooter = ({handleRegister,isFormValid}) => {
  let navigate = useNavigate();

  const handlePushToLoginPage=()=>{
    navigate('/login');
  }

  const getFormValidMessage=()=>{
    return 'press to register'

  }
const getFormNotValidMessage=()=>{
  return 'Username should conatins between 3 and 12 characters and password should conatins between 6 and 12 caracters.Also correct e-mail address should provided'


}



  return (
    <>
    <Tooltip
    title={!isFormValid ? getFormNotValidMessage():getFormValidMessage() }>
    <div>
      <CustomPrimaryButton
    label="Register"
    additionalStyles={{marginTop:'30px' }}
    disabled={!isFormValid}
    onClick={handleRegister}
    />
    </div>
    </Tooltip>
        <RedirectInfo
        text='need an account?'
        redirectText="already have an account?"
        additionalStyles={{marginTop:'5px'}}
        redirectHandler={handlePushToLoginPage}

        
        />

    </>
  )
}

export default RegisterPageFooter