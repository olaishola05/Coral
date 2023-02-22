import React from 'react';
import Box from '@mui/material/Box';
import Logo from '../../Assets/svg/Logo.svg';

interface AuthenticationPageSplitProps {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
  leftClassName?: any;
  rightStyles?: any;
}

function AuthenticationPageSplit(props: AuthenticationPageSplitProps): JSX.Element {
  return (
    <Box sx={{ height: '100vh', width: '100vw', display: 'flex' }}>
      <Box sx={props.leftClassName}>
        <img src={Logo} alt={Logo} />
        {props.leftSide}
      </Box>
      <Box sx={props.rightStyles}>{props.rightSide}</Box>
    </Box>
  )

}
export default AuthenticationPageSplit;