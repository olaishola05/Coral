import React from 'react'
import HeaderText from './HeaderText'
import Box from '@mui/material/Box';
import TextInput from './TextInput';
import CustomButton from './CustomButton';
import Typography from '@mui/material/Typography';
import { useNavigation } from '../../hooks/useNavigation';


const ForgotPassword = () => {
  const header = (<span>Do you forgot your<br /> password?</span>)
  const navigate = useNavigation();
  return (
    <div>
      <HeaderText
        header={header}
        text='Insert your email and we will send you a link in your email box to reset your password.'
        headerStyle={{ width: '320px', marginBottom: '50px' }}
        customStyles={{ fontSize: '24px', lineHeight: '36px' }}
      />
      <Box component='form' sx={{
        width: '320px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '32px'
      }}>
        <TextInput
          label='Email'
          value=''
          placeholder='martest@lastingdynamics.com'
          type='text'
          name='email'
          onChange={() => { console.log('change') }}
          required
          size='small'
          color='secondary'
        />
        <CustomButton
          type='submit'
          variant='contained'
        >
          Resend Password
        </CustomButton>
        <Typography variant="body1" sx={{ color: '#5A5869' }}>
          Go back to<CustomButton
            type='submit'
            variant='text'
            color='success'
            onClick={() => { navigate('/') }}
            btnStyles={{ width: '0px', color: 'success' }}
          >
            Login
          </CustomButton>
        </Typography>
      </Box>

    </div>
  )
}

export default ForgotPassword