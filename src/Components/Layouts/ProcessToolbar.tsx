import React from 'react'
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import { processIcons, processIconRight } from '../../utils/utils'
import ProcessBottomBar from './ProcessBottomBar'

interface ProcessBarProps {
  toggleOpen: () => void
  toggle: any
}

const ProcessToolbar = ({ toggleOpen, toggle }: ProcessBarProps) => {
  return (
    <Box sx={{ padding: '12px 0px 0px;', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', padding: '0px 12px', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '3px 12px', gap: '10px' }}>
          {processIcons.map((icon, index) => {
            const { divider, extraIcon, background, icon: linkIcon, name } = icon
            return (
              <IconButton key={index} sx={{ padding: '0px', fontSize: '16px', display: 'flex', gap: '10px', borderRadius: 'none', }}
                onClick={() => name === 'Heights' ? toggle() : ''}
              >
                {background ? <Box sx={{ display: 'flex', backgroundColor: background, padding: '4px 8px', gap: '8px', borderRadius: '4px' }}
                >
                  {linkIcon}
                  {name}
                </Box> :
                  <>
                    {linkIcon}
                    {name}
                    {extraIcon}
                    <span style={{ fontSize: '12px', color: '#464356', fontWeight: '700', margin: divider ? '0px 0px 0px 5px' : '' }}>{divider}</span>
                  </>}

              </IconButton>
            )
          })
          }
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', padding: '3px 12px', marginLeft: 'auto', gap: '29.08px' }}>
          {processIconRight.map((icon, index) => (
            <IconButton
              key={index} sx={{ padding: '0px', fontSize: '16px', display: 'flex', gap: '10px', borderRadius: 'none', }}
              onClick={() => index === 4 ? toggleOpen() : ''}
            >
              {index === processIconRight.length - 1 ? <Box sx={{ height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'primary.main', padding: '0px 12px', borderRadius: '8px', color: 'white', fontSize: '14px', gap: '4px' }}> {icon} Add</Box> : icon}
            </IconButton>
          ))}

        </Box>
      </Box>
      <ProcessBottomBar />
    </Box>
  )
}

export default ProcessToolbar