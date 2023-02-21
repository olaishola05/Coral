import React from 'react';
import { TextField } from '@mui/material';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange }, ...rest) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default TextInput;