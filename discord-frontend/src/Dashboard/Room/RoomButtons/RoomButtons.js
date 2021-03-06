import React from 'react';
import {styled} from '@mui/system';
import ScreenShareButton from './ScreenShareButton';
import MicButton from './MicButton';
import CloseRoomButton from './CloseRoomButton';
import CameraButton from './CameraButton';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/roomActions';


const MainContainer = styled('div')({
    height:'15%',
    width:'100%',
    backgroundColor:'#5865f2',
    borderTopLeftRadius:'8px',
    borderRopRightRadius:'8px',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
});


const RoomButtons = (props) => {

  const { localStream, isUserJoinedWithOnlyAudio} = props;
  console.log(isUserJoinedWithOnlyAudio)

  return (
    <MainContainer>
        {!isUserJoinedWithOnlyAudio && <ScreenShareButton {...props} />}
        <MicButton localStream={localStream}/>
        <CloseRoomButton/>
        {!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream}/>}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({room}) => {
  console.log(room)
  return {
    ...room
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  }
}

// export default connect(mapActionsToProps, mapStoreStateToProps)(RoomButtons);
export default connect( mapStoreStateToProps, mapActionsToProps)(RoomButtons);