import React from 'react'
import MainPageButton from './MainPageButton';
import { styled } from '@mui/system';

const MainContainer = styled('div')({
  width:'72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#202225'
})

const SideBar = () => {
  return (
    <MainContainer>
        <MainPageButton/>
    </MainContainer>
  )
}

export default SideBar