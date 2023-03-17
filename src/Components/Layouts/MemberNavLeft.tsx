import React from 'react'
import Box from '@mui/material/Box';
import { membersNavigations } from '../../utils/utils';

interface Props {
  activeTab: number
  handleTabChange: (index: number) => void
}

const MemberNavLeft = ({ activeTab, handleTabChange }: Props) => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ borderLeft: '2px solid #BCBCBF', height: '500px' }} />
        <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', width: '206px', gap: '5px' }}>
          {membersNavigations.map((tab, index) => (
            <Box
              key={index}
              sx={{ height: '40px', cursor: 'pointer', color: activeTab === index ? 'primary.main' : '', '&:hover': { color: 'primary.main' } }}
              onClick={() => handleTabChange(index)}
            >
              <Box sx={{ display: 'flex', gap: '10px' }}>
                {tab.icon && activeTab === index && <Box sx={{ width: '2px', height: '24px', backgroundColor: 'primary.main' }} />}
                <Box sx={{ display: 'flex', gap: '10px', paddingLeft: '19px', alignItems: 'center' }}>
                  {tab.icon}
                  {tab.name}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ borderLeft: '2px solid #BCBCBF', height: '600px' }} />
    </>
  )
}

export default MemberNavLeft