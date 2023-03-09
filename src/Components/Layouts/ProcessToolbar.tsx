import React from 'react'
import Box from '@mui/material/Box'
import { IconButton } from '@mui/material'
import { processIcons, processIconRight } from '../../utils/utils'
import { ProcessBottomBar } from './'
import { ListModal } from '../UI/Modal'
import { useToggle } from '../../hooks'
import { AddDrawer } from '..'

interface ProcessBarProps {
  toggleOpen: () => void
}

const ProcessToolbar = ({ toggleOpen }: ProcessBarProps) => {
  const [open, setOpen] = useToggle(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openDrawer, setOpenDrawer] = useToggle(false);

  const handleSettingsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen()
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpen()
    setAnchorEl(null);
  };

  const handleOpenDrawer = () => {
    setOpenDrawer()
  }

  const handleCloseDrawer = () => {
    setOpenDrawer()
  }


  const openModal = Boolean(anchorEl);
  const id = openModal ? 'list popover' : undefined;

  return (
    <Box sx={{ padding: '12px 0px 0px;', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', padding: '0px 12px', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '3px 12px', gap: '10px' }}>
          {processIcons.map((icon, index) => {
            const { divider, extraIcon, background, icon: linkIcon, name } = icon
            return (
              <IconButton key={index} sx={{ padding: '0px', fontSize: '16px', display: 'flex', gap: '10px', borderRadius: 'none', position: 'relative' }}
                onClick={(e) => name === 'Heights' ? handleSettingsClick(e) : ''}
                id={name === 'Heights' ? id : ''}
              >
                {open && name === 'Heights' ?
                  <ListModal handleClose={handleClose} /> : ''}
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
              onClick={() => index === 4 ? toggleOpen() : index === processIconRight.length - 1 ? handleOpenDrawer() : ''}
            >
              {openDrawer && index === processIconRight.length - 1 && <AddDrawer open={openDrawer} onClose={handleCloseDrawer} />}
              {index === processIconRight.length - 1 ? <Box component='span'
                sx={{ height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'primary.main', padding: '0px 12px', borderRadius: '8px', color: 'white', fontSize: '14px', gap: '4px', position: 'relative' }}
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