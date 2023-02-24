import React from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success';
  variant?: 'text' | 'outlined' | 'contained';
  btnStyles?: any;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, color, variant, btnStyles }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      color={color}
      sx={{ width: '100%', height: '40px', borderRadius: '8px', fontSize: '14px', lineHeight: '18px', textTransform: 'none', color: 'white', ...btnStyles }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
