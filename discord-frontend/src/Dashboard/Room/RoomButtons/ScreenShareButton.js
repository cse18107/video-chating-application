import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import * as webRTCHandler from '../../../realTimeComunication/webRTCHandler';
 

const constraints = {
  audio: false,
  video:true,
}

const ScreenShareButton = ({
  localStream,
  screenSharingStream,
  setScreenSharingStream,
  isScreenSharingActive,
}) => {
  const handleScreenShareToggle = async () => {
    if(!isScreenSharingActive) {
      let stream = null;
      try {
        stream =await navigator.mediaDevices.getDisplayMedia(constraints);
      }catch(err){
        console.log('error occurred when trying to get an access to screen ')
      }

      if(stream) {
        setScreenSharingStream(stream);
        webRTCHandler.switchOutgoingTracks(stream);
      }
    }else{
      webRTCHandler.switchOutgoingTracks(localStream);

        screenSharingStream.getTracks().forEach(t=>t.stop());
        setScreenSharingStream(null);
      }
  };
  return (
    <IconButton onClick={handleScreenShareToggle} style={{ color: "white" }}>
      {isScreenSharingActive ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
