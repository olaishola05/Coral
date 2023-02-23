import React from 'react';
import { TextField } from '@mui/material';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  variant?: 'standard' | 'filled' | 'outlined';
  type?: string;
  required: boolean;
  color?: 'primary' | 'secondary';
  name?: string;
  InputStyles?: any;
  size?: 'small' | 'medium';
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, placeholder, type, required, color, name, InputStyles, size }) => {
  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant="outlined"
      type={type}
      required={required}
      color={color}
      sx={InputStyles}
      size={size}
    />
  );
};

export default TextInput;