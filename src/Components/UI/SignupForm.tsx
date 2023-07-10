import React from 'react'
import Container from '@mui/material/Box'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextInput from './TextInput'
import CustomCheckbox from './CustomCheckbox'
import CustomButton from './CustomButton'
import HeaderText from './HeaderText'
import { useNavigation } from '../../hooks/useNavigation'
import { styled } from '@mui/material/styles'
import { useFormik } from 'formik';
import * as yup from 'yup';


const StyledContainer = styled(Container)(({ theme }) => ({
  width: '422px',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '20px',
  order: 1,

  form : {
    width: '422px',
    height: '361px',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: '20px',
    order: 1,
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    alignItems: 'center',
    gap: '10px',
    padding: '0 20px',

    form: {
      width: '100%',
      alignItems: 'center',
      gap: '10px',
    },
  },
}))

const validationSchema = yup.object({
  workspace: yup
    .string()
    .min(3, 'Workspace name should be of minimum 3 characters length')
    .required('Workspace name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  terms: yup
    .boolean()
    .oneOf([true], 'You must accept the terms and conditions'),
  authorization: yup
    .boolean()
    .oneOf([true], 'You must accept the terms and conditions'),
})

const SignupForm = () => {
  const navigate = useNavigation()
  const formik = useFormik({
    initialValues: {
      workspace: '',
      email: '',
      terms: false,
      authorization: false
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate('/signup/complete-profile', { state: values })
    },
  });

  return (
    <StyledContainer>
      <HeaderText
        header='Create your workspace'
        text='Coraly is the tool to manage your work processes form the same place'
      />

      <Box component='form'>
        <TextInput
          label="Workspace Name"
          placeholder="Enter your workspace name"
          type="text"
          name="workspace"
          onChange={formik.handleChange}
          value={formik.values.workspace}
          onBlur={formik.handleBlur}
          error={formik.touched.workspace && Boolean(formik.errors.workspace)}
          helperText={formik.touched.workspace && formik.errors.workspace ? formik.errors.workspace : ''}
          size='small'
          color='secondary'
          required
        />

        <TextInput
          label="Email"
          placeholder="Enter your email address"
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
          required
          size='small'
          color='secondary'
        />


        <CustomCheckbox
          label={`Agree with Terms and Conditions, Privacy Policy and Cookie Policy`}
          name="terms"
          onChange={formik.handleChange}
          checked={formik.values.terms}
          error={formik.values.terms && Boolean(formik.errors.terms)}
          helperText={formik.touched.terms && formik.errors.terms ? formik.errors.terms : ''}
        />

        <CustomCheckbox
          label="I authorize Coraly to process my personal data in order to receive informational, promotional and commercial communications via e-mail."
          name="authorization"
          onChange={formik.handleChange}
          checked={formik.values.authorization}
          error={formik.touched.authorization && Boolean(formik.errors.authorization)}
          helperText={formik.touched.authorization && formik.errors.authorization ? formik.errors.authorization : ''}
        />

        <CustomButton
          type="submit"
          variant="contained"
          color="success"
          onClick={() => formik.handleSubmit()}
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

    </StyledContainer>
  )
}

export default SignupForm