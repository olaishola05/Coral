import React from 'react'
import HeaderText from './HeaderText'
import Box from '@mui/material/Box';
import TextInput from './TextInput';
import CustomButton from './CustomButton';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { usePost, useNavigation } from '../../hooks'
import { Typography } from '@mui/material';

const StyledContainerDiv = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '10px 20px',

    form: {
      width: '100%',
      alignItems: 'center',
      gap: '15px',
    },
  },
}))

const validationSchema = Yup.object().shape({
  firstName: Yup
    .string()
    .min(3, 'Name should be of minimum 3 characters length')
    .required('Name is required'),
  lastName: Yup
    .string()
    .min(3, 'Surname should be of minimum 3 characters length')
    .required('Surname is required'),
  workspace: Yup
    .string()
    .min(3, 'Workspace name should be of minimum 3 characters length')
    .required('Workspace name is required'),
  password: Yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Confirm Password is required'),
})

const JoinWorkspace = () => {
  const baseUrl = process.env.REACT_APP_API_URL
  const { status, error, mutate } = usePost(baseUrl + 'auth/join-workspace')
  const navigate = useNavigation()

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      workspace: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = {
        ...values,
        role: 'USER'
      }

      mutate(formData)

      if (status === 'success') {
        console.log('success')
        // navigate('/signup/email-verification')
      }

      if (error) {
        console.log(error)
      }
    },
  });

  return (
    <StyledContainerDiv>
      <HeaderText
        header='Join your workspace'
        text='Insert all your info to proceed to your workspace'
        headerStyle={{ marginBottom: '30px' }}
      />
      <Box component='form' sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          <TextInput
            label='Name'
            placeholder='Marino'
            type='text'
            size='small'
            color='secondary'
            name='firstName'
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : ''}
            required
            InputStyles={{ width: '199px' }}
          />

          <TextInput
            label='Surname'
            placeholder='Lasting'
            type='text'
            value={formik.values.lastName}
            size='small'
            color='secondary'
            name='lastName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : ''}
            required
            InputStyles={{ width: '199px' }}
          />
        </Box>
        <TextInput
          label='Workspace Name'
          placeholder='E.g. Coraly or Tesla'
          name='workspace'
          type='text'
          value={formik.values.workspace}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.workspace && Boolean(formik.errors.workspace)}
          helperText={formik.touched.workspace && formik.errors.workspace ? formik.errors.workspace : ''}
          size='small'
          color='secondary'
          required
        />
        <TextInput
          label='Password'
          placeholder='Password'
          name='password'
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
          size='small'
          color='secondary'
          required
        />

        <TextInput
          label='Confirm Password'
          placeholder='Confirm Password'
          type='password'
          size='small'
          color='secondary'
          name='confirmPassword'
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ''}
          required
        />

        <CustomButton
          color='success'
          variant='contained'
          type='submit'
          onClick={() => formik.handleSubmit()}
        >
          Join Workspace
        </CustomButton>
      </Box>

      <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: 'normal', lineHeight: '18px', color: '#6F6D7B', order: 1, height: '36px' }}>
        Already have an account?
        <CustomButton
          onClick={() => { navigate('/login') }}
          color='success'
          variant='text'
          btnStyles={{ width: '67px', color: 'secondary' }}
        >Sign in</CustomButton>
      </Typography>
    </StyledContainerDiv>
  )
}

export default JoinWorkspace