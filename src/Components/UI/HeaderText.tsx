import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface HeaderTextProps {
  header: string | React.ReactNode;
  text: string | React.ReactNode;
  headerStyle?: any;
  customStyles?: any;
}

const HeaderText = ({ header, text, headerStyle, customStyles }: HeaderTextProps) => {
  return (

    <Box sx={{ width: '422px', display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '8px', lineHeight: '36px', marginBottom: '20px', ...headerStyle }}>
      <Typography variant="h1" sx={{ fontSize: '24px', fontWeight: 'bold', lineHeight: '56px', color: '#464356', ...customStyles }}>
        {header}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: 'normal', lineHeight: '18px', color: '#6F6D7B', order: 1 }}>
        {text}
      </Typography>
    </Box>
  )
}

export default HeaderText