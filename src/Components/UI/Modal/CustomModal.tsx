import React from 'react'
import { Modal, ModalProps } from '@mui/material'
import Box from '@mui/material/Box'

const defaultStyles = {
  position: 'absolute' as 'absolute',
  display: 'flex',
  flexDirection: 'column' as 'column',
  bgcolor: 'background.paper',
  borderRadius: '15px',
  transform: 'translate(-50%, -50%)',
  boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
  p: 3,
}

const CustomModal = ({ open, onClose, children, sx }: ModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...defaultStyles, ...sx }}>
        {children}
      </Box>
    </Modal>
  )
}

export default CustomModal