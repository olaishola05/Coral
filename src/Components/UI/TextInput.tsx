import React from 'react';
import { StyledTextField } from '../../styles';

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
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  InputProps?: any;
  multiline?: boolean;
  rows?: number;
}




const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, required, InputStyles, ...otherProps }) => {
  return (
    <StyledTextField
      label={label}
      value={value}
      onChange={onChange}
      sx={{ ...InputStyles }}
      {...otherProps}
    />
  );
};

export default TextInput;