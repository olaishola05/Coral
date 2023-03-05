import React from 'react'
import Box from '@mui/material/Box';
import Member from './Member';

const membersContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '24px',
  gap: '10px',
  overflowY: 'scroll',
  order: 1,
  height: '100%',
}

const MembersContainer = () => {
  return (
    <Box sx={membersContainerStyles}>
      <Member />
    </Box>
  )
}

export default MembersContainer