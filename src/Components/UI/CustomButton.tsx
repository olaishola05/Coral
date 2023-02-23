import React from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success';
  variant?: 'text' | 'outlined' | 'contained';
  btnStyles?: any;
  type?: 'submit' | 'reset' | 'button';
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, color, variant, btnStyles }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      color={color}
      sx={btnStyles}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
