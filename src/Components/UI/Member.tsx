import React from 'react'
import Box from '@mui/material/Box';
import { MemberNavLeft } from '../Layouts';
import MembersRight from './MembersRight';

const memberStyles = {
  display: 'flex',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '24px',
}

const Member = () => {

  const [activeTab, setActiveTab] = React.useState(8)

  const handleTabChange = (index: number) => {
    setActiveTab(index)
  }

  return (
    <Box sx={memberStyles}>
      <MemberNavLeft activeTab={activeTab} handleTabChange={handleTabChange} />
      <MembersRight activeTab={activeTab} />
    </Box>
  )
}

export default Member