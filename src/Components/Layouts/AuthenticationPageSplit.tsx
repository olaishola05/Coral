import React from 'react';
import Box from '@mui/material/Box';
import Logo from '../../Assets/svg/Logo.svg';

interface AuthenticationPageSplitProps {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
  leftClassName?: any;
  rightClassName?: any;
}

function AuthenticationPageSplit(props: AuthenticationPageSplitProps): JSX.Element {
  return (
    <Box sx={{ height: '100vh', width: '100vw', border: '1px solid red', display: 'flex' }}>
      <Box sx={props.leftClassName}>
        <img src={Logo} alt={Logo} />
        {props.leftSide}
      </Box>
      <div>{props.rightSide}</div>
    </Box>
  )

}
export default AuthenticationPageSplit;