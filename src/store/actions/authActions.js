import * as api from '../../api';
import { openAlertMessage } from './alertActions';
export const authActions={
   SET_USER_DETAILS:'AUTH.SET_USER_DETAILS',
    
}
const setUserDetails=(userDetails)=>{
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails,
}

}
export const getActions =(dispatch) => {
  return {
    login:(userDetails,history)=>dispatch(login(userDetails,history)),
    register:(userDetails,history)=>dispatch(register(userDetails,history)),
    setUserDetails:(userDetails)=>dispatch(setUserDetails(userDetails))
  } 
}


 const login = (userDetails,history) =>{
    return async(dispatch)=>{
        const response = await api.login(userDetails)
       console.log({response});
        if (response.error) {
          
                dispatch(openAlertMessage(response.exception.response.data))
            
            //dispatch(openAlertMessage(response.exception.response.data))
      
            
        }else{
            const {userdetails} = response.data;
            localStorage.setItem("user",JSON.stringify(userdetails))
           // console.log(userdetails);
            dispatch(setUserDetails(userdetails))
            history('/dashboard')

        }
    }
}

 const register = (userDetails,history) =>{
    return async(dispatch)=>{
        const response = await api.register(userDetails)
        if (response.error) {
        const responseFormserver=response.exception?.response;
        if(responseFormserver.data!==undefined ){
            dispatch(openAlertMessage('something  went wrong'))

        }else{
            dispatch(openAlertMessage(response.exception.response.data))


        }

        }else{
            const {userdetails} = response?.data
            localStorage.setItem("user",JSON.stringify(userdetails))
            console.log({userdetails,response});
            dispatch(setUserDetails(userdetails))
            history('/dashboard')

        }
    }
}
