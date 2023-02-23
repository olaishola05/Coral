import React from 'react';
import { useTheme } from '@mui/material/styles';
import CustomSnackbar from '../CustomSnackbar';

interface SnackbarErrorProps {
  value: boolean;
  message: string;
  toggle: () => void;
}

const SnackbarError = ({ value, message, toggle }: SnackbarErrorProps) => {
  const theme = useTheme();
  return (
    <CustomSnackbar
      open={value}
      message={message}
      severity='error'
      handleClose={() => toggle()}
      snackError={{ height: `${theme.snack.height}`, backgroundColor: `${theme.snack.snackError}`, color: 'red' }}
    />
  )
}

export default SnackbarError;