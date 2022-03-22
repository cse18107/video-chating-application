import React from 'react'
import MainPageButton from './MainPageButton';
import { styled } from '@mui/system';
import CreateRoomButton from './CreateRoomButton.js';
import { connect } from 'react-redux';
import ActiveRoomButton from './ActiveRoomButton.js';

const MainContainer = styled('div')({
  width:'72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#202225'
})

const SideBar = ({activeRooms, isUserInRoom}) => {
  // console.log(activeRooms)
  return (
    <MainContainer>
        <MainPageButton/>
        <CreateRoomButton isUserInRoom={isUserInRoom}/>
        {activeRooms.map(room => {
          return  <ActiveRoomButton
            roomId={room.roomId}
            creatorUsername={room.creatorUsername}
            amountOfParticipants={room.participants.length}
            key={room.roomId}
            isUserInRoom={isUserInRoom}
          />})

          
        }
    </MainContainer>
  )
};

const mapStoreStateToProps = ({ room }) => {
  // console.log(room.activeRooms)
  return {
    ...room,
  }
}

export default connect(mapStoreStateToProps)(SideBar);