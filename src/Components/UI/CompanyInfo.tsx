import React from 'react'
import Box from '@mui/material/Box';
import TextInput from './TextInput';
import TextField from '@mui/material/TextField';
import CustomRadioBtn from './CustomRadioBtn';
import MiniHeader from './MiniHeader';
import { ReactComponent as DocumentIcon } from '../../Assets/svg/doc.svg';
import { ReactComponent as DividerIcon } from '../../Assets/svg/L_divider.svg';

const styles = {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '16px',
  width: '100%'
}

const CompanyInfo = () => {
  const options = [
    { value: 'company', label: 'Company' },
    { value: 'person', label: 'Person' },
  ];

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'others', label: 'Not declared' },
  ]

  return (
    <Box sx={{
      ...styles, gap: '24px',
      width: '561px',
      order: 3,
    }}>
      <Box sx={{ ...styles }}>
        <MiniHeader text='Startform Name' />
        <TextInput
          placeholder="Enter your startform name"
          label='email'
          value='value'
          onChange={() => { }}
          required
          color='secondary'
          name='email'
          InputStyles={{ fontSize: '12px', fontWeight: 'normal', color: '#5A5869', order: 0 }}
          size='small'
        />
        <Box sx={{ ...styles, width: '100%' }}>
          <TextField
            id="outlined-multiline-static"
            label="Description test"
            multiline
            rows={2}
            color='secondary'
            sx={{ width: '100%', borderRadius: '4px', color: '#5A5869' }}
          />
          <MiniHeader
            text='This is a description'
            variant="body2"
            textStyle={{ fontSize: '12px', lineHeight: '16px', color: '#6F6D7B', marginLeft: '8px', fontWeight: '400' }} />
        </Box>
      </Box>

      <Box sx={{ ...styles, height: '236px', order: 4 }}>
        <MiniHeader text='Company data' />
        <Box component='form' sx={{ ...styles, flexDirection: 'row', width: '100%' }}>
          <Box sx={{ ...styles, alignItems: 'center', width: '24px', gap: '20px' }}>
            <DocumentIcon />
            <DividerIcon />
          </Box>
          <Box sx={{ ...styles, width: '100%', gap: '24px', order: 4 }}>
            <TextInput
              placeholder="Roma"
              label='Company name'
              value=''
              onChange={() => { }}
              required
              color='secondary'
              name='companyName'
              InputStyles={{ fontSize: '12px', fontWeight: 'normal', color: '#5A5869', order: 0 }}
              size='small'
            />

            <TextInput
              placeholder="Pan"
              label='Surname'
              value=''
              onChange={() => { }}
              required
              color='secondary'
              name='surname'
              InputStyles={{ fontSize: '12px', fontWeight: 'normal', color: '#5A5869', order: 0 }}
              size='small'
            />

            <CustomRadioBtn
              options={options}
              label='Company type'
              name='companyType'
              value='company'
              onChange={() => { }}
            />
          </Box>
        </Box>

        <Box sx={{ ...styles, width: '150px', order: 5 }}>
          <MiniHeader text='Gender' />
          <CustomRadioBtn
            options={genderOptions}
            label='Gender'
            name='gender'
            value='female'
            onChange={() => { }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default CompanyInfo