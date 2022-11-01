export const validateLoginForm=({mail,password})=>{
    const isMailValid=validatemail(mail);
    const isPasswordValid=validatePassword(password)
    return isMailValid && isPasswordValid
};
export const validateRegisterForm=({mail,password,username})=>{

return (
  validatemail(mail) && validatePassword(password) && isUserNameValid(username)
)
}

const validatePassword =(password)=>{
    return password.length > 6 && password.length <13;
}
export const validatemail=(mail) => {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailPattern.test(mail)  
}
const isUserNameValid =(username)=>{
  return username.length > 2 && username.length <13;
}