import React from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }, ...rest) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
