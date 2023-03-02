import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextInput from './TextInput';

const styles = {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
}

const CompanyInfo = () => {
  return (
    <Box sx={{
      ...styles, gap: '24px',
      width: '561px',
      height: '524px',
      order: 3,
    }}>
      <Box sx={{ ...styles, alignItems: 'flex-start', gap: '16px' }}>
        <Typography variant="h6" sx={{ fontWeight: '600', fontSize: '16', lineHeight: '24px', color: '#464356' }}>Startform Name</Typography>

        <TextInput
          placeholder="Enter your startform name"
          label='email'
          value='value'
          onChange={() => { }}
          required
          color='secondary'
          name='email'
          InputStyles={{ fontSize: '12px', fontWeight: 'normal', color: '#5A5869', width: '100%' }}
          size='small'
        />
      </Box>
    </Box>
  )
}

export default CompanyInfo