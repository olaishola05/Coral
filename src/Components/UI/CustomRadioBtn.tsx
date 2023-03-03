import React from 'react';
import { RadioGroup, Radio, FormControlLabel } from '@mui/material';

interface CustomRadioBtnProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: any;
  name: string;
  radioStyles?: any;
}

const CustomRadioBtn: React.FC<CustomRadioBtnProps> = ({ label, value, onChange, options, name, radioStyles }) => {
  return (
    <RadioGroup
      aria-label={label}
      name={name}
      value={value}
      onChange={onChange}
      sx={{ ...radioStyles, color: '#312E43', fontWeight: 400, fontSize: '14px', lineHeight: '18px' }}
    >
      {options.map((option: any) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
};

export default CustomRadioBtn;