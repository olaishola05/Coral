import React from 'react'
import HeaderText from './HeaderText'
import Box from '@mui/material/Box';
import TextInput from './TextInput';
import CustomButton from './CustomButton';
import Typography from '@mui/material/Typography';
import { useNavigation } from '../../hooks/useNavigation';
import { styled } from '@mui/material/styles';

const StyledContainer = styled('div')(({ theme }) => ({
  form:{
    width: '320px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '32px'
  },
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


const ForgotPassword = () => {
  const header = (<span>Do you forgot your<br /> password?</span>)
  const navigate = useNavigation();
  return (
    <StyledContainer>
      <HeaderText
        header={header}
        text='Insert your email and we will send you a link in your email box to reset your password.'
        headerStyle={{ width: '320px', marginBottom: '50px' }}
        customStyles={{ fontSize: '24px', lineHeight: '36px' }}
      />
      <Box component='form' sx={{}}>
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
          onClick={() => navigate('email-sent')}
        >
          Resend Password
        </CustomButton>
        <Typography variant="body1" sx={{ color: '#5A5869' }}>
          Go back to<CustomButton
            type='submit'
            variant='text'
            color='success'
            onClick={() => { navigate('/login') }}
            btnStyles={{ width: '0px', color: 'success' }}
          >
            Login
          </CustomButton>
        </Typography>
      </Box>

    </StyledContainer>
  )
}

export default ForgotPassword