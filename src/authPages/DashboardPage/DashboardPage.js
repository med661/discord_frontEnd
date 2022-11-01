import React,{useEffect} from 'react'
import { styled } from "@mui/system";
import Sidebar from './Sidebar/Sidebar';
import FriendsSidebar from './FriendsSidebar/FriendsSidebar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';
import { logout } from './../../shared/utils/auth';
import { connect } from 'react-redux';
import  {getActions}  from '../../store/actions/authActions'
import { connectWebSocketServer } from '../../realtimeCommunication/socketConnection';
import Room from './Room/Room';
const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});
 const DashboardPage = ({setUserDetails,isUserInRoom}) => {
 useEffect(() =>{
  const userDetails=  localStorage.getItem('user')
 // console.log({userDetails});
  if(!userDetails){
    logout();
  }else{
    setUserDetails(JSON.parse(userDetails));
   // console.log({setUserDetails});
   connectWebSocketServer(JSON.parse(userDetails))
    }

  

 },[])
 
 
  return (
    <Wrapper>
      <Sidebar />
      <FriendsSidebar />
      <Messenger/>
      <AppBar/>
      {isUserInRoom && <Room/>}

    </Wrapper>
  )
}

const mapStoreStatetToProps = ({room})=>{
  return {
    ...room  
  }
}
const mapActionToProps = (dispatch)=>{
  return {
    ...getActions(dispatch)
  };
};
export default connect(mapStoreStatetToProps,mapActionToProps)(DashboardPage)
