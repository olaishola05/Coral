import React from 'react';
import Box from '@mui/material/Box';

function AuthenticationPageSplit(props: any, ...rest: any): JSX.Element {
  return (
    <Box {...rest}>
      <Box className={props.leftContainer}>{props.leftSide}</Box>
      <Box className={props.rightContainer}>{props.rightSide}</Box>
    </Box>
  )

}
export default AuthenticationPageSplit;