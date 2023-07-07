import React from 'react';
import { Checkbox, FormControlLabel, styled } from '@mui/material';

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '14px',
    lineHeight: '17px',
    color: '#312E43',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      fontSize: '11.5px',
      lineHeight: '15px',
      textAlign: 'justify',
    },
  },
}));

interface CustomCheckboxProps {
  label?: string | React.ReactNode;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkedStyle?: any;
  name?: string;
  color?: any;
  error?: boolean;
  helperText?: string;
  value?: boolean;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ label, checked, onChange, checkedStyle, name, color }) => {
  return (
    <StyledFormControlLabel
      control={
        <Checkbox
          color={color}
          checked={checked}
          inputProps={{ 'aria-label': 'controlled' }}
          sx={{ color: '#312E43', '&.Mui-checked': { color: '#312E43' }, ...checkedStyle }}
          required
          onChange={onChange}
          />
        }
      name={name}
      label={label}
    />
  );
};

export default CustomCheckbox;