import React from 'react'
import MembersRightTop from '../Layouts/MembersRightTop'
import Box from '@mui/material/Box';
import MemberRightTable from './MemberRightTable';


const membersRightStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '8px',
  gap: '24px',
  width: 986,
  order: 2,
  height: '760px'
}


const MembersRight = () => {
  return (
    <Box sx={membersRightStyles}>
      <MembersRightTop />
      <MemberRightTable />
    </Box>
  )
}

export default MembersRight