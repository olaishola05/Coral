import React from 'react';
import TextInput from '../UI/TextInput';
import CustomButton from './CustomButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import CustomCheckbox from './CustomCheckbox';
import { formData } from '../../types/appTypes';
import { useLoginFormik, useNavigation } from '../../hooks';
import HeaderText from './HeaderText';
import { styled } from '@mui/material/styles';



interface LoginFormProps {
  onChange: (data: formData) => void;
  submit: () => void;
}

const LoginFormContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '50px',
  '& .MuiTypography-body1': {
    color: theme.palette.text.primary,
    fontSize: '15px',
  },

  form: {
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',

  },
  
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    gap: '20px',
    padding: '10px',

    form : {
      width: '100%',
      gap: '15px',

    },
    '& .MuiTypography-body1': {
      fontSize: '14px',
    },
  },
}));

const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  const theme = useTheme();
  const navigate = useNavigation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
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
    <LoginFormContainer>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
        <Typography variant="body1" component="span" sx={{ color: theme.palette.text.primary, fontSize: '15px' }}>Email: eve.holt@reqres.in</Typography>
        <Typography variant="body1" component="span" sx={{ color: theme.palette.text.primary, fontSize: '15px' }}>Password: cityslicka</Typography>
      </Box>
      <HeaderText
        header="Login"
        text="Thanks for coming back on Coraly"
        headerStyle={{ marginBottom: '0px' }}
      />

      <Box component='form' onClick={formik.handleSubmit}>
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
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email ? true : false}
          />
          {formik.touched.email && formik.errors.email && (
            <Typography
              variant="body1"
              component="span"
              sx={{ color: theme.palette.error.main, fontSize: '15px' }}
            >{formik.errors.email}</Typography>
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
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password ? true : false}
          />
          {formik.touched.password && formik.errors.password && (
            <Typography variant="body1" component="span"
              sx={{ color: theme.palette.error.main, fontSize: '15px', }}
            >{formik.errors.password}</Typography>
          )}
        </Box>
        <Box sx={{ width: '320px', display: 'flex', justifyContent: 'space-between' }}>
          <CustomCheckbox
            label="Remember me"
            name="rememberMe"
            checked={formik.values.rememberMe}
            onChange={handleChange}
            checkedStyle={{ '&.Mui-checked': { color: '#312E43' } }}
          />
          <CustomButton
            onClick={() => { navigate('/reset-password') }}
            color='success'
            variant='text'
            btnStyles={{ color: 'secondary', width: '150px', fontStyle: 'normal', fontWeight: '600', lineHeight: '21px' }}
          >Forgot password</CustomButton>
        </Box>
        <CustomButton
          color='secondary'
          variant='contained'
          type='submit'
          disabled={isSubmitting ? true : false}
        >
          {isSubmitting ? 'Loggin...' : 'Login'}
        </CustomButton>

        <Typography variant="body1" component="p" sx={{ width: '320px', fontSize: '14px', lineHeight: '18px', display: 'flex', alignItems: 'center', order: 1, color: `${theme.text.primary.neutral}` }}>
          Don't have an account?
          <CustomButton
            onClick={() => { navigate('/signup') }}
            color='success'
            variant='text'
            btnStyles={{ width: '114px', color: 'secondary' }}
          >Sign up now</CustomButton>
        </Typography>
      </Box>
    </LoginFormContainer>
  );
};

export default LoginForm;