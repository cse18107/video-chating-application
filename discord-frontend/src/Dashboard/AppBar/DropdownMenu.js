import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {logout} from '../../shared/utils/auth';
import { getActions } from '../../store/actions/roomActions';
import { connect  } from 'react-redux';

const DropdownMenu = ({ audioOnly, setAudioOnly }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAudioOnlyChange = () => {
    setAudioOnly(!audioOnly);
  }

  return (
    <div>
      <IconButton onClick={handleMenuOpen} style={{color:'white'}}>
          <MoreVertIcon/>
      </IconButton>
      <Menu
        id="basic-menu"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
        <MenuItem onClick={handleAudioOnlyChange}>
          {audioOnly ? 'Audio Only Enabled': 'Audio Only Disabled'}
        </MenuItem>
       
      </Menu>
    </div>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  }
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(mapStoreStateToProps,mapActionsToProps)(DropdownMenu);