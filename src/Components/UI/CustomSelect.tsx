import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface CustomSelectProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  options: string[];
}


const CustomSelect: React.FC<CustomSelectProps> = ({ label, value, onChange, options }, ...rest) => {
  return (
    <FormControl {...rest}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
      // onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;