import React from 'react';
import TextInput from '../UI/TextInput';
import CustomButton from './CustomButton';
import "../../Assets/styles/styles.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import CustomCheckbox from './CustomCheckbox';


interface LoginFormProps {
  onSubmit: (data: any) => void;
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

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const theme = useTheme();
  return (
    <Box sx={{ width: '320px', height: '519px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '50px' }}>
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
      <Box component='form' sx={{ width: '320px', height: '273px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '32px' }}>
        <TextInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
          placeholder="Enter your email"
          type='email'
          required
          color='secondary'
          size='small'
          InputStyles={styles}
        />
        <TextInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={(event) => setFormData({ ...formData, password: event.target.value })}
          placeholder="Enter your password"
          type='password'
          required
          color='secondary'
          size='small'
          InputStyles={styles}
        />
        <Box sx={{ width: '320px', display: 'flex', justifyContent: 'space-between' }}>
          <CustomCheckbox label="Remember me" value={false} onChange={() => { }} />
          <CustomButton onClick={() => console.log('')}
            color='success'
            variant='text'
            btnStyles={{ fontSize: '14px', lineHeight: '18px', textTransform: 'none' }}
          >Forgot password</CustomButton>
        </Box>
        <CustomButton
          onClick={() => console.log('')}
          color='secondary'
          variant='contained'
        >
          Login</CustomButton>
      </Box>
    </Box>
  );
};

export default LoginForm;