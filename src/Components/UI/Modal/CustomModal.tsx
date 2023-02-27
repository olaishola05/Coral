import React from 'react'
import { Modal, ModalProps } from '@mui/material'
import Box from '@mui/material/Box'

const CustomModal = ({ open, onClose, children, sx }: ModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={sx}>
        {children}
      </Box>
    </Modal>
  )
}

export default CustomModal