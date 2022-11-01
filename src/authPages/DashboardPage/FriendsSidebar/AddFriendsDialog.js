import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Typography from "@mui/material/Typography";
import { validatemail } from "../../../shared/utils/validators";
import InputwithLabel from './../../../shared/components/InputwithLabel';
import CustomPrimaryButton from './../../../shared/components/CustomPrimaryButton';
import { connect } from "react-redux";
import { getActions} from "../../../store/actions/friendsActions"

const AddFriendsDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {},
}) => {
  const [mail, setMail] = useState("");
  const [isFormValid, setIsFormValid] = useState("");
  const handleSendInvitation = () => {
    //send friend request
    sendFriendInvitation({
      targetMailAddress:mail
    },
    handleCloseDialog
    )

  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail("");
  };

  useEffect(() => {
    setIsFormValid(validatemail(mail));
  }, [mail, setIsFormValid]);
  return (
    <div>
      <Dialog open={isDialogOpen} close={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a friend</Typography>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <Typography>
              enter e-mail address of friend which you would like to invite
            </Typography>
            </DialogContentText>

            <InputwithLabel 
            label="mail"
            type="text"
            value={mail}
            setvalue={setMail}
            placeholder='Enter mail address'
            
            />
            <DialogActions>
              <CustomPrimaryButton
              onClick={handleSendInvitation}
              label="Send Invitation"
              disabled={!isFormValid}
              additionalStyles={{
                marginLeft:"17px",
                marginRight:"15px",
                marginTop:"10px"
              }}

              />
            </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const mapActionToProps = (dispatch)=>{
  return {
    ...getActions(dispatch)
  }
}
export default connect(null,mapActionToProps) (AddFriendsDialog);
