import React from 'react'
import { useLocation } from 'react-router-dom';
import HeaderText from './HeaderText'
import Box from '@mui/material/Box';
import TextInput from './TextInput';
import CustomButton from './CustomButton';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigation, usePost } from '../../hooks'

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

const validationSchema = Yup.object().shape({
  firstName: Yup
    .string()
    .min(3, 'Name should be of minimum 3 characters length')
    .required('Name is required'),
  lastName: Yup
    .string()
    .min(3, 'Surname should be of minimum 3 characters length')
    .required('Surname is required'),
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

const Profile = () => {
  const baseUrl = process.env.REACT_APP_API_URL
  const location = useLocation()
  const { state } = location
  const navigate  = useNavigation()
  const { status, mutate } = usePost(baseUrl + 'auth/signup')

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = {
        ...values,
        email: state.email,
        terms: state.terms,
        authorization: state.authorization,
        workspace: state.workspace,
        role: 'ADMIN'
      }
      mutate(formData)
      status === 'success' && navigate('/signup/email-verification')
    },
  });

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
          Complete now
        </CustomButton>
      </Box>
    </StyledContainerDiv>
  )
}

export default Profile