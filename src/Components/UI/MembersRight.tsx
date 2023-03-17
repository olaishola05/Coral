import React from 'react'
import { MembersRightTop } from '../Layouts'
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


const MembersRight = ({ activeTab }: { activeTab: number }) => {
  switch (activeTab) {
    case 8:
      return (
        <Box sx={membersRightStyles}>
          <MembersRightTop />
          <MemberRightTable />
        </Box>
      )

    default:
      return null
  }

}

export default MembersRight