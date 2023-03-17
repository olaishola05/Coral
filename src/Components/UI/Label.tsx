import React from 'react'
import Box from '@mui/material/Box';

interface LabelProps {
  backgroundColor: string
  text: string
  width?: string
  icon?: any,
  color?: string
}

const Label = ({ backgroundColor, text, width, icon, color }: LabelProps) => {
  const styles = {
    backgroundColor: backgroundColor,
    color: color ? color : 'white',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '18px',
    padding: '2px 16px',
    borderRadius: '100px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    height: '22px',
    width: width ? width : 'auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }

  return (
    <Box sx={styles}>
      {icon} {text}
    </Box>
  )
}

export default Label