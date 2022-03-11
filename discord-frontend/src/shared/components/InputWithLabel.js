import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const Wrapper = styled('div')({
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    width:'100%',
})

const Label = styled('p')({
    color:'#b9bbbe',
    textTransform:'uppercase',
    fontWeight:'600',
    fontSize:'16px',
    marginTop:'15px'
})

const Input = styled('input')({
    flexGrow:1,
    height:'40px',
    border:'1px solid black',
    borderRadius:'5px',
    color:'#dcddde',
    background:'#35393f',
    fontSize:'16px',
    padding:"0 5px",
    marginTop:'15px'
})

const InputWithLabel = (props) => {
    const {value,setValue,label,type,placeholder} = props;
  
  const handleValueChange = (event) => {
    setValue(event.target.value);
  }

    return (
    <Wrapper>
      <Label>
        <Typography>{label}</Typography>
      </Label>
      <Input
        value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder}
      />
    </Wrapper>
  )
}

export default InputWithLabel