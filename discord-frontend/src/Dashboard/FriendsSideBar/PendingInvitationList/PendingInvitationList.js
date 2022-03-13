import React from 'react'
import { styled } from '@mui/system';
import PendingInvitationListItem from './PendingInvitationListItem';


const DUMMY_INVITATIONS = [
  {
    _id:'1',
    senderId:{
      username:'Mark',
      mail:'dummy@gmail.com'
    }
  },
  {
    _id:'2',
    senderId:{
      username:'Saikat',
      mail:'saikat@gmail.com'
    }
  },
  {
    _id:'3',
    senderId:{
      username:'Diptaru',
      mail:'diptaru@gmail.com'
    }
  },
  {
    _id:'4',
    senderId:{
      username:'Soumyadipmaity',
      mail:'soumydip@gmail.com'
    }
  }
];


const MainContainer = styled('div')({
    width:"100%",
    height:'22%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    overflow:'auto'
});


export const PendingInvitationList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map(invitation=>{
        return (
          <PendingInvitationListItem
            key={invitation._id}
            id={invitation._id}
            username={invitation.senderId.username}
            mail={invitation.senderId.mail}
          />
        );
      })}
    </MainContainer>
  )
}
