import React from 'react'
import HeaderText from './HeaderText'
import Box from '@mui/material/Box';
import TextInput from './TextInput';
import CustomButton from './CustomButton';

const Profile = () => {
  return (
    <div>
      <HeaderText
        header='Complete your profile'
        text='Insert all your info to proceed with your workspace'
        headerStyle={{ marginBottom: '50px' }}
      />
      <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
    </div>
  )
}

export default Profile