import React from 'react'
import HeaderText from './HeaderText'
import Box from '@mui/material/Box';
import TextInput from './TextInput';
import CustomButton from './CustomButton';
import { styled } from '@mui/material/styles';

const StyledContainerDiv = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '10px 20px',

    form : {
      width: '100%',
      alignItems: 'center',
      gap: '15px',
    },
  },
}))

const Profile = () => {
  return (
    <StyledContainerDiv>
      <HeaderText
        header='Complete your profile'
        text='Insert all your info to proceed with your workspace'
        headerStyle={{ marginBottom: '30px' }}
      />
      <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          <TextInput
            label='Name'
            placeholder='Marino'
            type='text'
            value=''
            size='small'
            color='secondary'
            onChange={() => { }}
            required
            InputStyles={{ width: '199px' }}
          />

          <TextInput
            label='Surname'
            placeholder='Lasting'
            type='text'
            value=''
            size='small'
            color='secondary'
            onChange={() => { }}
            required
            InputStyles={{ width: '199px' }}
          />
        </Box>
        <TextInput
          label='Password'
          placeholder='Password'
          type='text'
          value=''
          size='small'
          color='secondary'
          onChange={() => { }}
          required
        />

        <TextInput
          label='Reset Password'
          placeholder='Reset Password'
          type='text'
          value=''
          size='small'
          color='secondary'
          onChange={() => { }}
          required
        />

        <CustomButton
          color='success'
          variant='contained'
          type='submit'
          onClick={() => { }}
        >
          Complete now
        </CustomButton>
      </Box>
    </StyledContainerDiv>
  )
}

export default Profile