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
  value: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkedStyle?: checkedStyle;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, value, onChange, checkedStyle }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={value}
          onChange={onChange}
          inputProps={{ 'aria-label': 'controlled' }}
          sx={checkedStyle}
        />
      }
      label={label}
    />
  );
};

export default CustomCheckbox;