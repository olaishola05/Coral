import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

interface CustomCheckboxProps {
  label: string;
  value: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, value, onChange }, ...rest) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={value}
          onChange={onChange}
          {...rest}
        />
      }
      label={label}
    />
  );
};

export default CustomCheckbox;