import React from 'react'
import Container from '@mui/material/Box'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextInput from './TextInput'
import CustomCheckbox from './CustomCheckbox'
import CustomButton from './CustomButton'
import HeaderText from './HeaderText'
import { useNavigation } from '../../hooks/useNavigation'

const SignupForm = () => {
  const navigate = useNavigation()
  const [data, setData] = React.useState({
    workspace: '',
    email: '',
    authorized: false,
    terms: false,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  return (
    <Container sx={{ width: '422px', display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '20px', order: 1 }}>
      <HeaderText
        header='Create your workspace'
        text='Coraly is the tool to manage your work processes form the same place'
      />

      <Box component='form' sx={{ width: '422px', height: '361px', display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '20px', order: 1 }}>
        <TextInput
          label="Workspace Name"
          placeholder="Enter your workspace name"
          type="text"
          name="workspace"
          onChange={(event) => handleChange(event)}
          required
          value={data.workspace}
          size='small'
          color='secondary'
        />

        <TextInput
          label="Email"
          placeholder="Enter your email address"
          type="text"
          name="email"
          onChange={(event) => handleChange(event)}
          required
          value={data.email}
          size='small'
          color='secondary'
        />


        <CustomCheckbox
          label={`Agree with Terms and Conditions, Privacy Policy and Cookie Policy`}
          name="terms"
          onChange={(event) => handleChange(event)}
          checked={data.terms}
        />

        <CustomCheckbox
          label="I authorize Coraly to process my personal data in order to receive informational, promotional and commercial communications via e-mail."
          name="terms"
          onChange={(event) => handleChange(event)}
          checked={data.terms}
        />

        <CustomButton
          type="submit"
          variant="contained"
          color="success"
          onClick={() => navigate('/signup/email-verification')}
        >
          Create now the account
        </CustomButton>

        <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: 'normal', lineHeight: '18px', color: '#6F6D7B', order: 1, height: '36px' }}>
          Already have an account?
          <CustomButton
            onClick={() => { navigate('/login') }}
            color='success'
            variant='text'
            btnStyles={{ width: '67px', color: 'secondary' }}
          >Sign in</CustomButton>
        </Typography>
      </Box>

    </Container>
  )
}

export default SignupForm