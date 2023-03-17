import React from 'react'
import Box from '@mui/material/Box';
import CustomButton from '../UI/CustomButton';
import { ReactComponent as AddIcon } from '../../Assets/svg/add.svg'
import MiniHeader from '../UI/MiniHeader';
import MemberSearchForm from '../UI/MemberSearchForm';


const membersRightTopStyles = {
  display: 'flex',
  alignItems: 'center',
  padding: '0px',
  gap: '24px',
  width: 970,
  height: 42,
  justifyContent: 'space-between',
}

const MembersRightTop = () => {
  return (
    <Box sx={membersRightTopStyles}>
      <MemberSearchForm />
      <MiniHeader text="Membri" />
      <CustomButton
        variant="contained"
        color="primary"
        btnStyles={{
          display: 'flex', gap: '4px', width: '100px', height: '30px', fontSize: '12px', fontWeight: 'bold', padding: '0px 12px'
        }}
      >
        <AddIcon /> Invita
      </CustomButton>
    </Box>
  )
}

export default MembersRightTop