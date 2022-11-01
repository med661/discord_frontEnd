import React, { useState } from 'react'
//import { styled } from "@mui/system";
import CustomPrimaryButton from "../../../shared/components/CustomPrimaryButton"
import AddFriendsDialog from './AddFriendsDialog';

const additionalStyles ={
   marginTop:"10px",
   marginLeft:"5px",
    width: "80%",
    height: "30px",
    background: "#3ba55d",
  };

const AddFriendbutton = () => {
const [isDialogOpen, setIsDialogOpen] = useState(false)
    
  const handleOpenAddFriendDialog=()=>{
    setIsDialogOpen(true)

}
const handleCloseAddFriendDialog=()=>{
  setIsDialogOpen(false)
}
  return (
    <>

    <CustomPrimaryButton
    additionalStyles={additionalStyles}
    label="AddFriend"
    onClick={handleOpenAddFriendDialog}
    />
    <AddFriendsDialog
    isDialogOpen={isDialogOpen}
    closeDialogHandler={handleCloseAddFriendDialog}
    />
    
    </>
  )
}

export default AddFriendbutton