import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

type checkedStyle = {
  color?: string;
  '&.Mui-checked': {
    color: string;
  };
};
interface CustomCheckboxProps {
  label: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkedStyle?: checkedStyle;
  name: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, checked, onChange, checkedStyle, name }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          name={name}
          onChange={onChange}
          inputProps={{ 'aria-label': 'controlled' }}
          sx={checkedStyle}
          required
        />
      }
      label={label}
    />
  );
};

export default CustomCheckbox;