import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

interface HeaderTextProps {
  header: string | React.ReactNode;
  text: string | React.ReactNode;
  headerStyle?: any;
  customStyles?: any;
}

const HeaderTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '8px',
  lineHeight: '36px',
  marginBottom: '20px',
  '& .MuiTypography-body1': {
    color:'#464356',
    fontSize: '15px',
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
    gap: '30px',
    '& .MuiTypography-body1': {
      fontSize: '13px',
    },
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    gap: '20px',
    marginBottom: '10px',
    '& .MuiTypography-body1': {
      fontSize: '12px',
    },
    
  },

  [theme.breakpoints.down('xs')]: {
    width: '100%',
    gap: '10px',
    '& .MuiTypography-body1': {
      fontSize: '11px',
    },
  },
}));

const HeaderText = ({ header, text, headerStyle, customStyles }: HeaderTextProps) => {
  return (

    <HeaderTextContainer sx={{ ...headerStyle }}>
      <Typography variant="h1" sx={{ fontSize: '24px', fontWeight: 'bold', lineHeight: '56px', color: '#464356', ...customStyles }}>
        {header}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: 'normal', lineHeight: '18px', color: '#6F6D7B', order: 1 }}>
        {text}
      </Typography>
    </HeaderTextContainer>
  )
}

export default HeaderText