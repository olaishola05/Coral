import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

type checkedStyle = {
  color?: string;
  '&.Mui-checked': {
    color: string;
  };
};
interface CustomCheckboxProps {
  label?: string | React.ReactNode;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkedStyle?: checkedStyle;
  name: string;
  defaultChecked?: boolean;
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
          sx={{ color: '#312E43', '&.Mui-checked': { color: '#312E43' }, ...checkedStyle }}
          required
        />
      }
      label={label}
    />
  );
};

export default CustomCheckbox;