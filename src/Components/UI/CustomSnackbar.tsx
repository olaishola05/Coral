import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="outlined" {...props} />;
});

interface CustomSnackbarProps {
  open: boolean;
  message: string;
  severity?: 'success' | 'info' | 'warning' | 'error';
  handleClose: () => void;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
  snackError?: any;
  snackSuccess?: any;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = (props) => {
  const { open, message, severity, handleClose, anchorOrigin } = props;
  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      sx={severity === 'success' ? props.snackSuccess : props.snackError}
    >
      <Alert onClose={handleClose} severity={severity} sx={severity === 'success' ? props.snackSuccess : props.snackError}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;



