import React from 'react';
import Box from '@mui/material/Box';
import Logo from '../../Assets/svg/Logo.svg';
import { SnackbarError, SnackSuccess } from '../UI/snacks';

interface PageLayoutSplitProps {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
  leftClassName?: any;
  rightStyles?: any;
  error?: any;
  message?: string;
  toggle?: () => void;
  value?: boolean;
  success?: boolean;
  handleError?: () => void;
  handleSuccess?: () => void;
}

function PageLayoutSplit(props: PageLayoutSplitProps): JSX.Element {
  const { leftSide, rightSide, leftClassName, rightStyles, error, message, success, value } = props;

  const handleError = () => {
    props.toggle && props.toggle();
  }

  const handleSuccess = () => {
    props.toggle && props.toggle();
  }

  return (
    <Box sx={{ height: '100vh', width: '100vw', display: 'flex' }}>
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '70px', ...leftClassName }}>
          <img src={Logo} alt={Logo} />
          {leftSide}
        </Box>
        {error && <SnackbarError value={value} message={message} toggle={handleError} />}  {success && <SnackSuccess value={value} message={message} toggle={handleSuccess} />}
      </Box>
      <Box sx={rightStyles}>{rightSide}</Box>
    </Box>
  )

}
export default PageLayoutSplit;