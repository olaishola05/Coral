import React from 'react';
import { StyledButton } from '../../styles';

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
    <StyledButton
      variant={variant}
      onClick={onClick}
      color={color}
      sx={{ ...btnStyles }}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
