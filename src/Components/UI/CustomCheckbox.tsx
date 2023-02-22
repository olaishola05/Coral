import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

interface CustomCheckboxProps {
  label: string;
  value?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, value, onChange }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={value}
          onChange={onChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      }
      label={label}
    />
  );
};

export default CustomCheckbox;