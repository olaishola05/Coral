import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const StyledButton = styled(Button)<{ variant?: 'text' | 'outlined' | 'contained', color?: 'primary' | 'secondary' | 'success' }>(
  ({ theme, variant, color }) => ({
    width: '100%',
    height: '40px',
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: '18px',
    textTransform: 'none',
    color: variant === 'contained' ? 'white' : color === 'primary' ? theme.palette.primary.main : color === 'secondary' ? theme.palette.secondary.main : color === 'success' ? theme.palette.success.main : 'white',
    backgroundColor: variant === 'contained' ? color === 'primary' ? theme.palette.primary.main : color === 'secondary' ? theme.palette.secondary.main : color === 'success' ? theme.palette.success.main : theme.palette.primary.main : 'transparent',
    border: variant === 'outlined' ? `1px solid ${color === 'primary' ? theme.palette.primary.main : color === 'secondary' ? theme.palette.secondary.main : color === 'success' ? theme.palette.success.main : theme.palette.primary.main}` : 'none',
    '&:hover': {
      backgroundColor: variant === 'contained' ? color === 'primary' ? theme.palette.primary.dark : color === 'secondary' ? theme.palette.secondary.dark : color === 'success' ? theme.palette.success.dark : theme.palette.primary.dark : 'transparent',
      border: variant === 'outlined' ? `1px solid ${color === 'primary' ? theme.palette.primary.dark : color === 'secondary' ? theme.palette.secondary.dark : color === 'success' ? theme.palette.success.dark : theme.palette.primary.dark}` : 'none',
    },
    '&:disabled': {
      backgroundColor: variant === 'contained' ? color === 'primary' ? theme.palette.primary.light : color === 'secondary' ? theme.palette.secondary.light : color === 'success' ? theme.palette.success.light : theme.palette.primary.light : 'transparent',
      border: variant === 'outlined' ? `1px solid ${color === 'primary' ? theme.palette.primary.light : color === 'secondary' ? theme.palette.secondary.light : color === 'success' ? theme.palette.success.light : theme.palette.primary.light}` : 'none',
    },
  }),
);

const StyledTextField = styled(TextField)(({ theme }) =>({
  width: '100%',
  fontSize: '12px',
  fontWeight: 'normal',
  color: 'theme.neutral.light',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'theme.palette.secondary.main',
    },
    '&:hover fieldset': {
      borderColor: 'theme.palette.secondary.main',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'theme.palette.secondary.main',
    },
  },

  [theme.breakpoints.down('sm')]:{
    width: '100%',
  }
}));


export { StyledButton, StyledTextField }