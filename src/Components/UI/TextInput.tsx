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
  error?: boolean;
  helperText?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  InputProps?: any;
  multiline?: boolean;
  rows?: number;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, placeholder, type, required, color, name, InputStyles, size, InputProps, multiline, rows }) => {
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
      sx={{ width: '100%', fontSize: '12px', fontWeight: 'normal', color: '#5A5869', ...InputStyles }}
      size={size}
      InputProps={InputProps}
    />
  );
};

export default TextInput;