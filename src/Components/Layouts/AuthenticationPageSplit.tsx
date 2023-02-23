import React from 'react';
import Box from '@mui/material/Box';
import Logo from '../../Assets/svg/Logo.svg';
import CustomSnackbar from '../UI/CustomSnackbar';
import { useTheme } from '@mui/material/styles';
import SnackbarError from '../UI/snacks/SnackError';
import SnackSuccess from '../UI/snacks/SnackSuccess';

interface AuthenticationPageSplitProps {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
  leftClassName?: any;
  rightStyles?: any;
  error?: any;
  message: string;
  toggle: () => void;
  value: boolean;
}

function AuthenticationPageSplit(props: AuthenticationPageSplitProps): JSX.Element {
  const { leftSide, rightSide, leftClassName, rightStyles, error, message, toggle, value } = props;
  return (
    <Box sx={{ height: '100vh', width: '100vw', display: 'flex' }}>
      <Box>
        <Box sx={leftClassName}>
          <img src={Logo} alt={Logo} />
          {leftSide}
        </Box>
        {error ? <SnackbarError value={value} message={message} toggle={toggle} /> : <SnackSuccess value={value} message={message} toggle={toggle} />}
      </Box>
      <Box sx={rightStyles}>{rightSide}</Box>
    </Box>
  )

}
export default AuthenticationPageSplit;