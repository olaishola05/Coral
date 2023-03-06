// create a custom popover component using material-ui that takes children
// Compare this snippet from src/Components/UI/CustomPopover.tsx:
import React from 'react'
import Popover from '@mui/material/Popover';

interface CustomPopoverProps {
  open: boolean
  anchorEl: HTMLElement | null
  handleClose: () => void
  popStyles?: React.CSSProperties
}

const CustomPopover = ({ open, anchorEl, handleClose, children, popStyles }: React.PropsWithChildren<CustomPopoverProps>) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 110,
        horizontal: 1010,
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      sx={{ ...popStyles }}
    >
      {children}
    </Popover>
  )
}

export default CustomPopover