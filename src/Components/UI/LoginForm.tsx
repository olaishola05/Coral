import React from 'react';
import TextInput from '../UI/TextInput';
import CustomButton from './CustomButton';
import "../../Assets/styles/styles.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import CustomCheckbox from './CustomCheckbox';
import { formData } from '../../types/appTypes';
import { useLoginFormik } from '../../hooks/useFormik';


interface LoginFormProps {
  onChange: (data: formData) => void;
  submit: () => void;
}

const styles = {
  width: '320px',
  height: '42px',
  alignSelf: 'stretch',
  borderRadius: '8px',
  fontSize: '14px',
  lineHeight: '18px',
  color: '#5A5869'
}

const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const theme = useTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update the form field values in Formik's state
    formik.handleChange(event);

    // Pass the latest form data to the parent component
    props.onChange(formik.values);
  };

  const { formik, isSubmitting } = useLoginFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      props.submit();
    },
  }, props.submit);

  return (
    <Box sx={{ width: '320px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '50px' }}>
      <Box sx={{ width: '210px', height: '62px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}
      >
        <Typography variant="h4" component="h4"
          sx={{ fontWeight: 'bold', fontSize: '24px', lineHeight: '36px', color: `${theme.text.primary.main}` }}>
          Login
        </Typography>

        <Typography variant="body1" component="p" sx={{ width: '215px', fontSize: '14px', lineHeight: '18px', display: 'flex', alignItems: 'center', order: 1, color: `${theme.text.primary.neutral}` }}>
          Thanks to come back on Coraly
        </Typography>
      </Box>
      <Box component='form' sx={{ width: '320px', height: '273px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }} onClick={formik.handleSubmit}>
        <Box>
          <TextInput
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={handleChange}
            placeholder="Enter your email"
            type='email'
            required
            color='secondary'
            size='small'
            InputStyles={styles}
          />
          {formik.touched.email && formik.errors.email && (
            <span>{formik.errors.email}</span>
          )}
        </Box>
        <Box>
          <TextInput
            label="Password"
            name="password"
            value={formik.values.password}
            onChange={(event) => handleChange(event)}
            placeholder="Enter your password"
            type='password'
            required
            color='secondary'
            size='small'
            InputStyles={styles}
          />
          {formik.touched.password && formik.errors.password && (
            <span>{formik.errors.password}</span>
          )}
        </Box>
        <Box sx={{ width: '320px', display: 'flex', justifyContent: 'space-between' }}>
          <CustomCheckbox
            label="Remember me"
            name="rememberMe"
            // checked={data.rememberMe}
            onChange={handleChange}
            checkedStyle={{ '&.Mui-checked': { color: '#312E43' } }}
          />
          <CustomButton onClick={() => console.log('')}
            color='success'
            variant='text'
            btnStyles={{ fontSize: '14px', lineHeight: '18px', textTransform: 'none' }}
          >Forgot password</CustomButton>
        </Box>
        <CustomButton
          color='secondary'
          variant='contained'
          btnStyles={{ width: '320px', height: '40px', borderRadius: '8px', fontSize: '14px', lineHeight: '18px' }}
          type='submit'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Loggin...' : 'Login'}
        </CustomButton>

        <Typography variant="body1" component="p" sx={{ width: '320px', fontSize: '14px', lineHeight: '18px', display: 'flex', alignItems: 'center', order: 1, color: `${theme.text.primary.neutral}` }}>
          Don't have an account? <CustomButton onClick={() => console.log('')}
            color='success'
            variant='text'
            btnStyles={{ fontSize: '14px', lineHeight: '18px', textTransform: 'none' }}
          >Sign up now</CustomButton>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;