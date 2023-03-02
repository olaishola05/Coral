import React from 'react'
import { ReactComponent as AddRedIcon } from '../../Assets/svg/addRed.svg'
import { ReactComponent as DoubleArrowIcon } from '../../Assets/svg/doubleArrow.svg'
import { ReactComponent as DownArrowIcon } from '../../Assets/svg/downarrow.svg'
import Typography from '@mui/material/Typography';
import { ReactComponent as CalendarIcon } from '../../Assets/svg/calendar.svg'
import { ReactComponent as UserIcon } from '../../Assets/svg/user.svg'
import { ReactComponent as DividerIcon } from '../../Assets/svg/Divider.svg'
import { ReactComponent as DBIcon } from '../../Assets/svg/db_blk.svg'
import Label from '../UI/Label';
import Box from '@mui/material/Box';

const iconsStyle = {
  width: '24px',
  height: '24px',
  cursor: 'pointer',
  '&:hover': {
    fill: '#FF0000'
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',
  borderRadius: '50%',
  gap: '16px',
  backgroundColor: 'secondary.main',
  color: 'white',
  fontSize: '10px',
  fontWeight: '500',
  lineHeight: '12px',
}

const defaultStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  height: '24px'
}

const DialogLeftTop = () => {
  return (
    <>
      <Box sx={{ ...defaultStyles, alignItems: 'flex-start', gap: '48.97px' }}>
        <Box sx={{ ...defaultStyles, width: '184px', order: 0 }}>
          <Box sx={{ ...iconsStyle }}>
            PL
          </Box>

          <Box sx={{ ...iconsStyle }}>
            CM
          </Box>

          <Box sx={{ ...iconsStyle }}>
            FN
          </Box>

          <Box sx={{ ...iconsStyle }}>
            LM
          </Box>

          <Box sx={{ ...iconsStyle }}>
            ST
          </Box>

          <Box sx={{ ...iconsStyle, backgroundColor: 'white', color: 'secondary.main' }}>
            +5
          </Box>
          <AddRedIcon />
        </Box>

        <Box sx={{
          ...defaultStyles,
          width: '135px',
          order: 1,
        }}>
          <DoubleArrowIcon />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>Chapter One</Typography>
          <DownArrowIcon />
        </Box>

        <Box sx={{ ...defaultStyles, order: 2, width: '184px', color: '#6F6D7B' }}>
          <CalendarIcon />
          05/10/2021 - 17:50
        </Box>
      </Box>

      <Box sx={{ ...defaultStyles, gap: '8px' }}>
        <Label backgroundColor="#47BDFF" text="Label 1" width='79px' />
        <Label backgroundColor="#E547FF" text="Label 2" width='79px' />
        <Label backgroundColor="#FF9F47" text="Label 3" width='79px' />
        <AddRedIcon />
      </Box>

      <Box sx={{ ...defaultStyles, alignItems: 'flex-end', gap: '12px', order: 2 }}>
        <Box sx={{ ...defaultStyles }}>
          <UserIcon />
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '14px', fontWeight: 600, lineHeight: '18px' }}>Select vendors</Typography>
          <DownArrowIcon />
        </Box>

        <DividerIcon />
        <Label backgroundColor="#D6D5D9" icon={<DBIcon />} text="#database_object_1" width='186px' color={'#312E43'} />
        <Label backgroundColor="#D6D5D9" icon={<DBIcon />} text="#db-oject1" width='128px' color={'#312E43'} />
      </Box>
      <Box sx={{ border: '2px solid #EAEAEC', order: 3 }}></Box></>
  )
}

export default DialogLeftTop