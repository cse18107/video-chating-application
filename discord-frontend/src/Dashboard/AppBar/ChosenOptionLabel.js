import React from 'react';
import { Typography } from '@mui/material';
import {connect} from 'react-redux';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const ChosenOptionLabel = ({name}) => {
    
    return <div>{name?<Chip label={<Typography>{name}</Typography>} style={{color:'white'}} variant="outlined" />:""}</div>;
//     console.log(name);
//   return (
//     <Typography
//         sx={{ fontSize:'16px', color:'white', fontWeight:'bold' }}
//     >
//         {/* {`${name ? `Chosen conversation ${(name)=>nameAvatar(name)}` : ""}`} */}
//         {`${name? `Chosen conversation`:""}`}
//     </Typography>
//   );
};

const mapStoreStateToProps = (state) =>{
    return {
        name:state.chat.chosenChatDetails?.name,
    }
}



export default connect(mapStoreStateToProps)(ChosenOptionLabel);