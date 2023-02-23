import React from 'react';
import Box from '@mui/material/Box';
import Logo from '../../Assets/svg/Logo.svg';
import CustomSnackbar from '../UI/CustomSnackbar';

interface AuthenticationPageSplitProps {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
  leftClassName?: any;
  rightStyles?: any;
  error?: boolean;
  message: string;
}

function AuthenticationPageSplit(props: AuthenticationPageSplitProps): JSX.Element {
  const { leftSide, rightSide, leftClassName, rightStyles, error, message } = props;
  return (
    <Box sx={{ height: '100vh', width: '100vw', display: 'flex' }}>
      <Box>
        <Box sx={leftClassName}>
          <img src={Logo} alt={Logo} />
          {leftSide}
        </Box>
        {error ? <CustomSnackbar open={error} message={message} severity='error' handleClose={() => ''} /> : <CustomSnackbar open={false} message={message} severity='success' handleClose={() => ''} />}
      </Box>
      <Box sx={rightStyles}>{rightSide}</Box>
    </Box>
  )

}
export default AuthenticationPageSplit;