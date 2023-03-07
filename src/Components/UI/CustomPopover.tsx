// create a custom popover component using material-ui that takes children
// Compare this snippet from src/Components/UI/CustomPopover.tsx:
import React from 'react'
import Popover from '@mui/material/Popover';

interface CustomPopoverProps {
  open: boolean
  anchorEl: HTMLElement | null
  handleClose: () => void
  popStyles?: React.CSSProperties
  id: string | undefined
}

const CustomPopover = ({ open, anchorEl, handleClose, children, popStyles, id }: React.PropsWithChildren<CustomPopoverProps>) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      sx={{ ...popStyles }}
    >
      {children}
    </Popover>
  )
}

export default CustomPopover