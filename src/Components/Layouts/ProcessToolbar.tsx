import React from 'react'
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import { processIcons, processIconRight } from '../../utils/utils'
import { ProcessBottomBar } from './'
import { ListModal } from '../UI/Modal'

interface ProcessBarProps {
  toggleOpen: () => void
}

const ProcessToolbar = ({ toggleOpen }: ProcessBarProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <Box sx={{ padding: '12px 0px 0px;', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', padding: '0px 12px', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '3px 12px', gap: '10px' }}>
          {processIcons.map((icon, index) => {
            const { divider, extraIcon, background, icon: linkIcon, name } = icon
            return (
              <IconButton key={index} sx={{ padding: '0px', fontSize: '16px', display: 'flex', gap: '10px', borderRadius: 'none', position: 'relative' }}
                id={id}
                onClick={(e) => name === 'Heights' ? handleSettingsClick(e) : ''}
              >
                {open && name === 'Heights' &&
                  <ListModal />}
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
              onClick={() => index === 4 ? toggleOpen() : index === processIconRight.length - 1 ? console.log('add') : ''}
            >
              {index === processIconRight.length - 1 ? <Box component='span'
                sx={{ height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'primary.main', padding: '0px 12px', borderRadius: '8px', color: 'white', fontSize: '14px', gap: '4px' }}
              > {icon} Aggiungi</Box> : icon}
            </IconButton>
          ))}

        </Box>
      </Box>
      <ProcessBottomBar />
    </Box>
  )
}

export default ProcessToolbar