import React from 'react'
import Box from '@mui/material/Box'
import { ReactComponent as DownArrowIcon } from '../../Assets/svg/downarrow.svg'
import { ReactComponent as StartIcon } from '../../Assets/svg/start.svg'
import { ReactComponent as AddIcon } from '../../Assets/svg/addRed.svg'
import { ReactComponent as MoreIcon } from '../../Assets/svg/more.svg'

const uniqueStyles = {
  width: '21.5px',
  height: '21.5px',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '2px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px'
}

const errorStyles = {
  ...uniqueStyles,
  backgroundColor: '#FFE8DA',
  color: 'error.main',
}

const warningStyles = {
  ...uniqueStyles,
  backgroundColor: '#FEF4DE',
  color: 'warning.main',
}

const ProcessBottomBar = () => {

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px', padding: '16px 0px 16px 8px', backgroundColor: '#F6F8FA' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0px 8px', borderRadius: '4px' }}>
        <DownArrowIcon />
        <StartIcon /> New Contract

        <Box sx={{ width: '130px', height: '21.5px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', borderRadius: '4px' }}>
          <Box component='p' sx={{ backgroundColor: '#D6D5D9', width: '63px', height: '21.5px', fontSize: '12px', lineHeight: '16px', padding: '2px 4px' }}>
            8 Schede
          </Box>

          <Box component='p' sx={errorStyles}>
            1
          </Box>

          <Box component='p' sx={warningStyles}>
            2
          </Box>
        </Box>
        <Box sx={uniqueStyles}>
          <AddIcon />
        </Box>
        <Box sx={uniqueStyles}>
          <MoreIcon />
        </Box>
      </Box>

    </Box>
  )
}

export default ProcessBottomBar