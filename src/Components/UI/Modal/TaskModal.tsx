import React from 'react'
import CustomModal from './CustomModal'
import Box from '@mui/material/Box';
import DialogueTopbar from '../../Layouts/DialogueTopbar';

interface Props {
  open: boolean
  toggleOpen: () => void
}

const styles = {
  top: '50%',
  left: '52.2%',
  height: 760,
  width: 1350,
  justifyContent: 'flex-start',
}

const TaskModal = ({ open, toggleOpen }: Props) => {
  return (
    <CustomModal open={open} onClose={toggleOpen} sx={styles}>
      <Box>
        <DialogueTopbar toggleOpen={toggleOpen} />
      </Box>
    </CustomModal>
  )
}

export default TaskModal