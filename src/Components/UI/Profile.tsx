import React from 'react'
import { useLocation } from 'react-router-dom';
import HeaderText from './HeaderText'
import Box from '@mui/material/Box';
import TextInput from './TextInput';
import CustomButton from './CustomButton';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from '../../hooks'

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

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Name should be of minimum 3 characters length')
    .required('Name is required'),
  surname: yup
    .string()
    .min(3, 'Surname should be of minimum 3 characters length')
    .required('Surname is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

const Profile = () => {
  const location = useLocation()
  const { state } = location
  const navigate  = useNavigation()

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = {
        ...values,
        email: state.email,
        workspace: state.workspace,
        terms: state.terms,
        authorization: state.authorization,
      }
      console.log(formData)
      navigate('/signup/email-verification')
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
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name ? formik.errors.name : ''}
            required
            InputStyles={{ width: '199px' }}
          />

          <TextInput
            label='Surname'
            placeholder='Lasting'
            type='text'
            value={formik.values.surname}
            size='small'
            color='secondary'
            name='surname'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname ? formik.errors.surname : ''}
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