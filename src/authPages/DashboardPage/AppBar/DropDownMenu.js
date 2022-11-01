import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {IconButton }from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { logout } from './../../../shared/utils/auth';

import { getActions } from '../../../store/actions/roomActions';
import { connect } from 'react-redux';


const BasicMenu=({audioOnly,setAudioOnly})=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
 const handleAudioOnlyChange=()=>{
  setAudioOnly(!audioOnly)

 }

  return (
    <div>
      <IconButton onClick={handleMenuOpen} style={{color: 'white'}}>
        <MoreVertIcon />

      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
       
        <MenuItem onClick={handleAudioOnlyChange}>
          {audioOnly ? 'Audio only Enabled' : "Audio Only Disable"}
        </MenuItem>


      </Menu>
    </div>
  );
}
const mapStoreStatetToProps=({room})=>{
  return { 
    ...room
  }
}
const mapActionToProps = (dispatch)=>{
  return {
    ...getActions(dispatch)
  }
}
export default connect(mapStoreStatetToProps,mapActionToProps)(BasicMenu)