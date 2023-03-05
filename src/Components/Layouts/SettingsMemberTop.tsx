import React from 'react'
import Box from '@mui/material/Box';
import MiniHeader from '../UI/MiniHeader';

interface Props {
  handleClose: () => void
}

const SettingsMemberTop = ({ handleClose }: Props) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '0px 24px 0px 24px', gap: '10px', height: 60
    }}
    >
      <MiniHeader variant='h1'
        text="Impostazioni"
        textStyle={{ fontSize: '20px', fontWeight: 700, lineHeight: '36px', color: '#464356', order: 1 }}
      />
      <Box
        sx={{ color: '#9897A1', height: 16.01, width: 16.01, order: 2, fontSize: '20px', cursor: 'pointer' }}
        onClick={handleClose}
      >
        X
      </Box>

    </Box>
  )
}

export default SettingsMemberTop