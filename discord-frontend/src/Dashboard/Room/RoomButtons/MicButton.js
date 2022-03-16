import React,{useState} from 'react';
import IconButton from '@mui/material/IconButton';
import MicButtonIcon from '@mui/icons-material/Mic';
import MicButtonOffIcon from '@mui/icons-material/MicOff';

const MicButton = () => {
    const [micEnabled,setMicEnabled] = useState(true);
    const handleToggleMic = () => {
        setMicEnabled(!micEnabled);
    }
  return (
    <IconButton onClick={handleToggleMic} style={{color:'white'}}>
       {micEnabled ? <MicButtonIcon/> : <MicButtonOffIcon/>}
    </IconButton>
  )
}

export default MicButton