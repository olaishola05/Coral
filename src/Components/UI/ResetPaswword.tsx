import React, { ChangeEvent } from 'react'
import HeaderText from './HeaderText'
import Box from '@mui/material/Box';
import TextInput from './TextInput';
import CustomButton from './CustomButton';

const ResetPaswword = () => {

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
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
        // InputStyles={styles}
        // onBlur={formik.handleBlur}
        // error={!emailValid}
        // helperText={formik.errors.email}
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
        // onBlur={formik.handleBlur}
        // error={!emailValid}
        // helperText={formik.errors.email}
        />

        <CustomButton
          type='submit'
          variant='contained'>
          Confirm new password
        </CustomButton>
      </Box>
    </>
  )
}

export default ResetPaswword