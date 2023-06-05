import React, { ChangeEvent } from 'react'
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
      gap: '20px',
    },
  },
}))

const ConfirmPassword
  = () => {

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
      throw new Error('Function not implemented.');
    }

    return (
      <StyledContainerDiv>
        <HeaderText
          header='Insert new password'
          text="Enter your new password to access the platform"
          headerStyle={{ width: '300px', marginBottom: '20px' }}
        />

        <Box component="form" sx={{
          width: '320px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '32px'
        }} noValidate autoComplete="off">

          <TextInput
            label="New Password"
            name="New Password"
            value={''}
            onChange={handleChange}
            placeholder="Enter your email"
            type='password'
            required
            color='secondary'
            size='small'
          />
          <TextInput
            label="Confirm Password"
            name="Confirm Password"
            value={''}
            onChange={handleChange}
            placeholder="Enter your email"
            type='password'
            required
            color='secondary'
            size='small'
          />

          <CustomButton
            type='submit'
            variant='contained'>
            Confirm new password
          </CustomButton>
        </Box>
      </StyledContainerDiv>
    )
  }

export default ConfirmPassword
