import React from 'react'
import { CustomModal } from './'
import Box from '@mui/material/Box';
import { DialogueTopbar } from '../../Layouts';
import DialogueContainer from '../DialogueContainer';
import { DialogueFooter } from '../../Layouts';

interface Props {
  open: boolean
  toggleOpen: () => void
}

const styles = {
  top: '50%',
  left: '52.2%',
  height: 770,
  width: 1350,
  justifyContent: 'flex-start',
}

const TaskModal = ({ open, toggleOpen }: Props) => {
  return (
    <CustomModal open={open} onClose={toggleOpen} sx={styles}>
      <Box>
        <DialogueTopbar toggleOpen={toggleOpen} />
        <DialogueContainer />
        <DialogueFooter />
      </Box>
    </CustomModal>
  )
}

export default TaskModal